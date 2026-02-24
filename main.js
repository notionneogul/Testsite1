const dictionary = {
    '홍': ['홍수처럼 밀려오는 주의 은혜', '홍해를 가르신 하나님의 능력으로', '홍조 띤 얼굴로 주를 찬양하네'],
    '길': ['길 되신 예수님을 따라가는 삶', '길 잃은 어린 양을 찾으시는 사랑', '길가에 핀 꽃 한 송이에도 깃든 섭리'],
    '동': ['동행하시는 성령님의 따뜻한 손길', '동쪽에서 서쪽까지 주의 영광이', '동녘의 새벽빛처럼 다가오는 소망'],
    '이': ['이제는 내가 산 것이 아니요', '이토록 크신 사랑 무엇으로 갚으리', '이슬 맺힌 풀잎처럼 순결한 마음'],
    '김': ['김이 모락모락 나는 생명의 떡', '김을 내뿜으며 전진하는 믿음의 경주', '김이 서린 창가에서 드리는 새벽 기도'],
    '박': ['박수 치며 기쁨으로 주를 노래해', '박토를 옥토로 바꾸시는 기적', '박동하는 심장마다 새겨진 주의 사랑'],
    '최': ['최고의 예배를 주님께 드립니다', '최선을 다해 선한 싸움을 싸우리', '최초의 사랑 그 설렘을 회복하소서'],
    '정': ['정결한 마음 주시옵소서', '정의가 강물처럼 흐르는 세상', '정성을 다해 드리는 향기로운 제물'],
    '나': ['나의 힘이 되신 여호와여', '나를 지으신 이가 하나님이시니', '나그네 길 인생 주와 함께 걷네'],
    '미': ['미소 짓는 주님의 얼굴을 보라', '미래와 희망을 주시는 약속의 말씀', '미완의 내 삶을 빚으시는 토기장이'],
    '성': ['성령의 열매가 맺히는 아름다운 삶', '성벽을 지키는 파수꾼의 간절함으로', '성결한 삶을 향한 거룩한 걸음'],
    '민': ['민족을 가슴에 품고 기도하는 마음', '민낯의 진실함으로 주 앞에 서리', '민들레 홀씨처럼 복음을 실어 나르네'],
    '지': ['지극히 높은 곳에는 하나님께 영광', '지금도 살아 역사하시는 주님', '지혜와 계시의 영을 부어주소서'],
    '수': ['수고하고 무거운 짐 진 자들아', '수많은 별들보다 빛나는 주의 약속', '수면 위에 비친 평온한 주의 손길'],
    '하': ['하늘 소망으로 채워진 오늘', '하루를 기도로 시작하는 기쁨', '하나님의 형상을 닮은 당신의 미소'],
    '윤': ['윤슬처럼 반짝이는 은혜의 바다', '윤택한 영혼의 샘물이 넘쳐나길', '윤기를 더하시는 성령의 기름 부음'],
    '선': ['선한 목자 되신 우리 주님', '선포되는 말씀마다 생명이 있네', '선물로 주신 오늘을 감사함으로'],
    '영': ['영원한 생명의 길로 인도하소서', '영광의 광채가 온 땅을 덮으리', '영혼의 깊은 곳에서 터져 나오는 찬양'],
};

const fallbacks = [
    '의 마음속에 주님의 평강이 가득하길',
    '님을 향한 하늘의 축복이 쏟아집니다',
    '라는 이름 위에 은혜가 머뭅니다',
    '이 걷는 모든 길에 천사가 동행하길',
    '속에 깃든 주의 형상이 아름답습니다',
    '을 통해 영광 받으실 주를 찬양합니다'
];

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const poemContent = document.getElementById('poemContent');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert('이름을 입력해주세요!');
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
        
        let phrase = '';
        if (dictionary[char]) {
            const options = dictionary[char];
            phrase = options[Math.floor(Math.random() * options.length)];
            if (phrase.startsWith(char)) {
                phrase = phrase.substring(1);
            }
        } else {
            const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
            phrase = fallback;
        }

        line.innerHTML = `<span class="first-char">${char}</span>${phrase}`;
        poemContent.appendChild(line);
    });

    resultArea.classList.remove('hidden');
    
    // Haptic feedback if available
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }

    setTimeout(() => {
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
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
        nameInput.blur(); // Close mobile keyboard
    }
});
