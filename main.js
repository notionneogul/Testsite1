// 1. 글자별 핵심 단어 (누구나 아는 쉬운 단어)
const coreWords = {
    '김': ['기쁨', '기도', '기대', '기분 좋은 웃음'],
    '이': ['이름', '이슬', '이제', '이토록 큰 사랑'],
    '박': ['박수', '밝은 햇살', '밤하늘의 별', '밝은 미소'],
    '최': ['최고의 선물', '처음 마음', '최선', '참된 평안'],
    '정': ['정성', '정다운 마음', '정직한 삶', '정말 소중한 당신'],
    '유': ['유난히 따뜻한 사랑', '유일하게 빛나는 가치', '유연한 마음', '유리처럼 맑은 은혜'],
    '은': ['은혜', '은총', '은은한 향기', '은밀한 도우심'],
    '하': ['하늘', '하나님', '하루', '하늘 소망'],
    '한': ['한결같은 사랑', '환한 미소', '한마음', '한계 없는 복'],
    '빈': ['빈틈없는 보호', '빈 마음', '빈자리', '빈손의 풍성함'],
    '수': ['수줍은 미소', '수정 같은 평화', '수많은 약속', '수풀 같은 쉼'],
    '진': ['진심', '진귀한 보물', '진리', '진흙 속의 꽃'],
    '희': ['희망', '희귀한 진주', '희생과 사랑', '희망찬 내일'],
    '현': ['현명한 지혜', '현재의 감사', '현존하는 영광', '현숙한 성품'],
    '준': ['준비된 복', '준비된 마음', '준비된 그릇', '준비된 사명'],
    '용': ['용기', '용납', '용솟음치는 힘', '용서의 마음'],
    '겸': ['겸손', '겸허한 순종', '겸전한 성품', '겸손한 동행'],
    '제': ['제일 먼저', '제단의 불꽃', '제자로서의 길', '제시된 소망']
};

// 2. 문장 조립용 부품들 (위치별/역할별)
const fragments = {
    start: [
        "{word}이(가) 당신의 하루를 환하게 열어주고,",
        "{word}의 향기가 마음속에서 솔솔 피어오르며,",
        "{word}처럼 따뜻한 사랑이 오늘 당신을 포근히 덮어주길,",
        "{word}로 시작하는 오늘이 당신에게 큰 선물이 되어,"
    ],
    mid: [
        "{word}의 마음으로 주변에 따뜻한 행복을 전하고,",
        "{word}의 빛을 발하며 당신이 가는 곳마다 웃음꽃이 피어나며,",
        "{word}의 고백이 당신의 삶 속에서 예쁜 열매를 맺어가고,",
        "{word}를 통해 일하실 하나님의 선하신 계획을 기대하며,"
    ],
    end: [
        "{word}의 평안함이 당신의 앞길을 늘 지켜주길 축복합니다.",
        "{word}의 결실이 당신의 소중한 꿈 위에 풍성히 맺히길 기도해요.",
        "{word}의 기적이 당신의 일상에 잔잔한 감동으로 다가가길 원합니다.",
        "{word}의 약속을 믿고 주님과 함께 예쁜 걸음을 걷는 당신 되소서."
    ]
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '언제나 주님과 함께 걷는 가장 행복한 사람 되세요.',
    '따스한 주님의 손길이 당신의 하루를 꼭 안아주길 기도해요.',
    '하늘의 평화와 기쁨이 당신의 생각을 굳게 지켜주길 원합니다.'
];

// 조사 자동 처리 엔진
function attachJosa(word, template) {
    const lastChar = word[word.length - 1];
    const code = lastChar.charCodeAt(0);
    const hasBatchim = (code - 44032) % 28 !== 0;

    return template.replace(/{word}이\(가\)/g, hasBatchim ? word + '이' : word + '가')
                   .replace(/{word}/g, word);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const cardsContainer = document.getElementById('cardsContainer');

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert('성함을 입력해주세요!');
        return;
    }
    generateThreeOptions(name);
});

function generateThreeOptions(name) {
    cardsContainer.innerHTML = '';
    const globalUsedCombinations = new Set(); // 전체 카드 간 중복 방지

    for (let i = 1; i <= 3; i++) {
        const poemLines = generateCreativePoem(name, globalUsedCombinations);
        const card = createPoemCard(poemLines, i);
        cardsContainer.appendChild(card);
    }

    resultArea.classList.remove('hidden');
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    setTimeout(() => {
        const yOffset = -50;
        const y = resultArea.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }, 150);
}

function generateCreativePoem(name, globalUsed) {
    const characters = name.split('');
    const lines = [];

    characters.forEach((char, index) => {
        let position = 'mid';
        if (index === 0) position = 'start';
        else if (index === characters.length - 1) position = 'end';

        let wordList = coreWords[char] || [char + '의 마음'];
        let templateList = fragments[position];
        
        let attempt = 0;
        let finalPhrase = "";
        
        // 중복되지 않는 조합을 찾기 위해 최대 10번 시도
        do {
            const word = getRandom(wordList);
            const temp = getRandom(templateList);
            finalPhrase = attachJosa(word, temp);
            attempt++;
        } while (globalUsed.has(finalPhrase) && attempt < 10);

        globalUsed.add(finalPhrase);
        lines.push(finalPhrase);
    });

    lines.push(getRandom(finalBliss));
    return lines;
}

function createPoemCard(lines, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.style.animationDelay = `${index * 0.2}s`;
    
    const tag = document.createElement('span');
    tag.className = 'card-tag';
    tag.innerText = `축복 제안 ${index}`;
    card.appendChild(tag);

    const content = document.createElement('div');
    content.className = 'poem-content';

    lines.forEach((phrase, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        if (i === lines.length - 1) line.classList.add('final-line');
        
        if (i === lines.length - 1) {
            line.innerText = phrase;
        } else {
            const firstChar = phrase.charAt(0);
            const restOfPhrase = phrase.substring(1);
            line.innerHTML = `<span class="first-char">${firstChar}</span>${restOfPhrase}`;
        }
        content.appendChild(line);
    });

    card.appendChild(content);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn-small';
    copyBtn.innerText = '이 축복 메시지 복사하기';
    copyBtn.onclick = (e) => {
        e.stopPropagation();
        copyToClipboard(lines.join('\n'), copyBtn);
    };
    card.appendChild(copyBtn);

    return card;
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = '✅ 복사 완료!';
        btn.classList.add('success');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('success');
        }, 2000);
    });
}

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
        nameInput.blur();
    }
});
