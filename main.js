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
    
    // N행시 출력
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        content.appendChild(line);
        typeWriter(line, text, i * 600);
    });

    // 추천 성구 추가 (타이핑 후 등장하도록 함)
    if (verse) {
        setTimeout(() => {
            const verseLine = document.createElement('div');
            verseLine.className = 'verse-line';
            verseLine.innerHTML = `<span class="verse-label">📜 추천 성구</span><p>${verse}</p>`;
            content.appendChild(verseLine);
        }, lines.length * 600 + 300);
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
            const original = copyBtn.innerText;
            copyBtn.innerText = '✅ 완료';
            setTimeout(() => { copyBtn.innerText = original; }, 2000);
        });
    };

    // 이미지 저장 버튼
    const saveImgBtn = document.createElement('button');
    saveImgBtn.className = 'action-btn save-btn';
    saveImgBtn.innerText = '이미지 저장';
    saveImgBtn.onclick = () => saveCardAsImage(card, index);

    btnGroup.appendChild(copyBtn);
    btnGroup.appendChild(saveImgBtn);
    card.appendChild(btnGroup);
    
    return card;
}

function saveCardAsImage(cardElement, index) {
    const saveBtn = cardElement.querySelector('.save-btn');
    const originalText = saveBtn.innerText;
    saveBtn.innerText = '저장 중...';

    // 캡처 시 불필요한 요소(버튼 그룹) 잠시 숨기기
    const btnGroup = cardElement.querySelector('.card-btn-group');
    const tag = cardElement.querySelector('.card-tag');
    btnGroup.style.display = 'none';
    tag.style.opacity = '0';

    // 성구가 나타날 때까지 기다린 후 캡처 (최대 1초 대기)
    setTimeout(() => {
        html2canvas(cardElement, {
            scale: 2,
            backgroundColor: '#fdfbf7',
            useCORS: true,
            allowTaint: true,
            logging: false,
            onclone: (clonedDoc) => {
                // 복제된 문서에서 버튼 그룹을 완전히 제거하여 여백 방지
                const allClonedCards = clonedDoc.querySelectorAll('.poem-card');
                const targetClonedCard = Array.from(allClonedCards)[index - 1];
                if (targetClonedCard) {
                    targetClonedCard.style.paddingBottom = '40px';
                    // 타이핑이 덜 끝났을 수 있는 상황을 대비해 opacity 강제 설정
                    const poemLines = targetClonedCard.querySelectorAll('.poem-line');
                    poemLines.forEach(line => line.style.opacity = '1');
                    const verseLine = targetClonedCard.querySelector('.verse-line');
                    if (verseLine) verseLine.style.display = 'block';
                }
            }
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `축복메시지_${index}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // 원상 복구
            btnGroup.style.display = 'flex';
            tag.style.opacity = '1';
            saveBtn.innerText = originalText;
        }).catch(err => {
            console.error('이미지 저장 실패:', err);
            btnGroup.style.display = 'flex';
            tag.style.opacity = '1';
            saveBtn.innerText = originalText;
        });
    }, 500); // 캡처 전 0.5초의 여유 시간을 주어 성구 렌더링 확인
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
