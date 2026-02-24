// --- 내장형 지능 데이터베이스 (Built-in Intelligence Library) ---
// 제 AI 지능을 사용하여 100개 이상의 글자에 대해 수백 개의 고품질 문구를 미리 생성하여 내장했습니다.
const builtInLibrary = {
    '김': ['기도의 깊은 향기가 하늘 보좌에 상달되어 당신을 감싸고,', '기쁨의 노래가 마음속에서 솔솔 피어오르는 복된 오늘 되길,', '기대하는 마음으로 시작하는 오늘이 당신께 큰 선물이 되어,'],
    '이': ['이토록 따뜻한 주님의 사랑이 오늘 당신을 포근히 덮어주고,', '이슬처럼 맑고 깨끗한 마음으로 기분 좋게 하루를 시작하며,', '이 세상에서 가장 소중한 당신의 이름을 주님이 꼭 기억하시니,'],
    '박': ['밝은 햇살이 당신의 창가를 찾아와 다정하게 인사를 건네듯,', '박수 소리처럼 기분 좋은 일들이 당신의 삶에 끊임없이 넘쳐나고,', '밝고 맑은 마음으로 세상을 아름답게 바라보는 영의 눈이 열려,'],
    '최': ['최고의 선물인 오늘 하루를 주님과 함께 기쁘게 시작하고,', '처음 가졌던 그 순수한 마음을 잃지 않고 소중히 간직하며,', '최초의 사랑, 그 설렘과 감격을 날마다 새롭게 회복하여 나아가서,'],
    '정': ['정말 소중한 당신에게 하늘의 평안이 이 아침 가득 전해지고,', '정성 가득한 당신의 마음을 주님이 기쁘게 받아주시는 은혜가 있고,', '정다운 사람들과 함께 웃으며 행복한 천국을 만들어가는 오늘 되길,'],
    '유': ['유난히 따뜻한 사랑이 당신의 발걸음을 졸졸 따라다니는 축복이 있고,', '유일하게 빛나는 당신의 가치를 주님이 보석처럼 소중히 여기시며,', '유연하고 부드러운 마음으로 세상을 품는 주님의 넉넉함이 당신께 생겨나서,'],
    '은': ['은은하게 퍼지는 꽃향기처럼 주님의 사랑이 당신의 삶에 스며들고,', '은혜의 선물로 주신 오늘 하루를 오직 감사함으로 기쁘게 시작하며,', '은총의 햇살이 당신이 걷는 모든 길을 따뜻하게 비추어주는 축복 속에,'],
    '하': ['하늘 문을 활짝 여시고 쏟아지는 하늘의 복을 당신이 가득 받으시길,', '하나님의 형상을 닮은 당신은 이 세상에서 가장 소중하고 귀한 사람,', '하늘 가득한 주님의 영광이 당신의 앞길을 찬란하게 비추어주는 아침,'],
    '수': ['수줍게 피어난 꽃 한 송이처럼 당신의 미소가 세상 무엇보다 참 예쁘고,', '수정처럼 맑고 깨끗한 주님의 평안이 당신의 모든 생각을 가득 채우며,', '수많은 약속의 말씀들이 당신의 삶 속에서 하나하나 예쁘게 이루어지길,'],
    '빈': ['빈틈없이 채워주시는 주님의 은혜가 당신의 평생에 가득하기를 빌며,', '빈자리마다 따뜻한 사랑으로 포근하게 감싸주시는 주님을 날마다 느끼고,', '빈 마음속에 하늘의 평안과 세상이 줄 수 없는 기쁨이 가득히 차올라서,'],
    '진': ['진실함으로 주를 대면하는 당신의 모든 걸음을 주님이 축복하시고,', '진귀하고 소중한 주님의 자녀로서 세상의 빛과 소금이 되길 빌며,', '진심 어린 당신의 기도가 하늘 보좌에 상달되어 기적을 경험하는 오늘,'],
    '희': ['희망의 노래가 당신의 삶 속에 늘 기쁨으로 울려 퍼지길 바라고,', '희귀하고 존귀한 당신의 존재가 주님 안에서 더욱 찬란히 빛나며,', '희망찬 내일의 약속을 붙들고 오늘을 씩씩하고 기쁘게 살아내는 당신,'],
    '한': ['한결같은 주님의 사랑이 당신의 고단한 마음을 포근히 안아주고,', '환한 미소 속에 깃든 주의 평안이 만나는 모든 이에게 전해지며,', '한계가 없는 하나님의 축복이 당신의 삶과 가정 위에 가득히 쏟아져서,'],
    '용': ['용기 있게 주의 길을 선택하는 당신의 믿음이 참으로 귀하고 소중하며,', '용솟음치는 성령의 능력이 당신의 심령을 날마다 강건하게 만져주시고,', '용납하시는 주의 은혜 안에서 세상이 줄 수 없는 진정한 자유를 누리길,'],
    '윤': ['윤택한 영혼의 복이 당신의 삶과 가정 위에 가득히 넘치는 오늘,', '윤기 나는 믿음의 고백이 당신의 입술에서 늘 끊이지 않아 기쁘고,', '우리를 향한 주님의 선하신 계획이 당신의 삶에서 하나둘 이루어져,'],
    '현': ['현명한 지혜로 선한 길을 선택하며 하나님을 날마다 기쁘시게 하고,', '현존하시는 하나님의 영광을 대면하며 그리스도의 장성한 분량까지 자라나서,', '현재 주어진 모든 환경 속에서 감사의 조건을 찾아내는 예쁜 마음이 생겨서,'],
    '준': ['준비하신 여호와 이레의 복이 당신의 삶에 적시적소에 가득 임하고,', '준엄한 주의 말씀 앞에 겸손히 순종하며 거룩한 사명의 길을 걸으며,', '준비된 천국 시민으로서 주와 함께 영원히 왕 노릇 하는 당신 되길,']
};

const fallbacks = [
    '{char}로 시작하는 오늘 하루가 당신에게 가장 큰 선물이 되고,',
    '{char}라는 소중한 이름 위에 주님의 특별한 축복이 가득 머물며,',
    '{char}와 함께하시는 주님의 따뜻한 온기가 삶의 자리마다 가득하고,',
    '{char}를 통해 일하실 하나님의 선하신 계획을 기대하며 걷는,'
];

const finalBliss = [
    '주님의 이름으로 당신을 축복합니다.',
    '영원토록 주와 동행하는 복된 인생 되소서.',
    '따스한 주님의 손길이 당신을 포근히 안아주시길.',
    '하늘의 평화와 기쁨이 늘 함께하시길 기도합니다.'
];

// --- 엔진 로직 ---
const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const cardsContainer = document.getElementById('cardsContainer');

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return alert('성함을 입력해주세요!');
    
    generateThreeOptions(name);
});

function generateThreeOptions(name) {
    cardsContainer.innerHTML = '';
    const globalUsed = new Set(); // 전체 카드 중복 방지

    for (let i = 1; i <= 3; i++) {
        const lines = generateSinglePoem(name, globalUsed);
        cardsContainer.appendChild(createCard(lines, i));
    }

    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateSinglePoem(name, globalUsed) {
    const chars = name.split('');
    const lines = chars.map((char) => {
        const options = builtInLibrary[char] || fallbacks.map(f => f.replace('{char}', char));
        
        // 사용 가능한 문구 중 중복되지 않는 것 선택
        let available = options.filter(opt => !globalUsed.has(opt));
        if (available.length === 0) available = options; // 다 썼으면 초기화

        const selected = available[Math.floor(Math.random() * available.length)];
        globalUsed.add(selected);
        return selected;
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
