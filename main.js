// 1. 글자별 핵심 단어 (로컬 엔진용)
const coreWords = {
    '김': ['기쁨', '기도', '기대', '기분 좋은 웃음'], '이': ['이름', '이슬', '이제', '이토록 큰 사랑'],
    '박': ['박수', '밝은 햇살', '밤하늘의 별', '밝은 미소'], '최': ['최고의 선물', '처음 마음', '최선', '참된 평안'],
    '정': ['정성', '정다운 마음', '정직한 삶', '정말 소중한 당신'], '유': ['유난히 따뜻한 사랑', '유일하게 빛나는 가치', '유연한 마음', '유리처럼 맑은 은혜'],
    '은': ['은혜', '은총', '은은한 향기', '은밀한 도우심'], '하': ['하늘', '하나님', '하루', '하늘 소망'],
    '한': ['한결같은 사랑', '환한 미소', '한마음', '한계 없는 복'], '빈': ['빈틈없는 보호', '빈 마음', '빈자리', '빈손의 풍성함'],
    '수': ['수줍은 미소', '수정 같은 평화', '수많은 약속', '수풀 같은 쉼'], '진': ['진심', '진귀한 보물', '진리', '진흙 속의 꽃'],
    '희': ['희망', '희귀한 진주', '희생과 사랑', '희망찬 내일'], '현': ['현명한 지혜', '현재의 감사', '현존하는 영광', '현숙한 성품'],
    '준': ['준비된 복', '준비된 마음', '준비된 그릇', '준비된 사명'], '용': ['용기', '용납', '용솟음치는 힘', '용서의 마음'],
    '겸': ['겸손', '겸허한 순종', '겸전한 성품', '겸손한 동행'], '제': ['제일 먼저', '제단의 불꽃', '제자로서의 길', '제시된 소망']
};

const fragments = {
    start: ["{word}이(가) 당신의 하루를 환하게 열어주고,", "{word}의 향기가 마음속에서 솔솔 피어오르며,", "{word}처럼 따뜻한 사랑이 오늘 당신을 포근히 덮어주길,"],
    mid: ["{word}의 마음으로 주변에 따뜻한 행복을 전하고,", "{word}의 빛을 발하며 당신이 가는 곳마다 웃음꽃이 피어나며,", "{word}의 고백이 당신의 삶 속에서 예쁜 열매를 맺어가고,"],
    end: ["{word}의 평안함이 당신의 앞길을 늘 지켜주길 축복합니다.", "{word}의 결실이 당신의 소중한 꿈 위에 풍성히 맺히길 기도해요.", "{word}의 기적이 당신의 일상에 잔잔한 감동으로 다가가길 원합니다."]
};

const finalBliss = ['주님의 이름으로 당신을 축복합니다.', '언제나 주님과 함께 걷는 가장 행복한 사람 되세요.'];

// UI 요소
const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const cardsContainer = document.getElementById('cardsContainer');
const aiModeToggle = document.getElementById('aiModeToggle');
const apiInputGroup = document.getElementById('apiInputGroup');
const apiKeyInput = document.getElementById('apiKeyInput');

// 설정 로드
apiKeyInput.value = localStorage.getItem('gemini_api_key') || '';
aiModeToggle.addEventListener('change', () => apiInputGroup.classList.toggle('hidden', !aiModeToggle.checked));
apiKeyInput.addEventListener('input', () => localStorage.setItem('gemini_api_key', apiKeyInput.value));

generateBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    if (!name) return alert('성함을 입력해주세요!');

    if (aiModeToggle.checked) {
        const key = apiKeyInput.value.trim();
        if (!key) return alert('AI 모드를 위해 Gemini API Key를 입력해주세요.');
        await generateWithAI(name, key);
    } else {
        generateThreeOptionsLocal(name);
    }
});

// --- 진짜 AI (Gemini) 연동 로직 ---
async function generateWithAI(name, apiKey) {
    cardsContainer.innerHTML = '<div class="poem-card">AI가 은혜로운 삼행시를 창조하는 중입니다...</div>';
    resultArea.classList.remove('hidden');

    const prompt = `성함 '${name}'으로 삼행시(N행시) 3가지를 지어줘. 
    주제는 '신앙인을 위한 따뜻한 축복과 은혜'야. 
    각 행은 반드시 해당 글자로 시작해야 하고, 전체가 하나의 자연스러운 문장으로 이어지게 해줘.
    결과는 반드시 다음 JSON 형식으로만 응답해줘: 
    [
      [{"word": "시작단어", "rest": "나머지문구"}, ...],
      [{"word": "시작단어", "rest": "나머지문구"}, ...],
      [{"word": "시작단어", "rest": "나머지문구"}, ...]
    ]`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        const data = await response.json();
        const resultText = data.candidates[0].content.parts[0].text;
        const allOptions = JSON.parse(resultText);
        
        cardsContainer.innerHTML = '';
        allOptions.forEach((option, i) => {
            const lines = option.map(item => item.word + item.rest);
            lines.push(getRandom(finalBliss));
            cardsContainer.appendChild(createPoemCard(lines, i + 1));
        });
    } catch (e) {
        console.error(e);
        alert('AI 연동 중 오류가 발생했습니다. 로컬 엔진으로 생성합니다.');
        generateThreeOptionsLocal(name);
    }
}

// --- 로컬 엔진 (Fallback) ---
function generateThreeOptionsLocal(name) {
    cardsContainer.innerHTML = '';
    const globalUsed = new Set();
    for (let i = 1; i <= 3; i++) {
        const poemLines = generateCreativePoemLocal(name, globalUsed);
        cardsContainer.appendChild(createPoemCard(poemLines, i));
    }
    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateCreativePoemLocal(name, globalUsed) {
    const chars = name.split('');
    const lines = chars.map((char, index) => {
        let pos = index === 0 ? 'start' : (index === chars.length - 1 ? 'end' : 'mid');
        let word = getRandom(coreWords[char] || [char + '의 마음']);
        let phrase = attachJosa(word, getRandom(fragments[pos]));
        return phrase;
    });
    lines.push(getRandom(finalBliss));
    return lines;
}

function attachJosa(word, template) {
    const hasBatchim = (word.charCodeAt(word.length - 1) - 44032) % 28 !== 0;
    return template.replace(/{word}이\(가\)/g, hasBatchim ? word + '이' : word + '가').replace(/{word}/g, word);
}

function createPoemCard(lines, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.innerHTML = `<span class="card-tag">축복 제안 ${index}</span><div class="poem-content"></div>`;
    const content = card.querySelector('.poem-content');
    
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        if (i === lines.length - 1) {
            line.classList.add('final-line');
            line.innerText = text;
        } else {
            line.innerHTML = `<span class="first-char">${text[0]}</span>${text.substring(1)}`;
        }
        content.appendChild(line);
    });

    const btn = document.createElement('button');
    btn.className = 'copy-btn-small';
    btn.innerText = '이 축복 메시지 복사하기';
    btn.onclick = () => {
        navigator.clipboard.writeText(lines.join('\n')).then(() => {
            btn.innerText = '✅ 복사 완료!';
            btn.classList.add('success');
            setTimeout(() => { btn.innerText = '이 축복 메시지 복사하기'; btn.classList.remove('success'); }, 2000);
        });
    };
    card.appendChild(btn);
    return card;
}

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
