// 1. 글자별 따뜻하고 쉬운 단어 데이터베이스
const charWords = {
    '김': ['기쁨', '기도', '기다림'], '이': ['이제', '이슬', '이름'], '박': ['박수', '밝은', '밤하늘'],
    '최': ['최고', '최선', '처음'], '정': ['정말', '정성', '정다운'], '강': ['강물', '강건', '가장'],
    '조': ['조금', '조용히', '좋은'], '윤': ['윤슬', '윤택', '우리'], '성': ['성령', '성실', '선물'],
    '은': ['은혜', '은총', '은은한'], '혜': ['혜성', '지혜', '밝은'], '지': ['지혜', '지금', '지극한'],
    '서': ['서광', '서로', '서약'], '민': ['민들레', '믿음', '미소'], '유': ['유난히', '유연한', '유일한'],
    '한': ['한결', '한마음', '환한'], '진': ['진실', '진심', '진귀한'], '희': ['희망', '기쁨', '하얀'],
    '영': ['영원', '영광', '영혼'], '준': ['준비', '예쁜', '귀한'], '훈': ['훈훈한', '포근한', '향기'],
    '하': ['하늘', '하나님', '하루'], '나': ['나의', '나그네', '나눔'], '수': ['수줍은', '수정', '맑은'],
    '찬': ['찬양', '찬란한', '참된'], '예': ['예수', '예쁜', '예배'], '신': ['신실', '신령', '새로운'],
    '주': ['주님', '주신', '포근한'], '동': ['동행', '동녘', '햇살'], '용': ['용기', '용서', '믿음'],
    '전': ['전부', '전심', '모든'], '무': ['무지개', '무한한', '무성한'], '겸': ['겸손', '겸허한', '고운'],
    '제': ['제일', '언제나', '함께']
};

// 2. 일상적이고 부드러운 연결 모듈
const sentenceModules = {
    start: [
        "{word}의 따스한 온기가 당신의 하루를 행복하게 만들고,",
        "{word}처럼 맑은 주님의 사랑이 마음속에 가득 차오르며,",
        "{word}의 향기가 당신의 삶을 아름다운 색으로 물들여가고,",
        "{word}로 시작하는 오늘이 당신에게 가장 큰 선물이 되며,"
    ],
    mid: [
        "{word}의 마음으로 이웃에게 작은 행복을 전하는 사람이 되고,",
        "{word}의 빛을 발하며 당신이 가는 곳마다 웃음꽃이 피어나고,",
        "{word}의 고백이 당신의 삶 속에서 예쁜 열매를 맺어가며,",
        "{word}를 통해 주님의 선한 뜻을 차근차근 이루어가서,"
    ],
    end: [
        "{word}의 평안함이 당신의 앞길을 늘 지켜주길 축복합니다.",
        "{word}의 결실이 당신의 소중한 꿈 위에 풍성히 맺히길 기도해요.",
        "{word}의 기적이 당신의 일상에 잔잔한 감동으로 다가가길 원합니다.",
        "{word}의 약속을 믿고 주님과 함께 예쁜 걸음을 걷는 당신 되길 소망합니다."
    ]
};

const fallbacks = ["사랑", "소망", "믿음", "감사", "행복"];

const finalBliss = [
    '당신의 이름처럼 아름다운 삶을 축복합니다.',
    '오늘도 주님 안에서 가장 행복한 사람 되세요.',
    '따뜻한 주님의 손길이 늘 당신과 함께하시길.',
    '하늘의 평화가 당신의 마음을 포근히 안아주길 원합니다.'
];

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const poemContent = document.getElementById('poemContent');
const copyBtn = document.getElementById('copyBtn');

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function constructSentence(char, position) {
    let wordList = charWords[char] || [char + getRandom(fallbacks)];
    let word = getRandom(wordList);
    let template = getRandom(sentenceModules[position]);
    return template.replace(/{word}/g, word);
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
    
    characters.forEach((char, index) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        line.style.animationDelay = `${index * 0.4}s`;
        
        let position = 'mid';
        if (index === 0) position = 'start';
        else if (index === characters.length - 1) position = 'end';

        let phrase = constructSentence(char, position);
        const firstChar = phrase.charAt(0);
        const restOfPhrase = phrase.substring(1);
        
        line.innerHTML = `<span class="first-char">${firstChar}</span>${restOfPhrase}`;
        poemContent.appendChild(line);
    });

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
