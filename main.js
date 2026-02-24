const dictionary = {
    '김': {
        start: ['기도의 깊은 향기가 하늘 보좌에 상달되어', '기쁨의 샘이 마르지 않는 복된 삶을 누리며'],
        mid: ['기쁨의 찬양이 당신의 입술에서 끊이지 않고', '기도로 세상을 이기는 믿음의 용사가 되어'],
        end: ['기적 같은 주님의 은혜가 평생에 가득하시길 축복합니다', '기도의 응답이 날마다 간증이 되는 삶 되소서']
    },
    '이': {
        start: ['이토록 아름다운 주님의 사랑이 당신을 덮고', '이슬같이 맑은 주의 평강이 마음을 지키며'],
        mid: ['이제는 내가 아닌 주를 위해 사는 기쁨을 알고', '이 땅에 주의 나라를 세우는 거룩한 통로가 되어'],
        end: ['이름만 불러도 위로가 되는 주와 늘 동행하시길', '이전보다 더 큰 은혜를 누리는 복된 날 되소서']
    },
    '박': {
        start: ['박수 소리 가득한 찬양이 온 땅에 울려 퍼지고', '박동하는 심장마다 주를 향한 첫사랑이 회복되어'],
        mid: ['박토를 옥토로 바꾸시는 주님의 창조를 경험하며', '박대받던 이들에게 주님의 따뜻한 손길을 전하고'],
        end: ['박사보다 지혜로운 하늘의 영감을 풍성히 누리소서', '박람회처럼 다채로운 주의 복이 삶에 가득하길']
    },
    '최': {
        start: ['최고의 예배자로 주님 앞에 거룩하게 서서', '최초의 사랑 그 설렘과 감격을 날마다 기억하며'],
        mid: ['최선을 다해 선한 싸움을 싸우는 당신을 응원하고', '최상의 가치인 복음을 위해 생명을 아끼지 않으며'],
        end: ['최후의 승리를 얻기까지 주께서 굳게 붙드실 것입니다', '최종적인 영광의 면류관을 얻는 승리자 되소서']
    },
    '정': {
        start: ['정결한 마음으로 주님의 얼굴을 날마다 구하고', '정의가 강물처럼 흐르는 세상을 가슴에 품으며'],
        mid: ['정성을 다해 드리는 당신의 삶이 향기로운 제물 되어', '정직한 영을 새롭게 하시는 주님의 만지심을 경험하고'],
        end: ['정오의 햇살보다 밝게 빛나는 주의 영광을 보게 하소서', '정든 주의 품 안에서 영원한 안식을 누리길 원합니다']
    },
    '은': {
        start: ['은혜의 보좌 앞으로 담대히 나아가 새 힘을 얻고', '은밀한 중에 보시는 하나님이 당신의 기도를 들으시며'],
        mid: ['은총의 구름 기둥이 당신의 발걸음을 안전하게 지키고', '은가루처럼 반짝이는 주의 말씀이 삶의 지표가 되어'],
        end: ['은하수보다 빛나는 주의 약속이 삶에 성취되길 기도합니다', '은혜 아래 거하는 삶의 참된 행복을 만끽하소서']
    },
    '혜': {
        start: ['혜성처럼 나타나 어두운 세상을 주의 빛으로 밝히고', '혜안을 주셔서 하나님의 선하신 뜻을 온전히 분별하며'],
        mid: ['혜택받은 은혜를 낮은 곳으로 흘려보내는 통로가 되어', '혜안의 눈으로 주의 일하심을 영적인 세계에서 바라보고'],
        end: ['혜성같이 빛나는 믿음의 별로 우뚝 서시길 축복합니다', '혜택의 복을 나누며 예수를 닮아가는 삶 되소서']
    },
    '지': {
        start: ['지혜와 계시의 영을 부어주셔서 주를 더 깊이 알고', '지극히 작은 자 하나에게 베푼 사랑이 하늘에 쌓이며'],
        mid: ['지금 이 순간도 당신을 위해 일하시는 주를 신뢰하고', '지나온 모든 순간이 주의 은혜였음을 깊이 고백하며'],
        end: ['지성소의 깊은 임재 속에서 주와 친밀히 교제하소서', '지구 끝까지 복음을 전하는 사명자로 살아가길 원합니다']
    },
    '성': {
        start: ['성령의 충만한 기름 부으심이 당신의 사역 위에 있고', '성벽을 지키는 파수꾼처럼 깨어 기도하는 용사가 되어'],
        mid: ['성실한 삶의 향기로 하나님의 살아계심을 온 땅에 증거하며', '성결한 삶을 향한 거룩한 몸부림이 보석처럼 빛나고'],
        end: ['성전에 거하는 기쁨이 당신의 영혼에 가득하시길', '성숙한 믿음의 분량에 이르기까지 자라나소서']
    },
    '나': {
        start: ['나의 힘이 되신 여호와를 날마다 노래하며 승리하고', '나를 지으신 하나님의 목적대로 빛나는 삶을 살며'],
        mid: ['나그네 길 인생 속에서도 천국 소망 잃지 않고 걷고', '나를 향한 주의 계획이 완벽함을 끝까지 신뢰하며'],
        end: ['나라와 권세와 영광이 주께 있음을 온 맘 다해 선포하소서', '나비처럼 자유롭게 주의 은혜 안에서 날아오르길']
    },
    '진': {
        start: ['진리의 말씀이 당신의 앞길을 비추는 영롱한 빛이 되고', '진실한 고백이 담긴 당신의 기도를 주께서 기쁘게 받으시며'],
        mid: ['진흙 속에 핀 백합화처럼 세상을 아름답게 물들이고', '진동치 않는 하나님의 나라를 상속받은 자의 당당함으로'],
        end: ['진주보다 귀한 당신의 가치를 주 안에서 발견하소서', '진취적인 믿음으로 세상을 정복하고 다스리길']
    },
    '희': {
        start: ['희망의 소망을 주시는 주님 안에서 날마다 새 힘을 얻고', '희생과 사랑으로 헌신하는 당신의 손길을 주께서 보시며'],
        mid: ['희귀하고 존귀한 보석보다 당신을 더 사랑하시는 주의 품에서', '희망의 항구로 인도하시는 성령의 바람을 타며 전진하고'],
        end: ['희년의 자유함이 당신의 삶 속에 온전히 임하시길', '희망찬 내일의 약속이 삶에 풍성하게 열매 맺으소서']
    },
    '준': {
        start: ['준비하신 여호와 이레의 복이 당신의 삶에 적시에 임하고', '준엄한 주의 말씀 앞에 겸손히 순종하며 거룩한 길을 걷고'],
        mid: ['준비된 마음 위에 성령의 단비가 내려 풍성한 결실을 맺으며', '준비된 자를 쓰시는 하나님 앞에 귀한 그릇으로 드려져'],
        end: ['준비된 하늘의 보화가 당신의 창고에 가득하길 기도합니다', '준비된 사명의 길을 담대히 걸어가는 승리자 되소서']
    },
    '훈': {
        start: ['훈훈한 성령의 바람이 마음에 불어와 사랑의 꽃을 피우고', '훈계의 말씀을 금보다 귀히 여겨 지혜자의 반열에 서서'],
        mid: ['훈장보다 귀한 믿음의 증거들이 당신의 삶에 가득하며', '훈훈한 주의 사랑을 나누며 이웃의 아픔을 함께 돌보고'],
        end: ['훈습된 주의 향기가 만나는 모든 이에게 전해지길', '훈훈한 은혜의 온기가 삶의 자리에 늘 머무소서']
    },
    '경': {
        start: ['경외하는 마음으로 주님과 날마다 깊은 사귐을 나누고', '경이로운 주의 창조 세계 속에 당신의 자리가 빛나며'],
        mid: ['경주를 마치는 날까지 주님이 당신의 상급이 되시고', '경험을 넘어선 주의 일하심을 영의 눈으로 바라보며'],
        end: ['경성하여 기도하는 파수꾼의 사명을 능히 감당하소서', '경건의 능력이 삶의 모든 현장에서 나타나길']
    },
    '재': {
        start: ['재능을 통해 주님의 나라를 확장하는 귀한 도구가 되고', '재창조하시는 주님의 손길로 날마다 속 사람이 새로워지며'],
        mid: ['재신임하시는 주의 사랑 안에서 다시 일어날 힘을 얻고', '재 대신 화관을 주시는 주님의 위로가 마음에 가득하여'],
        end: ['재물보다 귀한 하늘의 지혜를 소유한 부자 되소서', '재능의 달란트를 남겨 주께 칭찬받는 종 되길']
    },
    '하': {
        start: ['하나님의 형상을 닮은 당신은 존재 자체로 아름다운 편지이며', '하늘 가득한 주님의 영광이 당신의 평생을 찬란히 비추고'],
        mid: ['하루의 시작과 끝을 오직 감사의 고백으로 가득 채우며', '하늘 문을 여시고 쌓을 곳이 없도록 복을 부어주시고'],
        end: ['하늘 소망 품고 주와 함께 영원히 거하는 삶 되소서', '하나님의 기쁨이 되는 당신의 앞길을 축복합니다']
    },
    '나': {
        start: ['나의 힘이 되신 여호와여 내가 주를 사랑합니다 고백하고', '나를 지으신 이가 하나님이심을 온 땅에 담대히 선포하며'],
        mid: ['나그네 길 인생 속에서도 천국 시민의 당당함으로 살고', '나를 향한 주의 뜻이 온전히 이루어지길 간절히 구하며'],
        end: ['나비처럼 주의 은혜 안에서 자유롭게 날아오르길', '나를 위해 예비하신 영원한 상급을 바라보소서']
    }
};

const fallbacks = {
    start: ['{char}심으로 주를 경외하는 당신의 삶에 하늘 평강이 가득하고', '{char}랑스러운 주님의 자녀로서 세상의 빛과 소금이 되며'],
    mid: ['{char}성스러운 마음으로 주를 섬기는 수고를 주께서 기억하시고', '{char}망의 소망을 품고 인내하며 믿음의 경주를 끝까지 달려'],
    end: ['{char}광스러운 주의 일에 참여하는 기쁨을 누리시길 축복합니다', '{char}평의 사절로 쓰임 받는 복된 인생이 되기를 원합니다']
};

const finalBliss = [
    '주님의 이름으로 당신을 축복합니다.',
    '영원토록 주와 동행하는 복된 인생 되소서.',
    '예수 그리스도의 은혜가 늘 함께하시길 기도합니다.',
    '하늘의 평강이 당신의 마음을 지켜주시길 원합니다.'
];

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

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

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

        let phrase = '';
        const source = dictionary[char] || fallbacks;
        const options = source[position];
        
        phrase = getRandom(options);
        phrase = phrase.replace('{char}', char);
        
        // 첫 글자 강조 스타일 유지
        const firstChar = phrase.charAt(0);
        const restOfPhrase = phrase.substring(1);
        
        line.innerHTML = `<span class="first-char">${firstChar}</span>${restOfPhrase}`;
        poemContent.appendChild(line);
    });

    // 문학적 완성을 위한 마지막 한 마디 (종결 문구가 짧을 경우 대비)
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
