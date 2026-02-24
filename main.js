// 1. 글자별 정밀 두음 사전 (반드시 해당 글자로 시작하는 단어만 사용)
const charWords = {
    '김': ['김이 모락모락 나는 생명의 양식처럼', '김이 서린 창가에 기도를 적듯', '김(이) 모락모락 피어나는 따뜻한 사랑으로'],
    '이': ['이토록 따뜻한 주님의 사랑이', '이슬처럼 맑고 깨끗한 마음으로', '이곳에서 주님과 함께 걷는 기쁨으로'],
    '박': ['박수 소리처럼 기분 좋은 축복이', '밝은 햇살이 당신의 창가를 찾아오듯', '밝고 맑은 미소가 당신의 얼굴에'],
    '최': ['최고의 선물인 오늘 하루를 주님과', '최초의 사랑 그 설렘을 소중히 간직하며', '최선을 다해 믿음의 길을 걷는 당신을'],
    '정': ['정성 가득한 당신의 마음을 주님이', '정결한 마음으로 주 앞에 서는 당신이', '정직하고 고운 성품이 보석처럼 빛나서'],
    '강': ['강건한 믿음의 뿌리가 당신을 지탱하고', '강물처럼 도도하게 흐르는 주의 은혜 속에', '강가에 심은 나무처럼 풍성한 열매를'],
    '조': ['조용히 들려오는 주님의 세밀한 음성이', '좋은 일들만 당신의 앞길에 가득하기를', '조화로운 삶의 고백이 주님께 기쁨 되어'],
    '윤': ['윤슬처럼 반짝이는 은혜의 물결이', '윤택한 영혼의 복이 당신의 삶 위에', '우리와 함께하시는 임마누엘 하나님이'],
    '성': ['성령의 충만한 기름 부으심이 당신께', '성실한 삶의 향기로 주님을 나타내며', '성결한 삶을 향한 당신의 고운 마음이'],
    '은': ['은혜의 보좌 앞으로 담대히 나아가며', '은총의 햇살이 당신의 길을 비추어주고', '은은하게 퍼지는 예수님의 향기처럼'],
    '혜': ['혜성처럼 나타나 주의 영광을 밝히고', '혜안을 주셔서 주의 뜻을 분별하게 하며', '혜택받은 은혜를 널리 나누는 통로 되어'],
    '지': ['지혜로운 마음으로 매일 승리하는 당신', '지극한 정성으로 당신을 돌보시는 주님', '지금 이 순간도 당신을 응원하시는 주를'],
    '서': ['서광이 비치는 아침처럼 소망이 열리고', '서로 사랑하며 주의 뜻을 이루어가며', '서약하신 주님의 약속이 당신의 삶 속에'],
    '민': ['민들레 홀씨처럼 주의 사랑을 전하고', '믿음의 눈을 들어 약속의 땅을 바라보며', '미소 짓는 당신의 얼굴에 평강이 가득해'],
    '유': ['유난히 따뜻한 주의 사랑이 당신을 덮고', '유일하게 빛나는 당신의 가치를 주님이', '유연하고 부드러운 마음으로 세상을 품어'],
    '한': ['한결같은 주님의 인자하심이 당신을 안고', '환한 미소 속에 깃든 주의 평안을 누리며', '한계 없는 하나님의 축복이 가득히 임해'],
    '진': ['진실한 마음으로 주를 대하는 당신이 귀해', '진귀한 보물보다 당신을 더 사랑하시는 주', '진리의 말씀을 등불 삼아 용기 있게 걸어'],
    '희': ['희망의 노래가 당신의 삶에 울려 퍼지고', '희귀하고 값진 보석처럼 당신이 쓰임 받길', '희망찬 내일의 약속을 믿음으로 바라보며'],
    '하': ['하늘 문을 활짝 여시고 복을 내려주시길', '하나님의 형상을 닮은 당신은 참 소중해', '하늘 가득한 주님의 영광이 당신을 비추어'],
    '수': ['수줍게 피어난 꽃처럼 당신의 미소가 예뻐', '수정처럼 맑고 깨끗한 평안이 당신께 임해', '수많은 약속의 말씀들이 삶에서 이루어져'],
    '용': ['용기 있게 주의 길을 선택하는 당신의 믿음', '용솟음치는 성령의 능력이 당신을 강건케 해', '용납하시는 주의 은혜 안에서 참 자유 얻길'],
    '준': ['준비하신 여호와 이레의 복이 가득 임하고', '준엄한 주의 말씀 앞에 겸손히 순종하며', '준비된 천국 시민으로 주와 함께 동행해'],
    '현': ['현명한 지혜로 선한 길을 선택하며 살고', '현존하시는 하나님의 영광을 날마다 대면해', '현재 주어진 환경에서 감사의 조건을 찾아'],
    '제': ['제일 먼저 주의 나라와 의를 구하는 삶', '제단의 숯불처럼 심령이 뜨겁게 타올라', '제시하신 소망의 길을 당당히 걸어가서']
};

const themes = {
    grace: { name: "은혜와 축복", start: ["{word} 흘러들어,", "{word} 적시고,"], mid: ["{word} 누리며,", "{word} 경험하고,"], end: ["{word} 축원합니다."] },
    light: { name: "빛과 소망", start: ["{word} 찾아오고,", "{word} 채우며,"], mid: ["{word} 되고,", "{word} 되어,"], end: ["{word} 소망합니다."] },
    walk: { name: "동행과 인도", start: ["{word} 시작하고,", "{word} 지키며,"], mid: ["{word} 얻고,", "{word} 나아가서,"], end: ["{word} 되소서."] },
    heart: { name: "마음과 성품", start: ["{word} 되고,", "{word} 나오며,"], mid: ["{word} 드리고,", "{word} 가득하여,"], end: ["{word} 기도합니다."] }
};

const finalBliss = ['주님의 이름으로 당신을 오늘 더 축복합니다.', '언제나 주님과 함께 걷는 가장 행복한 사람 되세요.'];

function getProcessedPhrase(word, template) {
    // 템플릿에 {word}가 있으면 조립, 없으면 단어 자체가 문장인 경우
    return template ? template.replace(/{word}/g, word) : word;
}

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
    }, 1200);
});

function generateThreeOptions(name) {
    cardsContainer.innerHTML = '';
    const themeKeys = Object.keys(themes);
    const usedPhrases = new Set();

    for (let i = 1; i <= 3; i++) {
        const theme = themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]];
        const poemLines = generateStrictAcrostic(name, theme, usedPhrases);
        cardsContainer.appendChild(createCard(poemLines, i, theme.name));
    }
    resultArea.classList.remove('hidden');
}

function generateStrictAcrostic(name, theme, used) {
    const chars = name.split('');
    const lines = chars.map((char, index) => {
        let pos = index === 0 ? 'start' : (index === chars.length - 1 ? 'end' : 'mid');
        let wordList = charWords[char] || [`${char}라는 이름 위에 주님의 축복이 머물고`];
        
        let phrase = "";
        let attempts = 0;
        
        // [핵심 절차] 첫 글자 일치 여부를 엄격히 검증
        do {
            let word = wordList[Math.floor(Math.random() * wordList.length)];
            let template = theme[pos][Math.floor(Math.random() * theme[pos].length)];
            phrase = getProcessedPhrase(word, template);
            attempts++;
        } while ((phrase[0] !== char || used.has(phrase)) && attempts < 20);
        
        used.add(phrase);
        return phrase;
    });
    lines.push(finalBliss[Math.floor(Math.random() * finalBliss.length)]);
    return lines;
}

function createCard(lines, index, themeName) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `<span class="card-tag">AI ${themeName} 테마</span><div class="poem-content"></div>`;
    
    const content = card.querySelector('.poem-content');
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        if (i === lines.length - 1) line.classList.add('final-line');
        content.appendChild(line);
        typeWriter(line, text, i * 500);
    });

    const btn = document.createElement('button');
    btn.className = 'copy-btn-small';
    btn.innerText = '이 축복 메시지 복사하기';
    btn.onclick = () => {
        navigator.clipboard.writeText(lines.join('\n')).then(() => {
            const original = btn.innerText;
            btn.innerText = '✅ 복사 완료!';
            btn.classList.add('success');
            setTimeout(() => { btn.innerText = original; btn.classList.remove('success'); }, 2000);
        });
    };
    card.appendChild(btn);
    return card;
}

function typeWriter(element, text, delay) {
    setTimeout(() => {
        let i = 0;
        element.innerHTML = '';
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
                setTimeout(typing, 25);
            }
        }
        typing();
    }, delay);
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
