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
        // 우리가 만든 서버 API(/api/generate)로 요청을 보냅니다.
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || '생성 실패');
        }

        const text = await response.text();
        await renderResult(text);
        
    } catch (error) {
        console.error("오류:", error);
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
        const jsonStr = text.substring(startIdx, endIdx + 1);
        const poemOptions = JSON.parse(jsonStr);

        poemOptions.forEach((poemLines, i) => {
            cardsContainer.appendChild(createCard(poemLines, i + 1));
        });
        
        resultArea.classList.remove('hidden');
        scrollToResult();
    } catch (e) {
        throw new Error("AI 응답을 처리하는 중 오류가 발생했습니다.");
    }
}

function createCard(lines, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `<span class="card-tag">축복 제안 ${index}</span><div class="poem-content"></div>`;
    
    const content = card.querySelector('.poem-content');
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        if (i === lines.length - 1) {
            line.classList.add('final-line');
            content.appendChild(line);
            line.innerText = text;
        } else {
            content.appendChild(line);
            typeWriter(line, text, i * 600);
        }
    });

    const btn = document.createElement('button');
    btn.className = 'copy-btn-small';
    btn.innerText = '이 축복 메시지 복사하기';
    btn.onclick = () => {
        navigator.clipboard.writeText(lines.join('\n')).then(() => {
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
