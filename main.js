const dictionary = {
    '김': {
        start: ['기도의 깊은 향기가 하늘 보좌에 상달되어 당신을 포근히 감싸고,', '기쁨의 노래가 마음속 깊은 곳에서 샘물처럼 솟아오르는 오늘 되길,'],
        mid: ['기쁨이 넘치는 삶의 고백을 통해 주님의 살아계심을 온 땅에 증거하며,', '기도로 세상을 이기는 믿음의 단단함이 당신의 영혼 속에 날마다 깊어지고,'],
        end: ['기적 같은 주님의 사랑이 당신의 평생에 마르지 않는 축복이 되길 원합니다.', '기다려온 소망의 열매들이 당신의 삶 속에서 풍성하게 맺히길 간절히 축원해요.']
    },
    '이': {
        start: ['이토록 크신 하나님의 사랑이 오늘 당신의 모든 순간을 덮어주며,', '이슬같이 맑은 주의 평강이 당신의 지친 마음과 생각을 따뜻하게 지키고,'],
        mid: ['이제는 주님 안에서 참된 안식을 누리는 하늘의 기쁨을 충만히 알게 되어,', '이 땅에 주의 나라와 의를 세우는 아름다운 사랑의 통로로 귀하게 쓰임 받으며,'],
        end: ['이름만 불러도 위로가 되는 주님과 평생토록 동행하는 복된 인생 되소서.', '이전보다 더 큰 은혜를 누리는 가장 영광스러운 삶의 주인공이 되길 빌어요.']
    },
    '박': {
        start: ['밝은 햇살이 당신의 창가를 찾아와 주님의 인사를 대신 전해주듯이,', '박수 소리 가득한 찬양의 고백이 당신의 입술에서 날마다 넘쳐나길 바라고,'],
        mid: ['밝게 빛나는 별처럼 당신의 존재가 어두운 세상을 환하게 비추는 빛이 되고,', '박토를 옥토로 바꾸시는 주님의 놀라운 창조의 능력을 삶의 자리에서 맛보며,'],
        end: ['박사보다 지혜로운 하늘의 영감을 당신의 심령에 풍성히 부어주시길 기도해요.', '밝아오는 소망의 아침이 당신의 모든 날들을 찬란하게 비추길 간절히 축복합니다.']
    },
    '전': {
        start: ['전능하신 하나님의 손길이 당신의 모든 연약함을 강건하게 만져주시고,', '전심으로 주를 찾는 당신에게 하늘의 보화가 열리는 기적이 임하는 오늘 되길,'],
        mid: ['전부이신 예수 그리스도를 삶의 주인으로 모시고 당당하고 씩씩하게 살아가며,', '전례 없는 주님의 특별한 은총이 당신의 평범한 일상을 매일 새롭게 변화시켜서,'],
        end: ['전신 갑주를 입고 믿음의 선한 싸움에서 넉넉히 승리하는 용사가 되소서.', '전 세계에 주의 사랑을 흘려보내는 거룩하고 아름다운 축복의 통로가 되길 빌어요.']
    },
    '진': {
        start: ['진리의 말씀이 당신의 앞길에 등불이 되어 실족하지 않게 늘 지켜주시고,', '진실한 고백을 기뻐하시는 주님 앞에 날마다 순전한 아이처럼 서는 당신 되길,'],
        mid: ['진귀한 보석보다 당신을 더 귀히 여기시는 하나님의 마음을 깊이 느끼며 걷고,', '진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 향기로운 주님의 사람 되어,'],
        end: ['진리 안에서 참된 자유를 누리는 가장 행복하고 복된 인생이 되시길 축복합니다.', '진심 어린 당신의 기도가 하늘 보좌에 상달되어 놀라운 응답의 기쁨을 누리소서.']
    },
    '희': {
        start: ['희망의 소망을 주시는 주님 안에서 날마다 새 힘을 얻어 독수리처럼 날아오르고,', '희귀하고 값진 진주처럼 당신의 영혼이 하나님 나라를 위해 귀하게 쓰임 받으며,'],
        mid: ['희생과 사랑으로 헌신하는 당신의 손길을 통해 주님의 나라가 이 땅에 확장되고,', '희망의 항구로 인도하시는 성령님과 손잡고 인생의 바다를 평안히 항해하여,'],
        end: ['희년의 기쁨과 자유함이 당신의 삶 속에 온전하고 풍성하게 임하시길 축원합니다.', '희망찬 내일의 약속을 붙들고 믿음의 경주를 끝까지 완주하는 승리자가 되소서.']
    },
    '하': {
        start: ['하늘 문을 활짝 여시고 쏟아지는 하늘의 복을 당신이 가득 받아 누리시길,', '하나님의 형상을 닮은 당신은 이 세상에서 가장 소중하고 귀한 주님의 편지이며,'],
        mid: ['하루의 시작과 끝이 오직 감사의 고백으로 가득히 채워지는 기쁨을 경험하고,', '하늘 소망 가슴에 품고 주님과 함께 예쁜 꽃길을 사뿐히 걸어가는 주인공 되어,'],
        end: ['하늘 가득한 주님의 영광이 당신의 앞길을 평생토록 찬란하게 비추길 기도합니다.', '하나님 보시기에 가장 아름다운 당신의 모든 날들을 주님의 이름으로 축복해요.']
    }
};

function getJosa(char, type) {
    const code = char.charCodeAt(0);
    if (code < 44032 || code > 55203) return '';
    const hasBatchim = (code - 44032) % 28 !== 0;
    const josaMap = {
        '이/가': hasBatchim ? '이' : '가',
        '은/는': hasBatchim ? '은' : '는',
        '을/를': hasBatchim ? '을' : '를',
        '으로/로': hasBatchim ? '으로' : '로',
        '이라는/라는': hasBatchim ? '이라는' : '라는',
        '와/과': hasBatchim ? '과' : '와'
    };
    return josaMap[type] || '';
}

const fallbacks = {
    start: (char) => `${char}${getJosa(char, '이라는/라는')} 소중한 이름 위에 주님의 특별한 축복이 가득 머물고,`,
    mid: (char) => `${char}${getJosa(char, '와/과')} 함께하시는 주님의 따뜻한 온기가 당신의 삶의 자리마다 가득하며,`,
    end: (char) => `${char}${getJosa(char, '이/가')} 걷는 모든 길에 주님의 따뜻한 동행과 평강이 있길 간절히 축복합니다.`
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '영원토록 주와 동행하는 가장 복된 인생 되소서.',
    '따스한 주님의 손길이 당신의 하루를 꼭 안아주시길 기도해요.',
    '하늘의 평화와 기쁨이 당신의 생각을 굳게 지켜주길 원합니다.'
];

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

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
        const poemLines = generateSinglePoem(name, globalUsed);
        cardsContainer.appendChild(createCard(poemLines, i));
    }

    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateSinglePoem(name, globalUsed) {
    const characters = name.split('');
    const lines = characters.map((char, index) => {
        let position = index === 0 ? 'start' : (index === characters.length - 1 ? 'end' : 'mid');
        let phrase = '';
        
        if (dictionary[char]) {
            const options = dictionary[char][position];
            let available = options.filter(opt => !globalUsed.has(opt));
            if (available.length === 0) available = options;
            phrase = getRandom(available);
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
        if (i === lines.length - 1) line.classList.add('final-line');
        
        if (i === lines.length - 1) {
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
            const originalText = btn.innerText;
            btn.innerText = '✅ 복사 완료!';
            btn.classList.add('success');
            setTimeout(() => { btn.innerText = originalText; btn.classList.remove('success'); }, 2000);
        });
    };
    card.appendChild(btn);
    return card;
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
