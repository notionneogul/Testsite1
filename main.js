const dictionary = {
    // [성씨 및 도입부 - 아주 쉽고 따뜻한 표현]
    '김': {
        start: ['기분 좋은 웃음이 당신의 하루를 환하게 열어주고,', '기쁨의 노래가 마음속에서 솔솔 피어오르는 오늘 되길,'],
        mid: ['기다려온 예쁜 꿈들이 하나씩 하나씩 이루어지며,', '기도하는 마음마다 따뜻한 평화가 가득히 채워지고,'],
        end: ['기적 같은 행복이 당신의 모든 날에 가득하길 축복합니다.', '기분 좋은 일들만 가득한 멋진 인생 되시길 소망해요.']
    },
    '이': {
        start: ['이토록 따뜻한 사랑이 당신의 마음을 포근히 감싸고,', '이슬처럼 맑고 깨끗한 마음으로 하루를 시작하며,'],
        mid: ['이제는 걱정보다 소망을 더 많이 품고 씩씩하게 걷고,', '이 세상에서 가장 소중한 당신의 이름을 주님이 아시니,'],
        end: ['이름처럼 아름다운 삶을 마음껏 펼쳐나가시길 응원해요.', '이전보다 더 행복하고 웃음 꽃 피는 날들이 가득하세요.']
    },
    '박': {
        start: ['밝은 햇살이 당신의 창가를 제일 먼저 찾아오듯이,', '박수 소리처럼 신나는 기쁨이 당신의 삶에 넘쳐나고,'],
        mid: ['밝게 빛나는 별처럼 당신의 존재가 주변을 환하게 비추며,', '박자 맞춰 흐르는 노래처럼 삶의 모든 순간이 즐겁고,'],
        end: ['밝아오는 내일이 오늘보다 더 예쁘게 빛나길 축복합니다.', '박수받기에 충분한 당신의 귀한 삶을 진심으로 응원해요.']
    },
    '최': {
        start: ['최고의 선물인 오늘 하루를 주님과 기쁘게 시작하고,', '처음 가졌던 예쁜 마음을 잃지 않고 소중히 간직하며,'],
        mid: ['최선을 다해 걷는 당신의 발걸음을 주님이 꼭 붙드시고,', '최고로 행복한 웃음이 당신의 얼굴에서 떠나지 않아서,'],
        end: ['최후의 순간까지 주님과 손잡고 걷는 복된 인생 되소서.', '최고로 소중한 당신의 꿈이 멋지게 이루어지길 축복합니다.']
    },
    '정': {
        start: ['정말 소중한 당신에게 하늘의 평안이 가득 전해지고,', '정성 담긴 응원의 마음이 당신의 하루를 든든하게 하며,'],
        mid: ['정다운 사람들과 함께 웃으며 행복한 추억을 쌓아가고,', '정직하고 고운 마음씨가 세상을 더 아름답게 만들어서,'],
        end: ['정말 좋은 일들만 당신의 앞길에 가득하기를 기도할게요.', '정든 집처럼 편안한 주님의 품 안에서 늘 행복하세요.']
    },
    '유': {
        start: ['유난히 따뜻한 사랑이 당신의 발걸음을 졸졸 따라다니고,', '유일하게 빛나는 당신의 가치를 주님이 보석처럼 여기며,'],
        mid: ['유연하고 부드러운 마음으로 세상을 품는 넉넉함을 갖고,', '유리처럼 투명하고 맑은 주님의 평강이 당신을 덮어서,'],
        end: ['유달리 행복한 웃음 소리가 당신의 가정에 가득하길 빌어요.', '유명한 세상의 자랑보다 주님의 사랑을 더 많이 누리소서.']
    },
    '한': {
        start: ['한결같은 주님의 사랑이 당신의 마음을 꼭 안아주고,', '환한 미소 속에 담긴 따뜻함이 만나는 모든 이에게 전해지며,'],
        mid: ['한마음으로 주님을 사랑하며 오늘을 씩씩하게 살아가고,', '한계가 없는 하늘의 축복이 당신의 삶에 가득히 쏟아져서,'],
        end: ['한결같이 당신을 지켜주시는 주님 안에서 늘 평안하세요.', '한 번뿐인 소중한 인생을 주님과 함께 예쁘게 꽃피우시길.']
    },
    '은': {
        start: ['은은하게 퍼지는 꽃향기처럼 주님의 사랑이 스며들고,', '은혜의 선물로 주신 오늘 하루를 감사함으로 시작하며,'],
        mid: ['은총의 햇살이 당신의 모든 길을 따뜻하게 비추어주고,', '은밀하게 챙겨주시는 주님의 손길을 매 순간 느끼면서,'],
        end: ['은하수보다 더 빛나는 주의 약속이 꼭 이루어지길 빌어요.', '은혜 아래 사는 삶이 얼마나 행복한지 매일 체험하세요.']
    },
    '지': {
        start: ['지혜로운 마음을 주셔서 매일 좋은 선택을 하게 하시고,', '지극한 정성으로 당신을 돌보시는 주님의 사랑을 느끼며,'],
        mid: ['지금 이 순간도 당신 곁에서 응원하시는 하나님을 믿고,', '지나온 모든 길마다 은혜의 꽃길이었음을 깨닫게 되어,'],
        end: ['지성소처럼 거룩하고 예쁜 마음을 늘 간직하시길 축복해요.', '지금처럼 밝고 예쁜 모습으로 주님과 늘 함께 걷길 원합니다.']
    },
    '수': {
        start: ['수줍게 피어난 꽃 한 송이처럼 당신의 미소가 예쁘고,', '수정처럼 맑은 주님의 평강이 당신의 생각을 가득 채우며,'],
        mid: ['수많은 별들보다 더 빛나는 주님의 약속을 굳게 믿고,', '수면 위에 비친 평온한 달빛처럼 마음이 편안해져서,'],
        end: ['수풀 우거진 숲처럼 넉넉한 쉼을 주는 사람으로 사소서.', '수지맞은 인생처럼 주 안에서 가장 귀한 복을 누리길 축복해요.']
    },
    '진': {
        start: ['진실한 마음으로 주님을 대하는 당신의 모습이 참 귀하고,', '진귀한 보물보다 당신을 더 사랑하시는 하나님의 진심을 느끼며,'],
        mid: ['진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 사람이 되고,', '진리의 말씀을 등불 삼아 어두운 길도 용기 있게 걸어가서,'],
        end: ['진짜 행복이 무엇인지 당신의 삶을 통해 보여주는 증인 되소서.', '진심 어린 당신의 기도가 하늘 보좌에 꼭 상달되길 응원해요.']
    },
    '하': {
        start: ['하늘 문을 활짝 여시고 쏟아지는 축복을 가득 받으시길,', '하나님의 형상을 닮은 당신은 세상에서 가장 소중한 사람,'],
        mid: ['하루의 시작과 끝이 오직 감사의 고백으로 가득 채워지고,', '하늘 소망 가슴에 품고 주님과 함께 예쁜 걸음을 걸어서,'],
        end: ['하늘 가득한 주님의 영광이 당신의 앞길을 찬란히 비추길 빌어요.', '하나님의 큰 기쁨이 되는 당신의 모든 날을 축복합니다.']
    },
    '나': {
        start: ['나의 힘이 되신 주님을 날마다 노래하며 행복하게 살고,', '나를 지으신 하나님의 뜻대로 빛나는 삶을 사는 당신 되길,'],
        mid: ['나그네 길 인생 속에서도 주님 손 꼭 잡고 평안히 걸으며,', '나누어 줄수록 더 커지는 주님의 사랑을 실천하는 사람이 되어,'],
        end: ['나비처럼 은혜의 나라에서 자유롭게 훨훨 날아오르길 빌어요.', '나를 위해 준비하신 영원한 상급을 기쁨으로 바라보소서.']
    },
    '영': {
        start: ['영원히 변하지 않는 주님의 사랑이 당신을 든든히 지키고,', '영광의 빛이 당신의 삶 구석구석을 환하게 밝히는 오늘 되길,'],
        mid: ['영혼의 깊은 곳에서 터져 나오는 기쁨의 찬양을 불러보고,', '영성 깊은 고백을 통해 주변에 선한 마음을 널리 전하여,'],
        end: ['영원토록 변치 않는 주의 사랑 안에서 늘 행복하시길 축복해요.', '영원한 하늘 나라를 꿈꾸며 오늘도 믿음으로 승리하세요.']
    }
};

const fallbacks = {
    start: ['{char}심으로 주님을 따르는 당신의 삶에 평화가 가득하고,', '{char}랑스러운 주님의 자녀로서 세상의 빛이 되는 축복이 있길,'],
    mid: ['{char}성 가득한 마음으로 이웃을 섬기는 당신을 주님이 보시고,', '{char}망의 끈을 놓지 않고 끝까지 힘을 내어 씩씩하게 걸어서,'],
    end: ['{char}광스러운 주의 일에 참여하는 즐거움을 평생 누리길 빌어요.', '{char}평한 마음으로 주님과 함께 걷는 가장 복된 인생 되소서.']
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '언제나 주님과 함께 걷는 가장 행복한 사람 되세요.',
    '따스한 주님의 손길이 당신의 하루를 꼭 안아주길 기도해요.',
    '하늘의 평화가 당신의 생각과 마음을 굳게 지켜주길 원합니다.'
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
