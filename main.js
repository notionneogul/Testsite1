const dictionary = {
    '김': {
        start: ['기쁨의 노래가 당신의 하루를 환하게 열어주고,', '기도의 향기가 하늘 보좌에 상달되어 당신을 감싸며,'],
        mid: ['기쁨이 샘물처럼 솟아나 주변을 따뜻하게 만들고,', '기도로 세상을 이기는 믿음의 단단함이 깊어지며,'],
        end: ['기적 같은 주님의 사랑이 평생에 가득하시길 축복합니다.', '기다려온 소망의 열매가 삶에 풍성히 맺히길 기도해요.']
    },
    '이': {
        start: ['이토록 크신 하나님의 사랑이 오늘 당신을 포근히 덮고,', '이슬같이 맑은 주의 평강이 당신의 마음과 생각을 지키며,'],
        mid: ['이제는 주님 안에서 참된 안식을 누리는 하늘 기쁨을 알고,', '이 땅에 주의 사랑을 전하는 아름다운 통로가 되어,'],
        end: ['이름만 불러도 위로가 되는 주님과 늘 동행하시길 축복해요.', '이전보다 더 큰 은혜를 누리는 가장 복된 인생 되소서.']
    },
    '박': {
        start: ['밝은 미소 속에 담긴 주님의 세밀한 위로를 깊이 경험하고,', '박수 소리 가득한 찬양의 고백이 당신의 입술에 넘치며,'],
        mid: ['밝게 빛나는 주의 영광을 온 세상에 전하는 빛이 되고,', '박애의 정신으로 소외된 이웃을 품는 주님의 손길이 되어,'],
        end: ['박사보다 지혜로운 하늘의 영감을 날마다 풍성히 누리소서.', '밝아오는 소망의 아침이 당신의 삶을 영원히 비추길 축복합니다.']
    },
    '최': {
        start: ['최고의 예배자로 주님 앞에 거룩하고 순결하게 서고,', '최초의 사랑 그 설렘과 감격을 날마다 새롭게 회복하여,'],
        mid: ['최선을 다해 믿음의 선한 싸움을 싸우는 당신을 응원하며,', '최상의 가치인 복음을 위해 삶을 기쁨으로 드리는 헌신을 통해,'],
        end: ['최후의 승리를 주시는 주님 안에서 평안히 거하길 축복합니다.', '최종적인 영광의 면류관을 얻는 가장 빛나는 승리자 되소서.']
    },
    '정': {
        start: ['정결한 마음으로 주를 바라보는 당신의 모습이 참 아름답고,', '정성 가득한 당신의 예배를 하나님께서 기쁘게 받으시며,'],
        mid: ['정의가 강물처럼 흐르는 세상을 만드는 복된 주님의 일꾼이 되고,', '정직하고 고운 성품으로 예수님의 향기를 온 땅에 전하며,'],
        end: ['정오의 햇살보다 밝게 빛나는 주의 축복을 평생 누리길 기도해요.', '정든 주의 품 안에서 세상이 줄 수 없는 평안을 얻으시길 축복합니다.']
    },
    '유': {
        start: ['유난히 따뜻한 주의 은혜가 당신의 발걸음을 감싸 안고,', '유일하신 하나님만을 온전히 경외하는 믿음의 뿌리가 깊어져서,'],
        mid: ['유업으로 주신 하늘의 보화를 매일의 삶 속에서 발견하며,', '유연하고 넉넉한 마음으로 주님의 사랑을 세상에 실천하고,'],
        end: ['유리바다처럼 맑은 주의 평강이 당신의 심령에 머물길 축복합니다.', '유달리 빛나는 주의 자녀로 세상 속에서 늘 승리하시길 기도해요.']
    },
    '현': {
        start: ['현명한 지혜로 선한 길을 선택하며 하나님을 기쁘시게 하고,', '현존하시는 하나님의 영광을 대면하며 거룩함으로 옷 입고,'],
        mid: ['현실의 벽 너머에서 역사하시는 주님의 손길을 믿음으로 바라보며,', '현명하게 주의 뜻을 분별하여 공동체를 아름답게 세워가고,'],
        end: ['현숙한 주님의 제자로 세상에 선한 향기를 전하며 사소서.', '현재의 고난을 넘어 영원한 영광을 바라보는 승리자 되길 축복합니다.']
    },
    '수': {
        start: ['수고하고 무거운 모든 짐을 주님 발 앞에 내려놓고 참된 쉼을 얻고,', '수정처럼 맑고 깨끗한 마음으로 주님의 얼굴을 날마다 대면하며,'],
        mid: ['수많은 별들보다 더 빛나는 주님의 약속이 당신의 삶에 실재가 되어,', '수면 위에 비친 평온한 달빛처럼 주의 평강이 당신의 영혼을 덮고,'],
        end: ['수풀 속에 핀 꽃처럼 소박하지만 향기로운 주의 사람 되소서.', '수정같이 맑고 깨끗한 주님의 평강을 날마다 누리시길 축복합니다.']
    },
    '용': {
        start: ['용기 있게 주의 길을 선택하는 당신의 믿음이 참으로 귀하고,', '용솟음치는 성령의 능력이 당신의 심령을 날마다 강건케 하며,'],
        mid: ['용서와 사랑의 마음으로 이웃을 품는 예수님의 넉넉함을 닮아 가고,', '용기 백배하여 세상의 거친 파도 속에서도 주님 한 분만 바라보며,'],
        end: ['용기 있는 믿음의 발걸음으로 날마다 승리하시길 축복합니다.', '용납하시는 주의 은혜 안에서 진정한 자유와 평안을 누리소서.']
    },
    '제': {
        start: ['제일 먼저 주의 나라와 의를 구하는 복된 인생의 길을 걷고,', '제단의 숯불처럼 당신의 심령이 주를 향한 열정으로 뜨거워져서,'],
        mid: ['제자로서의 삶을 기쁨으로 감당하며 주님의 발자취를 따라가고,', '제한 없는 하나님의 능력이 당신의 삶에 살아있는 증거가 되어,'],
        end: ['제일 소중한 당신의 존재가 주님 안에서 더욱 빛나길 축복합니다.', '제시하신 소망의 길을 믿음으로 당당히 걷는 승리자 되소서.']
    },
    '무': {
        start: ['무지개처럼 아름다운 주의 약속이 당신의 삶에 선명히 펼쳐지고,', '무한하신 주의 사랑이 당신의 모든 아픔을 따뜻하게 싸매시며,'],
        mid: ['무성한 잎사귀처럼 풍성한 은혜를 주변에 나누어주는 삶을 살고,', '무거운 짐을 다 주께 맡기고 주님 주시는 안식 속에서 새 힘을 얻어,'],
        end: ['무에서 유를 만드시는 하나님을 날마다 기쁨으로 찬양하길 축복합니다.', '무성하게 자라나는 믿음의 나무가 되어 이웃에게 그늘을 내어주소서.']
    },
    '겸': {
        start: ['겸손한 마음으로 주를 바라보는 당신에게 하늘의 복이 가득 임하고,', '겸허히 주의 말씀에 귀 기울여 지혜로운 자의 길을 묵묵히 걸으며,'],
        mid: ['겸전한 성품으로 주님의 향기를 전하는 작은 예수로 살아가고,', '겸손과 온유로 옷 입고 많은 영혼을 주님의 사랑으로 인도하여,'],
        end: ['겸허한 순종 끝에 예비된 하늘의 영광을 누리는 승리자 되소서.', '겸손히 주와 동행하는 당신의 모든 걸음을 간절히 축복합니다.']
    },
    '전': {
        start: ['전능하신 하나님의 손길이 당신의 모든 연약함을 강건케 하시고,', '전심으로 주를 찾는 당신에게 하늘의 보화가 열리는 기적이 임하며,'],
        mid: ['전부이신 예수 그리스도를 삶의 주인으로 모시고 당당히 살아가고,', '전례 없는 주의 기적과 은총을 당신의 일상에서 매일 증거하여,'],
        end: ['전신 갑주를 입고 믿음으로 세상의 유혹을 넉넉히 이겨내소서.', '전 세계에 주의 사랑을 흘려보내는 거룩한 축복의 통로 되길 원합니다.']
    },
    '진': {
        start: ['진리의 말씀이 당신의 앞길에 등불이 되어 실족치 않게 지켜주시고,', '진실한 고백을 기뻐하시는 주님 앞에 날마다 순전한 아이처럼 서며,'],
        mid: ['진귀한 보석보다 당신을 더 귀히 여기시는 하나님의 마음을 느끼고,', '진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 향기로운 사람 되어,'],
        end: ['진리 안에서 참된 자유를 누리는 가장 복된 인생 되길 축복합니다.', '진심 어린 당신의 기도가 하늘 보좌에 상달되어 기적이 일어날 거예요.']
    },
    '희': {
        start: ['희망의 소망을 주시는 주님 안에서 날마다 새 힘을 얻고 승리하며,', '희귀하고 값진 진주처럼 당신의 영혼이 하나님께 귀하게 쓰이고,'],
        mid: ['희생과 사랑으로 헌신하는 당신의 손길을 통해 주의 나라가 확장되며,', '희망찬 내일의 약속을 붙들고 믿음의 경주를 끝까지 완주하여,'],
        end: ['희년의 기쁨과 자유함이 당신의 삶 속에 온전히 임하시길 축복합니다.', '희망의 항구로 인도하시는 성령님과 늘 동행하는 복된 삶 되소서.']
    }
};

const fallbacks = {
    start: ['{char}로 시작하는 당신의 모든 순간에 주의 은혜가 가득하고,', '{char}라는 이름 위에 하나님의 특별한 축복이 머물기를 소망하며,'],
    mid: ['{char}와 함께하는 삶의 자리마다 주님의 향기가 예쁘게 피어나고,', '{char}를 통해 일하실 하나님의 선하신 계획을 기대하며 걷는,'],
    end: ['{char}로 시작된 오늘의 고백이 주님께 기쁨이 되길 축복합니다.', '{char}의 삶이 하나님의 영광을 드러내는 복된 통로 되길 원합니다.']
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
