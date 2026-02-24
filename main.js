const dictionary = {
    '홍': ['홍수처럼 밀려오는 당신의 매력', '홍차 한 잔의 여유처럼', '홍조 띤 얼굴로 웃어주던 날'],
    '길': ['길가에 핀 꽃처럼 소박하고 예쁘게', '길을 걷다 문득 당신이 생각나면', '길고 긴 시간 끝에 우리 만났으니'],
    '동': ['동화 속 주인공이 된 기분이야', '동이 트는 새벽의 차분함으로', '동그란 눈망울에 비친 내 모습'],
    '이': ['이제는 말할 수 있어요', '이토록 아름다운 날에', '이슬 맺힌 풀잎처럼 싱그럽게'],
    '김': ['김이 모락모락 나는 따뜻한 밥처럼', '김을 내뿜으며 달려가는 기차처럼', '김이 서린 창가에 이름을 써봐'],
    '박': ['박수 소리가 끊이지 않는 삶', '박하향처럼 시원한 당신의 미소', '박동하는 심장이 당신을 향해'],
    '최': ['최고의 순간은 아직 오지 않았어', '최선을 다해 당신을 사랑할게', '최초의 기억 그 설렘 그대로'],
    '정': ['정말로 고마운 사람', '정든 거리를 함께 걷던 우리', '정성을 다해 꾹꾹 눌러쓴 편지'],
    '나': ['나에게 가장 소중한 건 바로 너', '나른한 오후의 햇살처럼', '나비처럼 자유롭게 날아올라'],
    '미': ['미소가 참 아름다운 당신', '미래를 꿈꾸게 하는 사람', '미완의 그림을 채워가는 과정'],
    '사랑': ['사뿐히 내려앉은 눈송이처럼', '랑데부, 우리만의 약속된 만남'],
    '강': ['강물처럼 도도하게 흐르는 시간', '강한 바람에도 흔들리지 않게', '강가에 앉아 노을을 바라보며'],
    '성': ['성공의 열쇠는 당신 안에 있어', '성냥불처럼 짧지만 강렬한 순간', '성실한 발걸음이 만드는 기적'],
    '민': ['민들레 홀씨처럼 멀리멀리', '민낯의 진실함이 전해질 때', '민트색 하늘이 열리는 아침'],
    '지': ['지금 이 순간이 영원하길', '지나간 추억은 빛나는 보석', '지혜로운 마음으로 세상을 봐'],
    '수': ['수많은 별들 중 가장 빛나는 너', '수면 위에 비친 달빛처럼', '수줍게 건넨 꽃 한 송이'],
    '하': ['하늘을 닮은 당신의 마음', '하루의 시작과 끝을 함께해', '하얀 도화지에 꿈을 그려봐'],
    '윤': ['윤기 나는 머릿결처럼 부드럽게', '윤슬처럼 반짝이는 바다의 노래', '윤택한 삶을 꿈꾸는 오늘'],
    '선': ['선물처럼 다가온 당신', '선선한 바람이 불어오는 저녁', '선명하게 각인된 우리의 추억'],
    '영': ['영원히 변치 않을 약속', '영감의 원천이 되는 당신', '영웅은 멀리 있지 않아'],
};

const fallbacks = [
    '의 마음을 담아 노래합니다',
    '처럼 소중한 당신에게',
    '라는 이름으로 기억될 오늘',
    '이 가진 매력은 끝이 없죠',
    '으로 시작하는 기분 좋은 하루',
    '과 함께라면 어디든 좋아'
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
        line.style.animationDelay = `${index * 0.3}s`;
        
        let phrase = '';
        if (dictionary[char]) {
            const options = dictionary[char];
            phrase = options[Math.floor(Math.random() * options.length)];
            // Remove the first char from the phrase if it matches
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
    
    // Scroll to result on mobile
    resultArea.scrollIntoView({ behavior: 'smooth' });
}

copyBtn.addEventListener('click', () => {
    const text = Array.from(document.querySelectorAll('.poem-line'))
        .map(el => el.innerText)
        .join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = '복사 완료!';
        copyBtn.style.backgroundColor = '#e8f5e9';
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = 'transparent';
        }, 2000);
    });
});

// Enter key support
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});
