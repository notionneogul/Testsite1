// 1. 테마별 부품 데이터베이스 (AI가 조립할 재료들)
const themes = {
    grace: { // 은혜/물 테마
        start: ["{word}의 은혜가 강물처럼 당신의 영혼에 흘러들어,", "{word}처럼 깊은 주의 사랑이 메마른 마음을 촉촉이 적시고,"],
        mid: ["{word}의 파도를 타고 주님이 주시는 참된 평안을 누리며,", "{word}의 물결 속에서 하나님의 세밀한 손길을 날마다 경험하고,"],
        end: ["{word}의 풍성한 결실이 당신의 평생에 마르지 않길 축복합니다."]
    },
    light: { // 빛/해 테마
        start: ["{word}의 밝은 빛이 당신의 앞길을 환하게 비추어주고,", "{word}처럼 찬란한 주의 영광이 당신의 오늘을 가득 채우며,"],
        mid: ["{word}의 등불을 들고 어두운 세상을 밝히는 주역이 되고,", "{word}의 미소로 주변에 따뜻한 하늘 나라를 전하는 자 되어,"],
        end: ["{word}의 광채가 당신의 얼굴 위에서 영원히 빛나길 소망합니다."]
    },
    walk: { // 동행/길 테마
        start: ["{word}의 길 위에서 주님과 손잡고 행복한 걸음을 시작하고,", "{word}처럼 변함없는 주님의 동행이 당신의 삶을 든든히 지키며,"],
        mid: ["{word}의 사명을 향해 한 걸음씩 믿음으로 전진하는 용기를 얻고,", "{word}의 자리마다 주님이 예비하신 복을 보석처럼 발견하여,"],
        end: ["{word}의 약속을 붙들고 주와 함께 영원히 승리하는 삶 되소서."]
    },
    heart: { // 마음/성품 테마
        start: ["{word}의 예쁜 마음이 주님 보시기에 가장 아름다운 선물이 되고,", "{word}처럼 고운 당신의 성품 속에 예수님의 향기가 배어 나오며,"],
        mid: ["{word}의 기도로 하늘 문을 열고 주님의 마음을 시원케 해드리고,", "{word}의 고백으로 날마다 주님께 더 가까이 나아가는 은혜가 있어,"],
        end: ["{word}의 평강이 당신의 생각과 마음을 포근히 안아주길 축원합니다."]
    }
};

const charWords = {
    '김': ['기도', '기쁨', '기다림'], '이': ['이름', '이슬', '이곳'], '박': ['박수', '밝은', '밤하늘'],
    '최': ['최고', '최선', '처음'], '정': ['정성', '정결', '정직'], '강': ['강건', '강가', '가장'],
    '조': ['조용', '조화', '좋은'], '윤': ['윤슬', '윤택', '우리'], '성': ['성령', '성실', '선물'],
    '은': ['은혜', '은총', '은은한'], '혜': ['혜성', '지혜', '밝은'], '지': ['지혜', '지금', '지극한'],
    '서': ['서광', '서로', '서약'], '민': ['민들레', '믿음', '미소'], '유': ['유난히', '유일한', '유연한'],
    '한': ['한결', '한마음', '환한'], '진': ['진실', '진심', '진귀한'], '희': ['희망', '기쁨', '하얀'],
    '영': ['영원', '영광', '영혼'], '준': ['준비', '예쁜', '귀한'], '훈': ['훈훈한', '포근한', '향기'],
    '하': ['하늘', '하나님', '하루'], '나': ['나의', '나그네', '나눔'], '수': ['수줍은', '수정', '맑은'],
    '용': ['용기', '용납', '믿음'], '전': ['전부', '전심', '모든'], '무': ['무지개', '무한한', '무성한'],
    '겸': ['겸손', '겸허한', '고운'], '제': ['제일', '언제나', '함께']
};

const finalBliss = ['주님의 이름으로 당신을 축복합니다.', '영원토록 주와 동행하는 복된 인생 되소서.'];

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const loadingArea = document.getElementById('loadingArea');
const cardsContainer = document.getElementById('cardsContainer');

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return alert('성함을 입력해주세요!');
    
    generateBtn.disabled = true;
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');
    
    setTimeout(() => {
        generateThreeCreativeOptions(name);
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }, 1500);
});

function generateThreeCreativeOptions(name) {
    cardsContainer.innerHTML = '';
    const themeKeys = Object.keys(themes);
    
    for (let i = 1; i <= 3; i++) {
        // 각 카드마다 무작위 테마 선정 (이것이 문맥의 일관성을 만듦)
        const theme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];
        const poemLines = generateSentenceByTheme(name, theme);
        cardsContainer.appendChild(createCard(poemLines, i));
    }
    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateSentenceByTheme(name, theme) {
    const chars = name.split('');
    const lines = chars.map((char, index) => {
        let pos = index === 0 ? 'start' : (index === chars.length - 1 ? 'end' : 'mid');
        let wordList = charWords[char] || [char + '의 마음'];
        let word = wordList[Math.floor(Math.random() * wordList.length)];
        let template = theme[pos][Math.floor(Math.random() * theme[pos].length)];
        
        return template.replace(/{word}/g, word);
    });
    lines.push(finalBliss[Math.floor(Math.random() * finalBliss.length)]);
    return lines;
}

function createCard(lines, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `<span class="card-tag">AI 축복 제안 ${index}</span><div class="poem-content"></div>`;
    
    const content = card.querySelector('.poem-content');
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        if (i === lines.length - 1) line.classList.add('final-line');
        
        // 타이핑 효과를 위해 빈 채로 추가 후 나중에 채움
        content.appendChild(line);
        typeWriter(line, text, i * 500); // 딜레이를 주어 순차적으로 타이핑
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

function typeWriter(element, text, delay) {
    setTimeout(() => {
        let i = 0;
        element.innerHTML = ''; // 초기화
        
        // 첫 글자 강조를 위한 처리
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
                setTimeout(typing, 30); // 타이핑 속도
            }
        }
        typing();
    }, delay);
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
