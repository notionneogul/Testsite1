// UI 요소
const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const resultArea = document.getElementById('resultArea');
const loadingArea = document.getElementById('loadingArea');
const cardsContainer = document.getElementById('cardsContainer');
const themeToggle = document.getElementById('themeToggle');

// --- 테마 전환 로직 ---
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.querySelector('.icon').innerText = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.querySelector('.icon').innerText = '🌙';
}

// --- 인터랙티브 배경 로직 ---
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 60;
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', () => {
    initCanvas();
});

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulse = Math.random() * Math.PI;
    }
    draw() {
        const currentOpacity = this.opacity + Math.sin(this.pulse) * 0.3;
        const starColor = `rgba(255, 215, 100, ${Math.max(0.1, currentOpacity)})`;
        ctx.shadowBlur = this.size * 6;
        ctx.shadowColor = 'rgba(255, 200, 0, 0.5)';
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    update() {
        this.pulse += this.pulseSpeed;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 25;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 25;
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

// --- 페이지 초기화 및 데이터 로딩 ---
let recentSamplesData = []; // 원본 데이터 보관용

window.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    animate();
    loadRecentSamples();
});

async function loadRecentSamples() {
    try {
        const res = await fetch('/api/samples');
        if (!res.ok) return;
        recentSamplesData = await res.json();
        renderSamples(recentSamplesData);
    } catch (e) {
        console.error('샘플 로딩 실패:', e);
    }
}

function renderSamples(samples) {
    const samplesGrid = document.getElementById('samplesGrid');
    samplesGrid.innerHTML = '';
    samples.forEach(sample => {
        samplesGrid.appendChild(createSampleCard(sample));
    });
}

function createSampleCard(sample) {
    const card = document.createElement('div');
    card.className = 'sample-mini-card';
    card.dataset.id = sample.id;
    
    // 데이터에 이미 콜론이 포함되어 있을 경우를 대비한 방어 로직
    const contentHtml = sample.poem.map(line => {
        let first = line[0];
        let rest = line.substring(1);
        // 만약 rest가 ": "로 시작한다면 중복 방지를 위해 제거
        if (rest.startsWith(': ')) {
            rest = rest.substring(2);
        } else if (rest.startsWith(':')) {
            rest = rest.substring(1);
        }
        return `<strong>${first}</strong>: ${rest}`;
    }).join('<br>');

    card.innerHTML = `
        <div class="sample-content">${contentHtml}</div>
        <div class="sample-footer">
            <span class="sample-name">${sample.name} 님</span>
            <div class="reaction-group">
                <button class="emoji-btn" onclick="react('${sample.id}', '❤️')">❤️ <span class="count">${sample.reactions?.['❤️'] || 0}</span></button>
                <button class="emoji-btn" onclick="react('${sample.id}', '✨')">✨ <span class="count">${sample.reactions?.['✨'] || 0}</span></button>
                <button class="emoji-btn" onclick="react('${sample.id}', '🙏')">🙏 <span class="count">${sample.reactions?.['🙏'] || 0}</span></button>
            </div>
        </div>
    `;
    return card;
}

// 이모지 반응 로직 (UI 스크래핑 대신 저장된 데이터 사용)
window.react = async function(sampleId, emoji) {
    const sample = recentSamplesData.find(s => s.id === sampleId);
    if (!sample) return;

    const targetCard = document.querySelector(`.sample-mini-card[data-id="${sampleId}"]`);
    if (!targetCard) return;

    const btn = Array.from(targetCard.querySelectorAll('.emoji-btn')).find(b => b.innerText.includes(emoji));
    const countSpan = btn.querySelector('.count');
    let count = parseInt(countSpan.innerText);
    
    // UI 낙관적 업데이트
    if (btn.classList.contains('active')) {
        count--;
        btn.classList.remove('active');
    } else {
        count++;
        btn.classList.add('active');
    }
    countSpan.innerText = count;
    
    // 메모리 데이터 업데이트
    if (!sample.reactions) sample.reactions = {};
    sample.reactions[emoji] = count;

    try {
        await fetch('/api/samples', {
            method: 'POST',
            body: JSON.stringify(sample)
        });
    } catch (e) {
        console.error('반응 저장 실패');
    }
};

async function saveSampleToServer(lines, name) {
    const newSample = {
        id: Date.now().toString(),
        name: name,
        poem: lines,
        reactions: { '❤️': 0, '✨': 0, '🙏': 0 }
    };

    try {
        await fetch('/api/samples', {
            method: 'POST',
            body: JSON.stringify(newSample)
        });
        loadRecentSamples();
    } catch (e) {
        console.error('샘플 저장 실패');
    }
}

// --- 생성 및 UI 제어 ---
generateBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    if (!name) return alert('성함을 입력해주세요!');
    generateBtn.disabled = true;
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const responseText = await response.text();
        if (!response.ok) throw new Error('생성 실패');
        await renderResult(responseText);
    } catch (error) {
        alert(`오류가 발생했습니다: ${error.message}`);
    } finally {
        loadingArea.classList.add('hidden');
        generateBtn.disabled = false;
    }
});

async function renderResult(text) {
    cardsContainer.innerHTML = '';
    try {
        const startIdx = text.indexOf('[');
        const endIdx = text.lastIndexOf(']');
        const jsonStr = text.substring(startIdx, endIdx + 1);
        const poemOptions = JSON.parse(jsonStr);
        poemOptions.forEach((option, i) => {
            const poemLines = option.poem || option;
            const verse = option.verse || "";
            cardsContainer.appendChild(createCard(poemLines, verse, i + 1));
        });
        resultArea.classList.remove('hidden');
        scrollToResult();
    } catch (e) {
        console.error(e);
    }
}

function createCard(lines, verse, index) {
    const card = document.createElement('div');
    card.className = 'poem-card';
    card.dataset.index = index;
    card.dataset.poem = JSON.stringify(lines);
    card.dataset.verse = verse;
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `<span class="card-tag">축복 제안 ${index}</span><div class="poem-content"></div>`;
    const content = card.querySelector('.poem-content');
    lines.forEach((text, i) => {
        const line = document.createElement('div');
        line.className = 'poem-line';
        content.appendChild(line);
        typeWriter(line, text, i * 600);
    });
    if (verse) {
        setTimeout(() => {
            const verseLine = document.createElement('div');
            verseLine.className = 'verse-line';
            verseLine.innerHTML = `<span class="verse-label">📜 추천 성구</span><p>${verse}</p>`;
            content.appendChild(verseLine);
        }, lines.length * 600 + 300);
    }
    const btnGroup = document.createElement('div');
    btnGroup.className = 'card-btn-group';
    const copyBtn = document.createElement('button');
    copyBtn.className = 'action-btn copy-btn';
    copyBtn.innerText = '메시지 복사';
    copyBtn.onclick = () => {
        const fullMessage = [...lines, "", verse].join('\n');
        navigator.clipboard.writeText(fullMessage).then(() => {
            const original = copyBtn.innerText;
            copyBtn.innerText = '✅ 완료';
            setTimeout(() => { copyBtn.innerText = original; }, 2000);
        });
    };
    const saveImgBtn = document.createElement('button');
    saveImgBtn.className = 'action-btn save-btn';
    saveImgBtn.innerText = '이미지 저장';
    saveImgBtn.onclick = () => saveCardAsImage(card, index);
    btnGroup.appendChild(copyBtn);
    btnGroup.appendChild(saveImgBtn);
    card.appendChild(btnGroup);
    return card;
}

function saveCardAsImage(cardElement, index) {
    const verseTextRaw = cardElement.dataset.verse;
    const poemLinesRaw = JSON.parse(cardElement.dataset.poem);

    if (verseTextRaw && !cardElement.querySelector('.verse-line')) {
        alert('축복 메시지가 완성될 때까지 잠시만 기다려주세요!');
        return;
    }

    const saveBtn = cardElement.querySelector('.save-btn');
    const originalText = saveBtn.innerText;
    saveBtn.innerText = '저장 중...';
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const btnGroup = cardElement.querySelector('.card-btn-group');
    const tag = cardElement.querySelector('.card-tag');
    
    btnGroup.style.visibility = 'hidden';
    tag.style.opacity = '0';

    const textColor = isDarkMode ? '#f0f0f0' : '#2c241e';
    const accentColor = isDarkMode ? '#ffd700' : '#a68b5c';

    html2canvas(cardElement, {
        scale: 2,
        backgroundColor: isDarkMode ? '#1e293b' : '#fdfbf7',
        useCORS: true,
        logging: false,
        onclone: (clonedDoc) => {
            const clonedCard = clonedDoc.querySelector(`.poem-card[data-index="${index}"]`);
            if (clonedCard) {
                clonedCard.style.animation = 'none';
                clonedCard.style.backdropFilter = 'none';
                clonedCard.style.webkitBackdropFilter = 'none';
                clonedCard.style.boxShadow = 'none';
                clonedCard.style.paddingBottom = '60px';

                const contentArea = clonedCard.querySelector('.poem-content');
                contentArea.innerHTML = ''; 

                poemLinesRaw.forEach(text => {
                    const line = document.createElement('div');
                    line.style.opacity = '1';
                    line.style.color = textColor;
                    line.style.marginBottom = '18px';
                    line.style.fontSize = '1.25rem';
                    line.style.lineHeight = '1.6';
                    
                    const firstChar = text[0];
                    const restText = text.substring(1);
                    line.innerHTML = `<span style="color:${accentColor}; font-weight:800; font-size:1.6rem; margin-right:4px;">${firstChar}</span>${restText}`;
                    contentArea.appendChild(line);
                });

                if (verseTextRaw) {
                    const vLine = document.createElement('div');
                    vLine.style.marginTop = '30px';
                    vLine.style.paddingTop = '20px';
                    vLine.style.borderTop = `1px dashed ${accentColor}`;
                    vLine.style.textAlign = 'center';
                    vLine.style.opacity = '1';
                    vLine.style.display = 'block';
                    vLine.innerHTML = `
                        <span style="color:${accentColor}; font-weight:700; font-size:0.8rem; display:inline-block; margin-bottom:10px;">📜 추천 성구</span>
                        <p style="color:${textColor}; font-size:1rem; font-style:italic; line-height:1.6; font-weight:600; margin:0;">${verseTextRaw}</p>
                    `;
                    contentArea.appendChild(vLine);
                }

                const footerContent = document.querySelector('.blessing-footer').innerText;
                const footerDiv = document.createElement('div');
                footerDiv.style.marginTop = '40px';
                footerDiv.style.paddingTop = '20px';
                footerDiv.style.borderTop = `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(166, 139, 92, 0.2)'}`;
                footerDiv.style.textAlign = 'center';
                footerDiv.style.color = accentColor;
                footerDiv.style.fontSize = '0.95rem';
                footerDiv.style.fontWeight = '700';
                footerDiv.style.lineHeight = '1.6';
                footerDiv.innerText = footerContent;
                clonedCard.appendChild(footerDiv);
            }
        }
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Blessing_Card_${index}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // --- 서버 저장소에 추가 ---
        const name = nameInput.value.trim() || '익명';
        saveSampleToServer(poemLinesRaw, name);
        
        btnGroup.style.visibility = 'visible';
        tag.style.opacity = '1';
        saveBtn.innerText = originalText;
    }).catch(err => {
        console.error(err);
        btnGroup.style.visibility = 'visible';
        tag.style.opacity = '1';
        saveBtn.innerText = originalText;
    });
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
                setTimeout(typing, 30);
            }
        }
        typing();
    }, delay);
}

function scrollToResult() {
    const y = resultArea.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
