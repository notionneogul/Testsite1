const dictionary = {
    // [성씨 및 주요 도입부]
    '김': {
        start: ['기분 좋은 웃음이 당신의 하루를 환하게 열어주고,', '기쁨의 노래가 마음속에서 솔솔 피어오르는 오늘 되길,'],
        mid: ['기다려온 소중한 일들이 하나씩 하나씩 이루어지며,', '기도하는 마음마다 따뜻한 평화가 가득히 채워지고,'],
        end: ['기적 같은 행복이 당신의 모든 날에 가득하길 축복합니다.', '기분 좋은 일들만 가득한 멋진 인생 되시길 소망해요.']
    },
    '이': {
        start: ['이토록 따뜻한 사랑이 오늘 당신을 포근히 덮고,', '이슬처럼 맑고 깨끗한 마음으로 하루를 시작하며,'],
        mid: ['이제는 걱정보다 소망을 더 많이 품고 씩씩하게 걷고,', '이 세상에서 가장 소중한 당신의 이름을 주님이 아시니,'],
        end: ['이름처럼 아름다운 삶을 마음껏 펼쳐나가시길 응원해요.', '이전보다 더 행복하고 웃음꽃 피는 날들이 가득하세요.']
    },
    '박': {
        start: ['밝은 햇살이 당신의 창가를 제일 먼저 찾아오듯이,', '박수 소리처럼 기분 좋은 일들이 당신의 삶에 넘쳐나고,'],
        mid: ['밝게 빛나는 별처럼 당신의 존재가 주변을 환하게 비추며,', '밝고 맑은 마음으로 세상을 아름답게 바라보는 눈이 열려,'],
        end: ['밝아오는 내일이 오늘보다 더 예쁘게 빛나길 축복합니다.', '박수받기에 충분한 당신의 귀한 삶을 진심으로 응원해요.']
    },
    '최': {
        start: ['최고의 선물인 오늘 하루를 주님과 기쁘게 시작하고,', '처음 가졌던 예쁜 마음을 잃지 않고 소중히 간직하며,'],
        mid: ['최선을 다해 걷는 당신의 모든 걸음을 주님이 붙드시고,', '최고로 행복한 웃음이 당신의 얼굴에서 떠나지 않아서,'],
        end: ['최고로 소중한 당신의 꿈이 멋지게 이루어지길 축복합니다.', '최후의 순간까지 주님과 손잡고 걷는 복된 인생 되소서.']
    },
    '정': {
        start: ['정말 소중한 당신에게 하늘의 평안이 가득 전해지고,', '정성 가득한 당신의 마음을 주님이 기쁘게 받아주시며,'],
        mid: ['정다운 사람들과 함께 웃으며 행복한 추억을 쌓아가고,', '정직하고 고운 성품이 당신의 삶을 더욱 빛나게 만들어서,'],
        end: ['정말 좋은 일들만 당신의 앞길에 가득하기를 기도할게요.', '정든 주의 품 안에서 세상이 줄 수 없는 평안을 누리소서.']
    },
    '강': {
        start: ['강건한 믿음의 뿌리가 당신의 삶을 든든하게 지탱하고,', '강물처럼 도도하게 흐르는 주의 은혜 속에 몸을 맡기며,'],
        mid: ['가장 소중한 것을 아끼는 마음으로 오늘을 예쁘게 살고,', '강한 바람에도 흔들리지 않는 평안이 당신의 마음을 덮어,'],
        end: ['강가에 심은 나무처럼 풍성한 열매를 맺길 축복합니다.', '가장 빛나는 모습으로 주님과 늘 동행하는 삶 되소서.']
    },
    '조': {
        start: ['조용히 들려오는 주님의 음성이 당신의 길을 안내하고,', '좋은 일들만 가득할 것 같은 기분 좋은 예감이 찾아오며,'],
        mid: ['조화로운 삶의 고백을 통해 주변에 사랑을 널리 전하고,', '조금은 천천히 가더라도 주님과 발맞추어 걷는 즐거움으로,'],
        end: ['조금 더 행복하고 조금 더 웃는 복된 날 되길 축복해요.', '좋은 사람들과 함께 아름다운 천국을 만들어가시길.']
    },
    '윤': {
        start: ['윤슬처럼 반짝이는 은혜의 물결이 당신의 마음을 적시고,', '우리와 함께하시는 주님의 따뜻한 온기가 당신을 감싸며,'],
        mid: ['윤택한 영혼의 복이 당신의 삶과 가정 위에 가득히 넘치고,', '우리 모두의 기쁨이 되는 당신의 존재가 참으로 귀해서,'],
        end: ['윤기 나는 믿음의 고백이 당신의 입술에서 늘 끊이지 않길.', '우리 주님이 예비하신 가장 선한 길로만 걷길 축복합니다.']
    },
    '장': {
        start: ['장성한 분량까지 당신의 믿음이 쑥쑥 자라나길 바라고,', '장막 터를 넓히시는 하나님의 축복이 당신의 삶에 가득하며,'],
        mid: ['장차 나타날 영광을 소망하며 오늘의 어려움을 이겨내고,', '장인처럼 정교하게 당신의 삶을 빚으시는 주의 손길을 믿어,'],
        end: ['장대하게 뻗어가는 믿음의 가문을 이루시길 축복합니다.', '장소에 상관없이 어디서나 주를 예배하는 자 되소서.']
    },
    '임': {
        start: ['임마누엘 하나님이 당신의 모든 순간에 함께 계심을 믿고,', '임재의 깊은 바다로 나아가 주님의 세밀한 음성을 들으며,'],
        mid: ['임명하신 사명의 자리에서 묵묵히 충성하며 꽃을 피우고,', '임시적인 세상보다 영원한 하늘 보화를 더 귀하게 여겨서,'],
        end: ['임금 되신 주님의 통치 아래서 참된 평강을 누리소서.', '임하신 성령의 불길이 당신의 영혼을 뜨겁게 달구길 빌어요.']
    },
    '한': {
        start: ['한결같은 주님의 사랑이 당신의 마음을 꼭 안아주고,', '환한 미소 속에 담긴 따뜻함이 만나는 모든 이에게 전해지며,'],
        mid: ['한마음으로 주님을 사랑하며 오늘을 씩씩하게 살아가고,', '한계가 없는 하늘의 축복이 당신의 삶에 가득히 쏟아져서,'],
        end: ['한결같이 당신을 지켜주시는 주님 안에서 늘 평안하세요.', '한 번뿐인 소중한 인생을 주님과 함께 예쁘게 꽃피우시길.']
    },
    '지': {
        start: ['지혜로운 마음을 주셔서 매일 좋은 선택을 하게 하시고,', '지극한 정성으로 당신을 돌보시는 주님의 사랑을 느끼며,'],
        mid: ['지금 이 순간도 당신 곁에서 응원하시는 하나님을 믿고,', '지나온 모든 길마다 은혜의 꽃길이었음을 깨닫게 되어,'],
        end: ['지성소처럼 거룩하고 예쁜 마음을 늘 간직하시길 축복해요.', '지금처럼 밝고 예쁜 모습으로 주님과 늘 함께 걷길 원합니다.']
    },
    '민': {
        start: ['민들레 홀씨처럼 주의 사랑이 당신을 통해 널리 퍼지고,', '믿음의 눈을 들어 약속의 땅을 바라보는 용기가 생기며,'],
        mid: ['미소 짓는 당신의 얼굴을 보며 주변이 환하게 밝아지고,', '민족과 열방을 품고 기도하는 큰 마음을 가진 사람 되어,'],
        end: ['민첩하게 주의 뜻을 따라 승리하는 삶 되길 축복합니다.', '믿음의 주요 온전케 하시는 주님만 바라보며 사소서.']
    },
    '준': {
        start: ['준비하신 여호와 이레의 복이 당신의 삶에 가득히 임하고,', '준엄한 주의 말씀 앞에 겸손히 순종하며 거룩한 길을 걷고,'],
        mid: ['준비된 마음 위에 성령의 단비가 내려 풍성한 열매 맺으며,', '준비된 자를 쓰시는 하나님 앞에 귀한 그릇으로 드려져서,'],
        end: ['준비된 하늘의 보화가 당신의 창고에 가득하길 빌어요.', '준비된 사명의 길을 담대히 걸어가는 승리자 되소서.']
    },
    '서': {
        start: ['서광이 비치는 아침처럼 당신의 삶에 소망의 문이 열리고,', '서로 사랑하라는 주의 말씀을 온 마음 다해 실천하면서,'],
        mid: ['서약하신 하나님의 약속이 당신의 삶에서 성취되는 걸 보고,', '서두르지 않고 주님의 때를 기다리는 인내의 믿음이 깊어져,'],
        end: ['서로를 세워주는 아름다운 사랑의 통로로 쓰임 받으소서.', '서 있는 그곳이 바로 주님을 만나는 성소가 되길 빌어요.']
    },
    '유': {
        start: ['유난히 따뜻한 사랑이 당신의 발걸음을 졸졸 따라다니고,', '유일하게 빛나는 당신의 가치를 주님이 보석처럼 여기며,'],
        mid: ['유연하고 부드러운 마음으로 세상을 품는 넉넉함을 갖고,', '유리처럼 투명하고 맑은 주님의 평강이 당신을 덮어서,'],
        end: ['유달리 행복한 웃음 소리가 당신의 가정에 가득하길 빌어요.', '유익하고 복된 삶으로 많은 이들에게 사랑을 전하며 사소서.']
    },
    '수': {
        start: ['수줍게 피어난 꽃 한 송이처럼 당신의 미소가 참 예쁘고,', '수정처럼 맑고 깨끗한 주님의 평안이 당신의 생각을 채우며,'],
        mid: ['수많은 약속의 말씀들이 당신의 삶에서 예쁘게 이루어지고,', '수면 위에 비친 평온한 달빛처럼 마음이 편안하고 든든해서,'],
        end: ['수풀 우거진 숲처럼 많은 이들에게 쉼을 주는 사람 되소서.', '수지맞은 인생처럼 주 안에서 가장 귀한 복을 누리길 축복해요.']
    },
    '현': {
        start: ['현명한 마음을 주셔서 매일 좋은 선택을 하게 하시고,', '현재 주어진 모든 환경 속에서 감사의 조건을 찾아내며,'],
        mid: ['현실의 어려움 속에서도 주님이 주시는 용기로 이겨내고,', '현존하시는 하나님의 영광을 날마다 대면하며 살아가서,'],
        end: ['현숙하고 지혜로운 주님의 자녀로 늘 승리하시길 축복해요.', '현재보다 내일이 더 기대되는 복된 인생 되시길 원합니다.']
    },
    '진': {
        start: ['진심 어린 당신의 기도가 하늘 보좌에 기쁘게 상달되고,', '진귀한 보물보다 당신을 더 사랑하시는 주님의 마음을 느끼며,'],
        mid: ['진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 사람이 되고,', '진리의 말씀을 등불 삼아 어두운 길도 용기 있게 걸어가서,'],
        end: ['진짜 행복이 무엇인지 당신의 삶을 통해 보여주는 증인 되소서.', '진심을 다해 주님을 사랑하는 당신의 앞길을 축복합니다.']
    },
    '희': {
        start: ['희망의 노래가 당신의 삶 속에 늘 기쁨으로 울려 퍼지고,', '희귀하고 값진 보석처럼 당신의 영혼이 귀하게 쓰임 받으며,'],
        mid: ['희망찬 내일의 약속을 붙들고 오늘을 씩씩하게 살아내고,', '희생과 사랑으로 헌신하는 당신의 손길에 주님이 복을 더하여,'],
        end: ['희망의 항구로 인도하시는 주님과 늘 동행하는 삶 되소서.', '희망 가득한 당신의 앞날에 좋은 일들만 가득하길 빌어요.']
    },
    '겸': {
        start: ['겸손한 마음으로 주를 바라보는 당신에게 하늘 복이 임하고,', '겸허히 주의 말씀에 귀 기울여 지혜로운 자의 길을 걸으며,'],
        mid: ['겸전한 성품으로 주님의 향기를 전하는 작은 예수가 되고,', '겸손과 온유로 옷 입고 많은 영혼을 주께로 인도하여,'],
        end: ['겸허한 순종 끝에 예비된 영광을 누리는 승리자 되소서.', '겸손히 주와 동행하는 당신의 모든 걸음을 축복합니다.']
    },
    '제': {
        start: ['제일 먼저 주의 나라와 의를 구하는 복된 인생이 되고,', '제단의 숯불처럼 당신의 심령이 주를 향해 뜨거워져서,'],
        mid: ['제자로서의 삶을 기쁨으로 감당하며 주를 따라가고,', '제한 없는 하나님의 능력이 당신의 삶에 실재가 되어,'],
        end: ['제일 소중한 당신의 존재가 주님 안에서 더욱 빛나소서.', '제시하신 소망의 길을 믿음으로 당당히 걷길 축복합니다.']
    },
    '무': {
        start: ['무지개처럼 아름다운 주의 약속이 당신의 삶에 펼쳐지고,', '무한하신 주의 사랑이 당신의 모든 아픔을 싸매시며,'],
        mid: ['무성한 잎사귀처럼 풍성한 은혜를 주변에 나누어주고,', '무거운 짐을 다 주께 맡기고 참된 안식을 누림으로써,'],
        end: ['무에서 유를 만드시는 하나님을 날마다 찬양하길 빌어요.', '무성하게 자라나는 믿음의 나무가 되어 그늘을 내어주소서.']
    }
};

// 정교한 조사 처리 엔진
function getJosa(char, type) {
    const code = char.charCodeAt(0);
    if (code < 44032 || code > 55203) return char; // 한글 아님
    const hasBatchim = (code - 44032) % 28 !== 0;

    const josaMap = {
        '이/가': hasBatchim ? '이' : '가',
        '은/는': hasBatchim ? '은' : '는',
        '을/를': hasBatchim ? '을' : '를',
        '으로/로': hasBatchim ? '으로' : '로',
        '이라는/라는': hasBatchim ? '이라는' : '라는'
    };
    return josaMap[type] || '';
}

const fallbacks = {
    start: (char) => `${char}${getJosa(char, '이라는/라는')} 소중한 이름 위에 주님의 축복이 가득 머물고,`,
    mid: (char) => `${char}${getJosa(char, '와/과')} 함께하는 모든 순간에 주님의 향기가 배어 나오고,`,
    end: (char) => `${char}${getJosa(char, '이/가')} 걷는 모든 길에 주님의 따뜻한 동행이 있길 축복합니다.`
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '언제나 주님과 함께 걷는 가장 행복한 사람 되세요.',
    '따스한 주님의 손길이 당신의 하루를 꼭 안아주길 기도해요.',
    '하늘의 평감과 기쁨이 당신의 생각을 굳게 지켜주길 원합니다.'
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

        let phrase = '';
        if (dictionary[char]) {
            phrase = getRandom(dictionary[char][position]);
        } else {
            // Fallback 엔진 가동
            phrase = fallbacks[position](char);
        }
        
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
