// UI 요소
const generateBtn = document.getElementById('generateBtn');
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
            const poemLines = option.poem || option;
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
    
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        content.appendChild(line);
        typeWriter(line, text, i * 600);
    });

    if (verse) {
        setTimeout(() => {
            const verseLine = document.createElement('div');
            verseLine.className = 'verse-line';
            verseLine.innerHTML = `<span class="verse-label">📜 추천 성구</span><p>${verse}</p>`;
            content.appendChild(verseLine);
        }, lines.length * 600 + 500);
    }

    // 버튼 그룹 추가
    const btnGroup = document.createElement('div');
    btnGroup.className = 'card-btn-group';
    
    // 복사 버튼
    const copyBtn = document.createElement('button');
    copyBtn.className = 'action-btn copy-btn';
    copyBtn.innerText = '메시지 복사';
    copyBtn.onclick = () => {
        const fullMessage = [...lines, "", verse].join('\n');
        navigator.clipboard.writeText(fullMessage).then(() => {
            copyBtn.innerText = '✅ 복사 완료!';
            setTimeout(() => { copyBtn.innerText = '메시지 복사'; }, 2000);
        });
    };

    // 이미지 저장 버튼
    const saveImgBtn = document.createElement('button');
    saveImgBtn.className = 'action-btn save-btn';
    saveImgBtn.innerText = '이미지로 저장';
    saveImgBtn.onclick = () => saveCardAsImage(card, index);

    btnGroup.appendChild(copyBtn);
    btnGroup.appendChild(saveImgBtn);
    card.appendChild(btnGroup);
    
    return card;
}

function saveCardAsImage(cardElement, index) {
    // 캡처 시 불필요한 요소(버튼 등) 잠시 숨기기
    const btnGroup = cardElement.querySelector('.card-btn-group');
    const tag = cardElement.querySelector('.card-tag');
    btnGroup.style.opacity = '0';
    tag.style.opacity = '0';

    html2canvas(cardElement, {
        scale: 2, // 고해상도 캡처
        backgroundColor: '#fdfbf7', // 배경색 지정
        useCORS: true, // 외부 리소스 허용
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `축복메시지_${index}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // 다시 버튼 보이기
        btnGroup.style.opacity = '1';
        tag.style.opacity = '1';
    });
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
