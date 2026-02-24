// UI 요소
const generateBtn = document.getElementById('generateBtn');
// 주석 추가: 환경 변수 적용을 위한 재배포용 트리거
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const loadingArea = document.getElementById('loadingArea');
const cardsContainer = document.getElementById('cardsContainer');

generateBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    
    if (!name) return alert('성함을 입력해주세요!');
    
    generateBtn.disabled = true;
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });

        const responseText = await response.text();

        if (!response.ok) {
            let errorMessage = '생성 실패';
            try {
                const errorJson = JSON.parse(responseText);
                errorMessage = errorJson.error || errorMessage;
            } catch (e) {
                errorMessage = `서버 에러 (${response.status})`;
            }
            throw new Error(errorMessage);
        }

        await renderResult(responseText);
        
    } catch (error) {
        console.error("오류 상세:", error);
        alert(`축복 생성 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }
});

async function renderResult(text) {
    cardsContainer.innerHTML = '';
    
    try {
        const startIdx = text.indexOf('[');
        const endIdx = text.lastIndexOf(']');
        if (startIdx === -1 || endIdx === -1) throw new Error("데이터 형식 오류");
        
        const jsonStr = text.substring(startIdx, endIdx + 1);
        const poemOptions = JSON.parse(jsonStr);

        poemOptions.forEach((option, i) => {
            // option은 { poem: [], verse: "" } 형태임
            const poemLines = option.poem || option; // 구버전 대응
            const verse = option.verse || "";
            cardsContainer.appendChild(createCard(poemLines, verse, i + 1));
        });
        
        resultArea.classList.remove('hidden');
        scrollToResult();
    } catch (e) {
        console.error("렌더링 에러:", e);
        throw new Error("AI 응답을 처리하는 중 오류가 발생했습니다.");
    }
}

function createCard(lines, verse, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `<span class="card-tag">축복 제안 ${index}</span><div class="poem-content"></div>`;
    
    const content = card.querySelector('.poem-content');
    
    // N행시 출력
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        content.appendChild(line);
        typeWriter(line, text, i * 600);
    });

    // 추천 성구 추가 (마지막 시 이후에 출력되도록 딜레이)
    if (verse) {
        setTimeout(() => {
            const verseLine = document.createElement('div');
            verseLine.className = 'verse-line';
            verseLine.innerHTML = `<span class="verse-label">📜 추천 성구</span><p>${verse}</p>`;
            content.appendChild(verseLine);
        }, lines.length * 600 + 500);
    }

    const btn = document.createElement('button');
    btn.className = 'copy-btn-small';
    btn.innerText = '이 축복 메시지 복사하기';
    btn.onclick = () => {
        const fullMessage = [...lines, "", verse].join('\n');
        navigator.clipboard.writeText(fullMessage).then(() => {
            const original = btn.innerText;
            btn.innerText = '✅ 복사 완료!';
            btn.classList.add('success');
            setTimeout(() => { btn.innerText = original; btn.classList.remove('success'); }, 2000);
        });
    };
    card.appendChild(btn);
    return card;
}

function typeWriter(element, text, delay) {
    setTimeout(() => {
        let i = 0;
        element.innerHTML = '';
        const firstChar = text[0];
        const rest = text.substring(1);
        const firstSpan = document.createElement('span');
        firstSpan.className = 'first-char';
        firstSpan.innerText = firstChar;
        element.appendChild(firstSpan);
        function typing() {
            if (i < rest.length) {
                element.innerHTML += rest.charAt(i);
                i++;
                setTimeout(typing, 30);
            }
        }
        typing();
    }, delay);
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
