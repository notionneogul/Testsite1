import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// 사용자께서 제공하신 Gemini API 키
const API_KEY = "AIzaSyAhQA4FYaG-zP6NLzzc0k-i5K9MVoA4A9A";
const genAI = new GoogleGenerativeAI(API_KEY);
// 안정적인 gemini-pro 모델 사용 (1.5-flash 404 에러 해결)
const model = genAI.getGenerativeModel({ 
    model: "gemini-pro",
    generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
    }
});

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const loadingArea = document.getElementById('loadingArea');
const cardsContainer = document.getElementById('cardsContainer');

generateBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    if (!name) return alert('성함을 입력해주세요!');
    
    // UI 초기화 및 로딩 시작
    generateBtn.disabled = true;
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    try {
        await generateWithAI(name);
    } catch (error) {
        console.error("AI 생성 중 오류:", error);
        // 에러 메시지를 더 구체적으로 표시하여 원인 파악을 돕습니다.
        alert(`축복 생성 실패: ${error.message}\n(API 키 설정이나 네트워크 상태를 확인해주세요.)`);
    } finally {
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }
});

async function generateWithAI(name) {
    cardsContainer.innerHTML = '';
    
    const prompt = `당신은 기독교적인 따뜻한 감성을 가진 전문 시인이자 축복의 메신저입니다. 
입력받은 성함 "${name}"을 바탕으로, 각 글자로 시작하는 ${name.length}행시 축복 메시지를 3가지 다른 버전으로 작성해 주세요.

[작성 원칙]
1. 각 행의 첫 글자는 반드시 이름의 각 글자로 시작해야 합니다. (두음법칙 허용)
2. 주제: 하나님의 사랑, 평강, 소망, 은혜, 성령의 열매, 삶의 축복.
3. 문체: 매우 정중하고 따뜻하며, 시적인 표현을 사용한 존댓말.
4. 마무리: 각 행시의 마지막 행에는 이름과 상관없이 "오늘을 향한 짧은 축복 메시지"를 한 줄 더 추가하세요.

[출력 형식]
반드시 아래와 같은 JSON 배열 형식으로만 응답하세요. 다른 설명은 절대 하지 마세요.
[
  ["1행", "2행", "마지막축복"],
  ["..."],
  ["..."]
]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // JSON 데이터 추출 로직 강화
    try {
        const startIdx = text.indexOf('[');
        const endIdx = text.lastIndexOf(']');
        if (startIdx === -1 || endIdx === -1) {
            throw new Error("AI가 유효한 형식을 생성하지 못했습니다.");
        }
        
        const jsonStr = text.substring(startIdx, endIdx + 1);
        const poemOptions = JSON.parse(jsonStr);

        if (!Array.isArray(poemOptions)) throw new Error("결과 형식이 올바르지 않습니다.");

        poemOptions.forEach((poemLines, i) => {
            cardsContainer.appendChild(createCard(poemLines, i + 1));
        });
        
        resultArea.classList.remove('hidden');
        scrollToResult();
    } catch (e) {
        console.error("파싱 에러 상세:", e, "원본 텍스트:", text);
        throw new Error("응답 데이터 처리 중 오류가 발생했습니다.");
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
            // 첫 글자 강조를 위해 타이핑 효과 함수 호출
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
