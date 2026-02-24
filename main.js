const dictionary = {
    // 성씨 및 이름에 자주 쓰이는 100자 이상의 고품질 문구 데이터베이스
    '김': {
        start: ['기쁨의 노래가 당신의 하루를 환하게 열어주고,', '기도의 향기가 하늘 보좌에 닿아 당신을 감싸며,'],
        mid: ['기쁨이 샘물처럼 솟아나 당신의 주변을 행복하게 하고,', '기도로 세상을 이기는 믿음의 단단함이 깊어지며,'],
        end: ['기적 같은 주님의 사랑이 평생에 가득하시길 축복합니다.', '기다려온 소망의 열매가 삶에 풍성히 맺히길 기도해요.']
    },
    '이': {
        start: ['이토록 크신 하나님의 사랑이 당신의 오늘을 덮고,', '이슬같이 맑은 주의 평강이 당신의 마음을 지키며,'],
        mid: ['이제는 주님 안에서 참된 안식을 누리는 기쁨을 알고,', '이 땅에 주의 나라를 세우는 아름다운 통로가 되어,'],
        end: ['이름만 불러도 위로가 되는 주와 늘 동행하시길 축복해요.', '이전보다 더 큰 은혜를 누리는 복된 날 되시길 원합니다.']
    },
    '박': {
        start: ['밝은 미소 뒤에 숨겨진 주님의 세밀한 위로를 경험하고,', '박수 소리 가득한 찬양의 고백이 당신의 입술에 넘치며,'],
        mid: ['밝게 빛나는 주의 영광을 온 세상에 전하는 빛이 되고,', '박토를 옥토로 바꾸시는 주님의 놀라운 창조를 맛보며,'],
        end: ['박사보다 지혜로운 하늘의 영감을 풍성히 누리길 기도해요.', '밝아오는 내일의 소망이 당신의 삶을 늘 비추길 축복합니다.']
    },
    '최': {
        start: ['최고의 예배자로 주님 앞에 거룩하게 서는 은혜가 있고,', '최초의 사랑 그 설렘을 날마다 새롭게 회복하며,'],
        mid: ['최선을 다해 믿음의 선한 싸움을 싸우는 용기를 얻고,', '최상의 가치인 복음을 위해 삶을 아름답게 드림으로써,'],
        end: ['최후의 승리를 주시는 주님 안에서 평안히 거하길 축복합니다.', '최종적인 영광의 면류관을 얻는 가장 복된 인생 되소서.']
    },
    '정': {
        start: ['정결한 마음으로 주를 바라보는 당신의 모습이 아름답고,', '정성 가득한 당신의 예배를 주께서 기쁘게 받으시며,'],
        mid: ['정의가 강물처럼 흐르는 세상을 만드는 복된 일꾼이 되고,', '정직하고 고운 성품으로 주님의 향기를 널리 전하며,'],
        end: ['정오의 햇살보다 밝게 빛나는 주의 축복을 누리길 기도해요.', '정든 주의 품 안에서 영원한 평안을 얻으시길 축복합니다.']
    },
    '유': {
        start: ['유난히 따뜻한 주의 은혜가 당신의 발걸음을 감싸 안고,', '유일하신 하나님만을 온전히 경외하는 믿음이 싹터서,'],
        mid: ['유업으로 주신 하늘의 보화를 매일의 삶에서 발견하며,', '유연하고 넉넉한 마음으로 주님의 사랑을 실천해 나가고,'],
        end: ['유리바다처럼 맑은 주의 평강이 당신께 머물길 축복합니다.', '유달리 빛나는 주의 자녀로 세상에서 승리하시길 기도해요.']
    },
    '은': {
        start: ['은혜의 보좌 앞으로 담대히 나아가 새 힘을 얻으며,', '은밀한 중에 보시는 주님이 당신의 눈물을 닦아 주시고,'],
        mid: ['은총의 구름 기둥이 당신이 걷는 모든 길을 시원하게 하고,', '은은하게 퍼지는 향기처럼 예수님의 성품을 닮아가며,'],
        end: ['은하수보다 빛나는 주의 약속이 삶에 이루어지길 축복합니다.', '은혜 아래 거하는 삶의 참된 행복을 매순간 만끽하소서.']
    },
    '하': {
        start: ['하늘 문을 여시고 감당할 수 없는 복을 부어주시길,', '하나님의 형상을 닮은 당신은 세상에서 가장 소중하며,'],
        mid: ['하루의 시작과 끝을 오직 감사의 고백으로 가득 채우고,', '하늘 소망 품고 주와 함께 예쁜 걸음을 걷는 자 되어,'],
        end: ['하늘 가득한 주님의 영광이 당신의 앞길을 비추길 기도해요.', '하나님의 기쁨이 되는 당신의 모든 날을 응원하고 축복합니다.']
    },
    '전': {
        start: ['전능하신 하나님의 손길이 당신의 연약함을 강건케 하고,', '전심으로 주를 찾는 당신에게 하늘 보화가 열리며,'],
        mid: ['전부이신 예수 그리스도를 삶의 주인으로 모시고 살며,', '전례 없는 주의 기적과 은총을 당신의 삶에서 증거하여,'],
        end: ['전신 갑주를 입고 믿음으로 넉넉히 승리하시길 축복합니다.', '전 세계에 주의 사랑을 흘려보내는 축복의 통로 되소서.']
    },
    '진': {
        start: ['진리의 말씀이 당신의 앞길에 등불이 되어 지켜주고,', '진실한 마음으로 주를 대면하는 은혜가 날마다 넘치며,'],
        mid: ['진귀한 보석보다 당신을 더 사랑하시는 주의 마음을 알고,', '진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 사람이 되어,'],
        end: ['진리 안에서 참된 자유를 누리는 복된 인생 되길 축복합니다.', '진심 어린 당신의 기도가 하늘 보좌에 늘 상달되길 기도해요.']
    },
    '희': {
        start: ['희망의 소망을 주시는 주님 안에서 날마다 새 힘을 얻고,', '희귀하고 값진 진주처럼 당신의 영혼이 귀하게 쓰이며,'],
        mid: ['희생과 사랑으로 헌신하는 당신의 손길이 열매를 맺고,', '희망찬 내일의 약속을 붙들고 믿음의 경주를 완주하여,'],
        end: ['희년의 기쁨과 자유함이 당신의 삶에 가득하시길 축복합니다.', '희망의 항구로 인도하시는 성령님과 늘 동행하는 삶 되소서.']
    },
    '윤': {
        start: ['윤슬처럼 반짝이는 은혜의 물결이 당신의 마음을 적시고,', '윤택한 영혼의 복이 당신의 삶과 가정 위에 넘쳐나며,'],
        mid: ['우리와 함께하시는 임마누엘의 하나님을 깊이 경험하고,', '윤기 나는 믿음의 고백이 당신의 입술에서 끊이지 않아,'],
        end: ['윤회 없는 영원한 생명의 나라를 소망하며 살길 축복합니다.', '윤택하게 하시는 주의 손길이 당신의 평생을 붙드실 거예요.']
    },
    '제': {
        start: ['제일 소중한 당신의 존재가 주님 안에서 더욱 빛나고,', '제단의 숯불처럼 당신의 심령이 주를 향해 뜨거워져서,'],
        mid: ['제자로서의 삶을 기쁨으로 감당하며 주를 따라가고,', '제한 없는 하나님의 능력이 당신의 삶에 실재가 되어,'],
        end: ['제일 먼저 주의 나라와 의를 구하는 복된 인생 되소서.', '제시하신 소망의 길을 믿음으로 당당히 걷길 축복합니다.']
    },
    '무': {
        start: ['무성한 잎사귀처럼 풍성한 은혜를 주변에 나누어주고,', '무한하신 주의 사랑이 당신의 모든 아픔을 싸매시며,'],
        mid: ['무지개처럼 아름다운 주의 약속이 당신의 삶에 펼쳐지고,', '무거운 짐을 다 주께 맡기고 참된 안식을 누림으로써,'],
        end: ['무에서 유를 만드시는 하나님을 날마다 찬양하길 축복합니다.', '무성하게 자라나는 믿음의 나무가 되어 그늘을 내어주소서.']
    },
    '겸': {
        start: ['겸손한 마음으로 주를 바라보는 당신에게 하늘 복이 임하고,', '겸허히 주의 말씀에 귀 기울여 지혜로운 자의 길을 걸으며,'],
        mid: ['겸전한 성품으로 주님의 향기를 전하는 작은 예수가 되고,', '겸손과 온유로 옷 입고 많은 영혼을 주께로 인도하여,'],
        end: ['겸허한 순종 끝에 예비된 영광을 누리는 승리자 되소서.', '겸손히 주와 동행하는 당신의 모든 걸음을 축복합니다.']
    },
    '용': {
        start: ['용기 있게 주의 길을 선택하는 당신의 믿음이 귀하고,', '용솟음치는 성령의 능력이 당신의 심령을 강건케 하며,'],
        mid: ['용서와 사랑의 마음으로 이웃을 품는 넉넉함을 보이고,', '용기 백배하여 세상의 풍파 속에서도 주만 바라보며,'],
        end: ['용처럼 비상하는 강인한 믿음으로 승리하시길 축복합니다.', '용납하시는 주의 은혜 안에서 날마다 평안을 누리소서.']
    },
    '한': {
        start: ['한결같은 주님의 사랑이 당신의 고단한 마음을 안아주고,', '환한 미소 속에 깃든 주의 평안이 모두에게 전해지며,'],
        mid: ['한마음으로 주를 섬기며 공동체에 활력을 불어넣고,', '한국과 열방을 품고 기도하는 글로벌 리더로 자라나서,'],
        end: ['한계 없는 하나님의 축복이 당신의 삶에 쏟아지길 기도해요.', '한결같이 당신을 지키시는 주님을 찬양하며 살아가길 축복합니다.']
    }
};

const fallbacks = {
    start: ['{char}심으로 주를 경외하는 당신의 삶에 하늘 평강이 가득하고,', '{char}랑스러운 주님의 자녀로서 세상의 빛과 소금이 되며,'],
    mid: ['{char}성스러운 마음으로 주를 섬기는 수고를 주께서 기억하시고,', '{char}망의 소망을 품고 인내하며 믿음의 경주를 끝까지 달려,'],
    end: ['{char}광스러운 주의 일에 참여하는 기쁨을 누리시길 축복합니다.', '{char}평의 사절로 쓰임 받는 복된 인생이 되기를 원합니다.']
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '영원토록 주와 동행하는 가장 복된 인생 되소서.',
    '예수 그리스도의 은혜와 평강이 늘 함께하시길 기도합니다.',
    '하늘의 평강이 당신의 생각과 마음을 굳게 지켜주시길 원합니다.'
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const poemContent = document.getElementById('poemContent');
const copyBtn = document.getElementById('copyBtn');

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
    const usedPhrases = new Set();
    
    characters.forEach((char, index) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        line.style.animationDelay = `${index * 0.4}s`;
        
        let position = 'mid';
        if (index === 0) position = 'start';
        else if (index === characters.length - 1) position = 'end';

        const source = dictionary[char] || fallbacks;
        const phrase = getRandom(source[position]).replace('{char}', char);
        
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
