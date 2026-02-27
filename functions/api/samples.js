export async function onRequestGet(context) {
    const { env } = context;
    if (!env.SAMPLES) {
        return new Response(JSON.stringify({ error: "KV binding 'SAMPLES' is missing." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // 날짜 기반 리셋 로직
    const today = new Date().toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' });
    const storedData = await env.SAMPLES.get('blessings_container', { type: 'json' }) || { date: today, samples: [] };

    if (storedData.date !== today) {
        // 날짜가 바뀌었으면 빈 데이터 반환
        return new Response(JSON.stringify([]), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify(storedData.samples), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function onRequestPost(context) {
    const { request, env } = context;
    if (!env.SAMPLES) {
        return new Response(JSON.stringify({ error: "KV binding 'SAMPLES' is missing." }), { status: 500 });
    }
    
    const newSample = await request.json();
    const today = new Date().toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' });
    
    // 기존 데이터 가져오기
    let storedData = await env.SAMPLES.get('blessings_container', { type: 'json' }) || { date: today, samples: [] };

    // 날짜가 바뀌었으면 데이터 초기화
    if (storedData.date !== today) {
        storedData = { date: today, samples: [] };
    }

    let samples = storedData.samples;

    // 중복 체크 (좋아요 업데이트인 경우)
    const existingIndex = samples.findIndex(s => s.id === newSample.id);
    
    if (existingIndex !== -1) {
        samples[existingIndex] = newSample;
    } else {
        newSample.id = newSample.id || Date.now().toString();
        samples.unshift(newSample);
        samples = samples.slice(0, 10);
    }

    // KV에 날짜와 함께 저장
    await env.SAMPLES.put('blessings_container', JSON.stringify({
        date: today,
        samples: samples
    }));

    return new Response(JSON.stringify({ success: true, data: samples }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
