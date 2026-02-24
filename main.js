// 1. 글자별 핵심 단어 데이터베이스
const charWords = {
    '김': ['기도', '기쁨', '기대'], '이': ['이제', '이슬', '이름'], '박': ['박수', '박동', '박토'],
    '최': ['최고', '최선', '최초'], '정': ['정결', '정의', '정직'], '강': ['강건', '강가', '강력'],
    '조': ['조용', '조화', '조력'], '윤': ['윤슬', '윤택', '윤기'], '성': ['성령', '성실', '성결'],
    '은': ['은혜', '은총', '은밀'], '혜': ['혜성', '혜안', '혜택'], '지': ['지혜', '지금', '지극'],
    '서': ['서광', '서로', '서약'], '민': ['민족', '민들레', '민감'], '유': ['유일', '유업', '유연'],
    '한': ['하늘', '한결', '한마음'], '진': ['진리', '진실', '진귀'], '희': ['희망', '희생', '희귀'],
    '영': ['영원', '영광', '영성'], '준': ['준비', '준엄', '준비'], '훈': ['훈훈', '훈계', '훈습'],
    '하': ['하나님', '하늘', '하루'], '나': ['나의', '나그네', '나눔'], '수': ['수고', '수정', '수호'],
    '찬': ['찬양', '찬란', '찬송'], '예': ['예수', '예비', '예배'], '신': ['신실', '신령', '신앙'],
    '주': ['주님', '주권', '주목'], '동': ['동행', '동녘', '동행']
};

// 2. 문장을 구성하는 모듈 (수식어 및 연결구)
const sentenceModules = {
    start: [
        "{word}의 향기가 당신의 삶을 아름답게 물들이고,",
        "{word}처럼 깊은 주의 사랑이 마음속에 가득 차오르며,",
        "{word}의 물결이 메마른 영혼을 촉촉이 적시는 은혜가 있고,",
        "{word}를 통해 일하시는 하나님의 손길을 날마다 경험하며,"
    ],
    mid: [
        "{word}의 마음으로 이웃을 사랑하며 주의 통로로 쓰임 받고,",
        "{word}의 빛을 발하여 어두운 세상을 환하게 밝히는 주역이 되며,",
        "{word}의 고백이 당신의 입술에서 끊이지 않는 축복을 누리고,",
        "{word}로 세상을 이기는 믿음의 장성한 분량까지 자라나서,"
    ],
    end: [
        "{word}의 신비로운 평강이 당신의 앞길을 영원히 인도하시길 축복합니다.",
        "{word}의 결실이 당신의 가정과 일터 위에 풍성히 맺히길 기도합니다.",
        "{word}의 기적이 당신의 삶에 매일같이 일어나는 복된 인생 되소서.",
        "{word}의 약속을 붙들고 주와 함께 끝까지 승리하는 삶 되길 원합니다."
    ]
};

const fallbacks = ["사랑", "소망", "믿음", "감사", "평안"];

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '영원토록 주와 동행하는 가장 복된 인생 되소서.',
    '예수 그리스도의 은혜와 평강이 늘 함께하시길 기도합니다.',
    '하늘의 평강이 당신의 생각과 마음을 굳게 지켜주시길 원합니다.'
];

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const poemContent = document.getElementById('poemContent');
const copyBtn = document.getElementById('copyBtn');

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 문장 생성 엔진
function constructSentence(char, position) {
    // 1. 단어 선택
    let wordList = charWords[char] || [char + getRandom(fallbacks)];
    let word = getRandom(wordList);

    // 2. 모듈 선택
    let template = getRandom(sentenceModules[position]);

    // 3. 조립
    let phrase = template.replace(/{word}/g, word);
    
    // 만약 단어가 한 글자라면(ex: '길') 자연스럽게 처리
    if (word.length === 1 && phrase.startsWith(word + "의")) {
        // '길의' -> '길' 혹은 다른 처리 로직 추가 가능
    }

    return phrase;
}

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert('성함을 입력해주세요!');
        return;
    }
    generatePoem(name);
});

function generatePoem(name) {
    poemContent.innerHTML = '';
    const characters = name.split('');
    const usedPhrases = new Set();
    
    characters.forEach((char, index) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        line.style.animationDelay = `${index * 0.4}s`;
        
        let position = 'mid';
        if (index === 0) position = 'start';
        else if (index === characters.length - 1) position = 'end';

        // 실시간 조합 엔진 가동
        let phrase = constructSentence(char, position);
        
        // 첫 글자 강조 스타일
        const firstChar = phrase.charAt(0);
        const restOfPhrase = phrase.substring(1);
        
        line.innerHTML = `<span class="first-char">${firstChar}</span>${restOfPhrase}`;
        poemContent.appendChild(line);
    });

    // 마무리 축복
    const lastLine = document.createElement('div');
    lastLine.className = 'poem-line final-line';
    lastLine.style.animationDelay = `${characters.length * 0.4}s`;
    lastLine.innerText = getRandom(finalBliss);
    poemContent.appendChild(lastLine);

    resultArea.classList.remove('hidden');
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    setTimeout(() => {
        const yOffset = -50;
        const y = resultArea.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }, 150);
}

copyBtn.addEventListener('click', () => {
    const text = Array.from(document.querySelectorAll('.poem-line'))
        .map(el => el.innerText)
        .join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = '✅ 축복 메시지 복사 완료!';
        copyBtn.classList.add('success');
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.classList.remove('success');
        }, 2000);
    });
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
        nameInput.blur();
    }
});
