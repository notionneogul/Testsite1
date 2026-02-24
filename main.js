// --- 내장형 지능 데이터베이스 (위치별 최적화) ---
const builtInLibrary = {
    '김': {
        start: ['기분 좋은 웃음이 당신의 하루를 환하게 열어줍니다.', '기쁨의 노래가 마음속에서 솔솔 피어오르는 오늘입니다.'],
        mid: ['기다려온 소망의 일들이 하나씩 예쁘게 이루어지고 있습니다.', '기도하는 마음마다 따뜻한 평화가 가득히 채워집니다.'],
        end: ['기적 같은 행복이 당신의 모든 날에 가득하길 축복합니다.', '기분 좋은 일들만 가득한 멋진 인생이 되시길 소망해요.']
    },
    '이': {
        start: ['이토록 따뜻한 사랑이 오늘 당신을 포근히 덮어줍니다.', '이슬처럼 맑고 깨끗한 마음으로 하루를 시작합니다.'],
        mid: ['이제는 걱정보다 소망을 더 많이 품고 씩씩하게 걷게 됩니다.', '이 세상에서 가장 소중한 당신의 이름을 주님이 기억하십니다.'],
        end: ['이름처럼 아름다운 삶을 마음껏 펼쳐나가시길 응원해요.', '이전보다 더 행복하고 웃음꽃 피는 날들이 가득하세요.']
    },
    '박': {
        start: ['밝은 햇살이 당신의 창가를 제일 먼저 찾아옵니다.', '박수 소리처럼 기분 좋은 일들이 당신의 삶에 넘쳐납니다.'],
        mid: ['밝게 빛나는 별처럼 당신의 존재가 주변을 환하게 비춥니다.', '밝고 맑은 마음으로 세상을 아름답게 바라보는 눈이 열립니다.'],
        end: ['밝아오는 내일이 오늘보다 더 예쁘게 빛나길 축복합니다.', '박수받기에 충분한 당신의 귀한 삶을 진심으로 응원해요.']
    },
    '전': {
        start: ['전부이신 주님의 손길이 당신의 삶을 든든하게 붙드십니다.', '전심으로 주를 찾는 당신에게 하늘의 보화가 열리는 날입니다.'],
        mid: ['전례 없는 주님의 은혜가 당신의 일상을 매일 새롭게 하시고.', '전신 갑주를 입은 용사처럼 세상의 유혹을 믿음으로 이겨냅니다.'],
        end: ['전 세계에 주의 사랑을 흘려보내는 축복의 통로가 되소서.', '전능하신 하나님의 평강이 당신의 앞길을 영원히 지키십니다.']
    },
    '진': {
        start: ['진실한 마음으로 주를 대하는 당신의 모습이 참 귀합니다.', '진귀한 보물보다 당신을 더 사랑하시는 하나님의 진심이 느껴집니다.'],
        mid: ['진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 사람이 됩니다.', '진리의 말씀을 등불 삼아 어두운 길도 용기 있게 걸어갑니다.'],
        end: ['진짜 행복이 무엇인지 당신의 삶을 통해 보여주는 증인이 되소서.', '진심 어린 당신의 기도가 하늘 보좌에 상달되어 기적이 일어납니다.']
    },
    '희': {
        start: ['희망의 노래가 당신의 삶 속에 늘 기쁨으로 울려 퍼집니다.', '희귀하고 값진 보석처럼 당신의 영혼이 귀하게 쓰임 받습니다.'],
        mid: ['희망찬 내일의 약속을 붙들고 오늘을 씩씩하게 살아냅니다.', '희생과 사랑으로 헌신하는 당신의 손길에 주님이 복을 더하십니다.'],
        end: ['희망의 항구로 인도하시는 주님과 늘 동행하는 삶이 되소서.', '희망 가득한 당신의 앞날에 좋은 일들만 가득하길 빌어요.']
    },
    '하': {
        start: ['하늘 문을 활짝 여시고 쏟아지는 축복을 가득 받으시길.', '하나님의 형상을 닮은 당신은 세상에서 가장 소중한 사람입니다.'],
        mid: ['하루의 시작과 끝이 오직 감사의 고백으로 가득 채워집니다.', '하늘 소망 가슴에 품고 주님과 함께 예쁜 걸음을 걷게 됩니다.'],
        end: ['하늘 가득한 주님의 영광이 당신의 앞길을 찬란히 비추길 빌어요.', '하나님의 큰 기쁨이 되는 당신의 모든 날을 축복합니다.']
    }
};

// 조사 처리 엔진
function getJosa(char, type) {
    const code = char.charCodeAt(0);
    if (code < 44032 || code > 55203) return '';
    const hasBatchim = (code - 44032) % 28 !== 0;
    const josaMap = {
        '이/가': hasBatchim ? '이' : '가',
        '은/는': hasBatchim ? '은' : '는',
        '을/를': hasBatchim ? '을' : '를',
        '으로/로': hasBatchim ? '으로' : '로',
        '이라는/라는': hasBatchim ? '이라는' : '라는'
    };
    return josaMap[type] || '';
}

const fallbacks = {
    start: (char) => `${char}${getJosa(char, '이라는/라는')} 소중한 이름 위에 주님의 특별한 축복이 머뭅니다.`,
    mid: (char) => `${char}${getJosa(char, '와/과')} 함께하시는 주님의 온기가 삶의 자리마다 가득합니다.`,
    end: (char) => `${char}${getJosa(char, '이/가')} 걷는 모든 길에 주님의 따뜻한 동행이 있길 축복합니다.`
};

const finalBliss = [
    '주님의 이름으로 당신을 축복합니다.',
    '영원토록 주와 동행하는 복된 인생 되소서.',
    '따스한 주님의 손길이 당신을 포근히 안아주시길.',
    '하늘의 평화와 기쁨이 늘 함께하시길 기도합니다.'
];

// UI 요소
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
        generateThreeOptions(name);
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }, 1500);
});

function generateThreeOptions(name) {
    cardsContainer.innerHTML = '';
    const globalUsed = new Set();

    for (let i = 1; i <= 3; i++) {
        const lines = generateSinglePoem(name, globalUsed);
        cardsContainer.appendChild(createCard(lines, i));
    }

    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateSinglePoem(name, globalUsed) {
    const chars = name.split('');
    const lines = chars.map((char, index) => {
        let position = index === 0 ? 'start' : (index === chars.length - 1 ? 'end' : 'mid');
        let phrase = '';
        
        if (builtInLibrary[char]) {
            const options = builtInLibrary[char][position];
            let available = options.filter(opt => !globalUsed.has(opt));
            if (available.length === 0) available = options;
            phrase = available[Math.floor(Math.random() * available.length)];
        } else {
            phrase = fallbacks[position](char);
        }
        
        globalUsed.add(phrase);
        return phrase;
    });
    lines.push(getRandom(finalBliss));
    return lines;
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
