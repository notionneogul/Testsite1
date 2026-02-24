const dictionary = {
    '홍': ['홍수처럼 밀려오는 주님의 크신 은혜가 삶에 가득하길', '홍해를 가르신 기적으로 당신의 앞길을 여시길', '홍조 띤 얼굴로 주를 향한 첫사랑을 노래하길'],
    '길': ['길 되신 예수님을 따라 걷는 발걸음이 복되길', '길가에 핀 꽃 한 송이에서도 주의 손길을 발견하길', '길고 긴 인생의 여정 속에 주님이 늘 동행하시길'],
    '동': ['동행하시는 성령님의 따뜻한 숨결이 느껴지는 하루', '동쪽에서 떠오르는 태양처럼 당신의 믿음이 빛나길', '동녘의 새벽빛이 어둠을 밝히듯 소망이 피어나길'],
    '이': ['이토록 아름다운 당신의 삶이 주님께 영광 되길', '이제는 내가 사는 것이 아니요 오직 내 안의 주를 위해', '이슬처럼 맑고 순수한 영혼으로 세상을 비추길'],
    '김': ['김이 모락모락 나는 생명의 양식으로 늘 풍성하길', '김을 내뿜으며 전진하는 믿음의 경주를 멈추지 않길', '김이 서린 창가에 드리는 기도가 하늘에 닿기를'],
    '박': ['박수 치며 기쁨으로 주님의 이름을 높여 부르길', '박토를 옥토로 바꾸시는 주님의 창조를 경험하길', '박동하는 심장마다 주를 향한 열정이 식지 않길'],
    '최': ['최고의 예배자로 주님 앞에 서는 당신이 아름답습니다', '최선을 다해 선한 싸움을 싸우는 당신을 응원합니다', '최초의 사랑, 그 설렘과 감격이 날마다 새로워지길'],
    '정': ['정결한 마음으로 주님의 얼굴을 구하는 삶이 되길', '정의가 강물처럼 흐르는 세상을 만드는 통로가 되길', '정성을 다해 드리는 당신의 삶이 향기로운 제물 되길'],
    '나': ['나의 힘이 되신 여호와를 날마다 의지하며 승리하길', '나를 지으신 하나님의 목적대로 빛나는 삶을 살길', '나그네 길 인생 속에서도 천국 소망 잃지 않길'],
    '미': ['미소 속에 피어나는 주님의 평강이 모두에게 전해지길', '미래와 희망을 약속하신 주의 말씀을 굳게 붙잡길', '미완의 내 삶을 아름답게 빚으실 주님을 신뢰하길'],
    '성': ['성령의 충만한 기름 부으심이 당신의 사역 위에 있길', '성벽을 지키는 파수꾼처럼 깨어 기도하는 용사가 되길', '성결한 삶을 향한 거룩한 몸부림이 보석처럼 빛나길'],
    '민': ['민족과 열방을 가슴에 품고 기도하는 지도자가 되길', '민낯의 진실함으로 하나님 앞에 단독자로 서길', '민들레 홀씨처럼 복음의 씨앗을 널리 퍼뜨리길'],
    '지': ['지혜와 계시의 영을 부어주셔서 주를 더 깊이 알길', '지극히 작은 자 하나에게 베푼 사랑이 하늘에 쌓이길', '지금 이 순간도 당신을 위해 일하시는 주를 바라보길'],
    '수': ['수고하고 무거운 짐을 주님 발 앞에 내려놓고 쉬길', '수많은 별들보다 더 빛나는 주님의 약속이 성취되길', '수면 위에 비친 평온한 달빛처럼 주의 평안이 깃들길'],
    '하': ['하늘 문을 여시고 쌓을 곳이 없도록 복을 부어주시길', '하루의 시작과 끝이 오직 감사의 고백으로 가득하길', '하나님의 형상을 닮은 당신은 세상에서 가장 귀한 존재'],
    '윤': ['윤슬처럼 반짝이는 주님의 은혜가 당신의 바다에 가득하길', '윤택한 영혼의 샘물이 마르지 않고 흘러넘치길', '윤기를 더하시는 성령의 만지심이 당신의 삶을 채우길'],
    '선': ['선한 목자 되신 주님이 푸른 초장으로 인도하시길', '선포되는 말씀이 당신의 삶을 변화시키는 능력이 되길', '선물로 주신 소중한 사람들과 사랑을 나누는 삶 되길'],
    '영': ['영원한 생명의 나라를 꿈꾸며 오늘도 믿음으로 전진하길', '영광의 광채가 당신의 얼굴 위에 가득히 비추길', '영혼의 깊은 곳에서 터져 나오는 기쁨의 찬양을 부르길'],
    '전': ['전능하신 하나님의 손길이 당신의 삶을 붙드심을 믿습니다', '전신 갑주를 입고 믿음의 선한 싸움에서 승리하길', '전심으로 주를 찾는 자에게 만나주시는 은혜가 있길'],
    '진': ['진리의 말씀이 당신의 발에 등이요 길에 빛이 되길', '진실한 고백이 담긴 당신의 기도를 주께서 들으십니다', '진흙 속에 핀 꽃처럼 세상을 아름답게 밝히는 존재 되길'],
    '희': ['희망의 항구로 인도하시는 성령님의 바람을 타길', '희생과 사랑으로 세상을 치유하는 주의 도구 되길', '희귀하고 값진 진주처럼 당신의 영혼이 귀하게 쓰이길'],
    '원': ['원하는 모든 소망이 주님의 뜻 안에서 결실을 맺길', '원대한 꿈을 품고 독수리처럼 날아오르는 믿음 되길', '원수 앞에서도 상을 베푸시는 주의 넉넉함을 누리길'],
    '혜': ['혜성처럼 나타나 주의 영광을 온 땅에 비추길', '혜안을 주셔서 하나님의 뜻을 분별하는 지혜자가 되길', '혜택받은 은혜를 나누며 이웃을 섬기는 삶 되길'],
    '준': ['준비된 마음 위에 성령의 단비가 내려 풍성케 하길', '준엄한 주의 말씀 앞에 겸손히 순종하는 삶 되길', '준비하신 예비의 복이 당신의 삶에 가득 쏟아지길'],
    '경': ['경외하는 마음으로 주님과 날마다 깊이 교제하길', '경이로운 주의 창조 세계 속에 당신의 자리도 빛나길', '경주를 마치는 날까지 주님이 당신의 상급 되시길'],
};

// 범용 문구 - 조사 처리를 위해 {josa_i}, {josa_eul} 등의 플레이스홀더 사용
const fallbacks = [
    '{josa_eui} 마음 중심에 주님이 늘 계시기를 기도합니다',
    '{josa_nim}의 삶이 하나님의 선하신 뜻대로 이루어지길 소망합니다',
    '라는 소중한 이름 위에 하늘의 신령한 복이 더해지길',
    '{josa_i} 걷는 모든 길에 주의 등불이 밝게 비추길 바랍니다',
    ' 속에 감추어진 하나님의 계획이 아름답게 꽃피길 축복합니다',
    '{josa_eul} 사랑하시는 주님의 따뜻한 손길이 늘 함께하시길'
];

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const poemContent = document.getElementById('poemContent');
const copyBtn = document.getElementById('copyBtn');

// 받침 유무 확인 함수
function hasBatchim(char) {
    const code = char.charCodeAt(0);
    if (code < 44032 || code > 55203) return false;
    return (code - 44032) % 28 !== 0;
}

// 조사 처리 함수
function replaceJosa(char, text) {
    const batchim = hasBatchim(char);
    return text
        .replace(/{josa_i}/g, batchim ? '이' : '가')
        .replace(/{josa_eul}/g, batchim ? '을' : '를')
        .replace(/{josa_eui}/g, batchim ? '의' : '의') // 의는 동일하지만 확장성 위해
        .replace(/{josa_nim}/g, batchim ? '님' : '님');
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
    const usedPhrases = new Set(); // 중복 방지
    
    characters.forEach((char, index) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        line.style.animationDelay = `${index * 0.4}s`;
        
        let phrase = '';
        if (dictionary[char]) {
            const options = dictionary[char].filter(p => !usedPhrases.has(p));
            // 만약 모든 옵션을 다 썼다면 다시 전체에서 선택
            const source = options.length > 0 ? options : dictionary[char];
            phrase = source[Math.floor(Math.random() * source.length)];
            usedPhrases.add(phrase);
            
            if (phrase.startsWith(char)) {
                phrase = phrase.substring(1);
            }
        } else {
            const options = fallbacks.filter(p => !usedPhrases.has(p));
            const source = options.length > 0 ? options : fallbacks;
            let rawPhrase = source[Math.floor(Math.random() * source.length)];
            usedPhrases.add(rawPhrase);
            phrase = replaceJosa(char, rawPhrase);
        }

        line.innerHTML = `<span class="first-char">${char}</span>${phrase}`;
        poemContent.appendChild(line);
    });

    resultArea.classList.remove('hidden');
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    setTimeout(() => {
        const yOffset = -20; 
        const element = resultArea;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
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
        nameInput.blur();
    }
});
