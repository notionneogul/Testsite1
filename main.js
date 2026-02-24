const dictionary = {
    '김': {
        start: ['기도의 깊은 향기가 하늘 보좌에 상달되어 당신을 포근히 감싸고,', '기쁨의 노래가 마음속 깊은 곳에서 샘물처럼 솟아오르는 오늘 되길,', '기대하는 마음으로 시작하는 오늘이 당신께 큰 선물이 되어,'],
        mid: ['기쁨이 넘치는 삶의 고백을 통해 주님의 살아계심을 온 땅에 증거하며,', '기도로 세상을 이기는 믿음의 단단함이 당신의 영혼 속에 날마다 깊어지고,', '기쁨이 샘물처럼 솟아나 당신의 주변까지 행복하게 만들어서,'],
        end: ['기적 같은 주님의 사랑이 당신의 평생에 마르지 않는 축복이 되길 원합니다.', '기다려온 소망의 열매들이 당신의 삶 속에서 풍성하게 맺히길 간절히 축원해요.', '기꺼이 주를 따르는 당신의 발걸음이 하늘나라의 별처럼 빛나길 축복합니다.']
    },
    '이': {
        start: ['이토록 크신 하나님의 사랑이 오늘 당신의 모든 순간을 덮어주며,', '이슬처럼 맑고 깨끗한 마음으로 기분 좋게 하루를 시작하고,', '이 세상에서 가장 소중한 당신의 이름을 주님이 꼭 기억하시니,'],
        mid: ['이제는 주님 안에서 참된 안식을 누리는 하늘의 기쁨을 충만히 알게 되어,', '이전보다 더 크신 주의 은혜가 당신의 발걸음을 가볍고 복되게 하며,', '이름만 불러도 힘이 되는 주님의 위로가 당신의 지친 마음을 만져주어,'],
        end: ['이름처럼 아름다운 삶을 마음껏 펼쳐나가시길 축복하고 응원해요.', '이전보다 더 행복하고 웃음꽃 피는 날들이 평생 가득하시길 소망합니다.', '이토록 복된 당신의 앞날에 주님의 평강이 늘 함께하시길 원합니다.']
    },
    '박': {
        start: ['밝은 햇살이 당신의 창가를 찾아와 주님의 인사를 대신 전해주듯이,', '박수 소리 가득한 찬양의 고백이 당신의 입술에서 날마다 넘쳐나길 바라고,', '밝고 맑은 마음으로 세상을 아름답게 바라보는 영의 눈이 활짝 열려,'],
        mid: ['밝게 빛나는 별처럼 당신의 존재가 어두운 세상을 환하게 비추는 빛이 되고,', '박토를 옥토로 바꾸시는 주님의 놀라운 창조의 능력을 삶의 자리에서 맛보며,', '박애의 따뜻한 마음으로 주변을 돌보는 주님의 귀한 손길이 되어,'],
        end: ['밝아오는 소망의 아침이 당신의 모든 날들을 찬란하게 비추길 간절히 축복합니다.', '박수받기에 충분한 당신의 귀한 삶을 주님이 늘 지켜주실 거예요.', '밝고 환한 미소가 당신의 얼굴에서 영원히 떠나지 않길 기도해요.']
    },
    '전': {
        start: ['전능하신 하나님의 손길이 당신의 모든 연약함을 강건하게 만져주시고,', '전심으로 주를 찾는 당신에게 하늘의 보화가 열리는 기적이 임하는 오늘 되길,', '전례 없는 주님의 특별한 은총이 당신의 평범한 일상을 매일 새롭게 변화시켜서,'],
        mid: ['전부이신 예수 그리스도를 삶의 주인으로 모시고 당당하고 씩씩하게 살아가며,', '전신 갑주를 입고 믿음의 선한 싸움에서 넉넉히 승리하는 용사가 되어,', '전 세계에 주의 사랑을 흘려보내는 거룩하고 아름다운 축복의 통로가 되어,'],
        end: ['전능하신 주님의 팔이 당신을 영원토록 든든하게 지켜주실 것입니다.', '전심을 다해 주님을 사랑하는 당신의 앞길에 하늘 복이 가득하길 빌어요.', '전례 없이 빛나는 주의 자녀로 세상에서 승리하는 당신이 되소서.']
    },
    '진': {
        start: ['진리의 말씀이 당신의 앞길에 등불이 되어 실족하지 않게 늘 지켜주시고,', '진실한 고백을 기뻐하시는 주님 앞에 날마다 순전한 아이처럼 서는 당신 되길,', '진귀한 보석보다 당신을 더 귀히 여기시는 하나님의 마음을 깊이 느끼는 오늘,'],
        mid: ['진흙 속에 핀 꽃처럼 세상을 아름답게 물들이는 향기로운 주님의 사람 되어,', '진리 안에서 참된 자유를 누리며 주님이 주시는 참된 평안을 맛보고,', '진심 어린 당신의 기도가 하늘 보좌에 상달되어 놀라운 기적을 경험하며,'],
        end: ['진실함으로 주를 대면하는 당신의 모든 걸음을 주님이 축복하십니다.', '진정으로 복된 인생의 주인공이 되어 주님의 영광을 널리 나타내소서.', '진귀하고 소중한 주님의 자녀로서 세상의 빛과 소금이 되길 빌어요.']
    },
    '희': {
        start: ['희망의 노래가 당신의 삶 속에 늘 기쁨으로 울려 퍼지길 바라고,', '희귀하고 값진 진주처럼 당신의 영혼이 하나님 나라를 위해 귀하게 쓰임 받으며,', '희망찬 내일의 약속을 붙들고 오늘을 씩씩하고 기쁘게 살아내는 당신,'],
        mid: ['희생과 사랑으로 헌신하는 당신의 손길을 통해 주의 나라가 확장되고,', '희망의 항구로 인도하시는 성령님과 손잡고 인생의 바다를 평안히 항해하여,', '희망 가득한 당신의 앞날에 주님의 특별한 은총이 늘 함께하시길 기대하며,'],
        end: ['희망의 주님만을 바라보며 끝까지 믿음의 경주를 완주하는 승리자가 되소서.', '희귀하고 존귀한 당신의 존재가 주님 안에서 더욱 찬란히 빛나길 축복합니다.', '희망찬 내일의 주인공으로 주와 함께 영원히 행복하시길 간절히 원합니다.']
    },
    '용': {
        start: ['용기 있게 주의 길을 선택하는 당신의 믿음이 참으로 귀하고 소중하며,', '용솟음치는 성령의 능력이 당신의 심령을 날마다 강건하게 만져주시고,', '용납하시는 주의 은혜 안에서 세상이 줄 수 없는 진정한 자유를 누리길,'],
        mid: ['용서와 사랑의 마음으로 이웃을 먼저 품는 예수님의 성품을 닮아가고,', '용기 백배하여 세상의 어떤 거친 파도 속에서도 주님 한 분만 바라보며,', '용사처럼 담대하게 어둠의 권세를 이기고 주의 승리를 선포하는 자 되어,'],
        end: ['용기 있는 믿음의 발걸음마다 주님이 예비하신 복이 가득하길 빌어요.', '용납받은 죄인의 감사함으로 평생 주님만을 노래하는 복된 인생 되소서.', '용기 있게 주를 증거하는 당신의 삶을 통해 많은 이들이 복을 받길.']
    },
    '식': {
        start: ['식지 않는 열정으로 주님을 사랑하는 당신의 모습이 참 아름답고,', '식탁에 둘러앉은 가족처럼 주님의 사랑 안에서 늘 따뜻한 교제를 나누며,', '식어버린 세상의 사랑 대신 변치 않는 주님의 은혜를 매 순간 경험하길,'],
        mid: ['식구와 같은 마음으로 주변의 영혼들을 지극정성으로 돌보고 섬기며,', '식물들이 햇살을 받아 자라나듯 당신의 영혼도 주의 은혜로 무럭무럭 자라나,', '식지 않는 성령의 불길이 당신의 심령 속에 날마다 뜨겁게 타오르게 되어,'],
        end: ['식지 않는 주님의 사랑이 당신의 평생을 든든하게 지켜주실 것입니다.', '식탁의 풍성함처럼 당신의 삶에 주님이 주시는 복이 가득하길 빌어요.', '식어가는 세상 속에서 주님의 따뜻한 사랑을 전하는 난로가 되소서.']
    },
    '정': {
        start: ['정결한 마음으로 주를 바라보는 당신의 모습이 참 아름답고 귀하며,', '정성 가득한 당신의 마음을 주님이 기쁘게 받아주시는 은혜가 있고,', '정다운 사람들과 함께 웃으며 행복한 추억을 만들어가는 오늘 되길,'],
        mid: ['정직하고 고운 성품이 당신의 삶을 보석보다 더 빛나게 만들고,', '정말로 좋은 일들만 당신의 앞길에 예비되어 있음을 믿고 걸으며,', '정든 주의 품 안에서 세상이 줄 수 없는 참된 평안을 가득 누려서,'],
        end: ['정말 행복한 당신의 모든 날을 주님의 이름으로 축복하고 응원해요.', '정오의 햇살보다 밝게 빛나는 주의 영광이 당신의 평생에 함께하시길.', '정성껏 빚으신 당신의 인생이 주님께 가장 큰 기쁨이 될 것입니다.']
    },
    '아': {
        start: ['아름다운 주님의 형상이 당신의 인격과 삶 속에 찬란하게 배어 나오고,', '아침마다 새로이 부어주시는 주님의 자비하심을 기쁨으로 노래하며,', '아낌없이 주시는 주님의 사랑이 당신의 메마른 영혼을 가득히 채우길,'],
        mid: ['아이처럼 순전한 믿음으로 하나님 아버지를 온전히 신뢰하며 걷고,', '아름다운 소식을 전하는 복된 발걸음이 당신이 가는 곳마다 이어지며,', '아픔과 상처를 싸매시는 주님의 손길을 삶의 자리에서 깊이 경험하여,'],
        end: ['아름다운 천국 소망을 품고 오늘을 넉넉히 승리하는 당신 되소서.', '아름답게 피어나는 백합화처럼 주님의 향기를 세상에 널리 전하길.', '아낌없이 베푸시는 주님의 은혜 안에서 평생 행복하시길 빌어요.']
    },
    '제': {
        start: ['제일 먼저 주의 나라와 의를 구하는 복된 인생의 길을 걷기 시작하고,', '제단의 숯불처럼 당신의 심령이 주를 향해 뜨겁게 달구어져서,', '제일 소중한 당신의 존재가 주님 안에서 보석보다 더 찬란하게 빛나길,'],
        mid: ['제자로서의 삶을 기쁨으로 감당하며 주님의 발자취를 묵묵히 따라가고,', '제한 없는 하나님의 능력이 당신의 삶에 살아있는 증거가 되어 나타나며,', '제시하신 소망의 길을 믿음으로 당당히 걷는 승리자의 기쁨을 누려서,'],
        end: ['제일 먼저 주님을 찾는 당신의 삶에 하늘의 보화가 가득하길 축복해요.', '제일 좋은 것으로 채우시는 하나님의 선하심을 날마다 경험하며 사소서.', '제일 아름다운 이름으로 주님의 생명책에 기록되는 영광을 누리시길.']
    },
    '무': {
        start: ['무지개처럼 아름다운 주의 약속이 당신의 삶에 선명하게 펼쳐지고,', '무한하신 주의 사랑이 당신의 모든 아픔과 상처를 따뜻하게 싸매시며,', '무성한 잎사귀처럼 풍성한 은혜를 주변의 많은 이들에게 나누어주는 오늘,'],
        mid: ['무거운 짐을 다 주께 맡기고 주가 주시는 참된 안식 속에서 쉬며,', '무에서 유를 만드시는 하나님의 창조적 능력을 당신의 삶에서 체험하고,', '무성하게 자라나는 믿음의 나무가 되어 지친 이들에게 시원한 그늘이 되어,'],
        end: ['무엇과도 바꿀 수 없는 예수 그리스도를 소유한 하늘 부자가 되소서.', '무한한 가능성을 지닌 주님의 자녀로 세상의 벽을 넉넉히 넘어서길.', '무궁무진한 하늘의 복이 당신의 평생에 끊이지 않기를 간절히 빌어요.']
    },
    '겸': {
        start: ['겸손한 마음으로 주를 바라보는 당신에게 하늘의 신령한 복이 임하고,', '겸허히 주의 말씀에 귀 기울여 세상 지혜보다 하늘 지혜를 먼저 얻으며,', '겸손과 온유로 옷 입고 주님의 사랑을 묵묵히 실천하는 당신이 되어,'],
        mid: ['겸전한 성품으로 주님의 향기를 전하는 작은 예수로 이 땅을 살아가고,', '겸손하게 주님과 동행하는 당신의 모든 걸음을 하늘 천사가 지켜주며,', '겸허한 순종 끝에 예비된 하늘의 큰 영광과 상급을 기쁨으로 바라보아서,'],
        end: ['겸손히 주를 높이는 당신의 삶을 하나님이 반드시 높여주실 것입니다.', '겸손함이 당신의 가장 아름다운 옷이 되어 주님께 기쁨이 되길 빌어요.', '겸손의 왕으로 오신 예수님을 닮아가는 가장 복된 인생이 되시길.']
    },
    '안': {
        start: ['안전하게 당신을 지키시는 주님의 날개 아래서 참된 평안을 얻고,', '안식의 기쁨이 당신의 영혼 깊은 곳에서부터 샘솟는 복된 오늘 되길,', '안팎으로 밀려오는 시련 속에서도 주님 한 분만으로 만족하는 은혜가 있고,'],
        mid: ['안위하시는 성령님의 위로가 당신의 모든 아픔을 깨끗이 씻어주며,', '안개 같은 세상 속에서도 변치 않는 주님의 진리를 등불로 삼아 걷고,', '안주하지 않고 더 높은 부름의 상을 향해 날마다 비상하는 믿음이 생겨서,'],
        end: ['안위함과 평강이 당신의 가정과 일터 위에 영원히 함께하시길 축복해요.', '안심하고 주님께 모든 것을 맡기는 당신의 삶을 주께서 책임지실 것입니다.', '안전한 주님의 요새 안에서 영원토록 승리하는 하늘 백성 되소서.']
    },
    '소': {
        start: ['소망의 빛으로 오신 예수님이 당신의 앞길을 환하게 비추어주시고,', '소중한 당신의 삶이 하나님의 거대한 계획 속에서 아름답게 빚어지며,', '소박한 일상 속에서도 주님이 주시는 작은 천국을 매일 경험하길,'],
        mid: ['소금과 빛이 되어 어두운 세상을 주님의 사랑으로 따뜻하게 물들이고,', '소리 높여 주를 찬양하는 당신의 고백이 하늘 보좌를 기쁘게 해드리며,', '소중히 간직한 믿음의 씨앗이 당신의 삶에서 백 배의 결실을 맺게 되어,'],
        end: ['소망의 하나님이 당신의 마음을 평강으로 가득 채워주시길 축복합니다.', '소원하는 모든 기도가 주님의 뜻 안에서 가장 선하게 이루어질 거예요.', '소중한 당신의 이름이 하늘나라 생명책에서 찬란하게 빛나길 원합니다.']
    },
    '연': {
        start: ['연단된 정금처럼 당신의 믿음이 주님 앞에 보석같이 빛나길 바라고,', '연약한 우리를 강건케 하시는 주님의 능력을 날마다 의지하며 살며,', '연속되는 일상 속에서도 늘 새로운 주님의 은혜를 발견하는 기쁨이 있고,'],
        mid: ['연합하여 선을 이루시는 하나님의 놀라운 섭리를 온 삶으로 고백하며,', '연못가에 핀 꽃처럼 맑고 향기로운 주님의 사람으로 주변을 적시고,', '연기처럼 사라질 세상 것보다 영원한 하늘의 것을 사모하며 전진하여,'],
        end: ['연로하신 부모님처럼 인자한 주님의 품 안에서 평생 평안을 누리소서.', '연결된 포도나무 가지처럼 주님께 붙어 있어 풍성한 삶 되길 축복해요.', '연일 쏟아지는 하늘의 축복이 당신의 평생에 마르지 않기를 빌어요.']
    },
    '원': {
        start: ['원하는 모든 소망이 주님의 선하신 뜻 안에서 아름답게 열매 맺고,', '원대한 꿈을 품고 독수리처럼 하늘 높이 날아오르는 믿음을 소유하며,', '원수 앞에서도 상을 베푸시는 주님의 넉넉함을 날마다 경험하길 빌고,'],
        mid: ['원동력이 되시는 성령님의 손길을 따라 기쁘게 순종하며 평안히 걷고,', '원함보다 더 큰 것으로 채우시는 하나님의 놀라운 은혜를 삶에서 보고,', '원 없이 주님을 사랑하고 원 없이 축복받는 가장 복된 인생이 되어서,'],
        end: ['원천이 되시는 주님께로부터 오는 생명수가 당신께 넘쳐나길 축복해요.', '원하고 바라고 기도하는 모든 것들이 주 안에서 응답받는 삶 되소서.', '원만한 주님의 성품을 닮아 세상을 치유하는 평화의 사절이 되시길.']
    },
    '예': {
        start: ['예수 그리스도의 은혜와 평강이 당신의 심령에 강물처럼 흐르고,', '예비하신 축복의 통로가 당신의 발걸음 닿는 곳마다 활짝 열리길 빌고,', '예쁜 열매를 맺는 포도나무 가지처럼 주님께 굳게 붙어 있는 오늘 되길,'],
        mid: ['예배의 감격이 살아있는 삶을 통해 하나님의 기쁨이 되는 당신이 되고,', '예수님만 닮아가는 당신의 고귀한 인격이 세상의 따뜻한 위로가 되며,', '예측할 수 없는 놀라운 주님의 은혜가 당신의 평생을 풍성하게 채워서,'],
        end: ['예수 그리스도 이름의 능력이 당신을 날마다 새롭게 하실 줄 믿습니다.', '예비된 하늘의 면류관을 향해 끝까지 믿음의 경주를 완주하는 자 되소서.', '예부터 지금까지 변함없이 당신을 사랑하시는 주님과 늘 동행하세요.']
    }
};

function getJosa(char, type) {
    const code = char.charCodeAt(0);
    if (code < 44032 || code > 55203) return '';
    const hasBatchim = (code - 44032) % 28 !== 0;
    const josaMap = {
        '이/가': hasBatchim ? '이' : '가', '은/는': hasBatchim ? '은' : '는',
        '을/를': hasBatchim ? '을' : '를', '으로/로': hasBatchim ? '으로' : '로',
        '이라는/라는': hasBatchim ? '이라는' : '라는', '와/과': hasBatchim ? '과' : '와'
    };
    return josaMap[type] || '';
}

const fallbacks = {
    start: (char) => `${char}${getJosa(char, '이라는/라는')} 소중한 이름 위에 주님의 특별한 축복이 가득 머물고,`,
    mid: (char) => `${char}${getJosa(char, '와/과')} 함께하시는 주님의 따뜻한 온기가 당신의 삶의 자리마다 가득하며,`,
    end: (char) => `${char}${getJosa(char, '이/가')} 걷는 모든 길에 주님의 따뜻한 동행과 평강이 있길 간절히 축복합니다.`
};

const finalBliss = [
    '주님의 이름으로 당신을 오늘 더 축복합니다.',
    '영원토록 주와 동행하는 가장 복된 인생 되소서.',
    '따스한 주님의 손길이 당신의 하루를 꼭 안아주시길 기도해요.',
    '하늘의 평화와 기쁨이 당신의 생각을 굳게 지켜주길 원합니다.'
];

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

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
        generateThreeOptions(name);
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }, 800);
});

function generateThreeOptions(name) {
    cardsContainer.innerHTML = '';
    const globalUsed = new Set();
    for (let i = 1; i <= 3; i++) {
        const poemLines = generateSinglePoem(name, globalUsed);
        cardsContainer.appendChild(createCard(poemLines, i));
    }
    resultArea.classList.remove('hidden');
    scrollToResult();
}

function generateSinglePoem(name, globalUsed) {
    const characters = name.split('');
    const lines = [];
    const usedIndices = {}; 

    characters.forEach((char, index) => {
        let position = index === 0 ? 'start' : (index === characters.length - 1 ? 'end' : 'mid');
        let phrase = '';
        if (dictionary[char]) {
            const options = dictionary[char][position];
            const key = `${char}_${position}`;
            if (!usedIndices[key]) usedIndices[key] = new Set();
            let available = options.map((_, i) => i).filter(i => !globalUsed.has(char + position + i));
            if (available.length === 0) { available = options.map((_, i) => i); }
            const randIdx = available[Math.floor(Math.random() * available.length)];
            globalUsed.add(char + position + randIdx);
            phrase = options[randIdx];
        } else {
            phrase = fallbacks[position](char);
        }
        globalUsed.add(phrase);
        lines.push(phrase);
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
            // 마지막 라인은 타이핑 및 강조 처리 없이 바로 출력
            content.appendChild(line);
            line.innerText = text;
        } else {
            content.appendChild(line);
            typeWriter(line, text, i * 400);
        }
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
                setTimeout(typing, 20);
            }
        }
        typing();
    }, delay);
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
