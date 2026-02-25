export async function onRequestGet(context) {
    const { env } = context;
    // SAMPLES라는 이름의 KV 바인딩이 필요합니다.
    const samples = await env.SAMPLES.get('recent_blessings', { type: 'json' }) || [];
    return new Response(JSON.stringify(samples), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function onRequestPost(context) {
    const { request, env } = context;
    const newSample = await request.json(); // { id, name, poem, reactions }

    // 기존 데이터 가져오기
    let samples = await env.SAMPLES.get('recent_blessings', { type: 'json' }) || [];

    // 중복 체크 (좋아요 업데이트인 경우)
    const existingIndex = samples.findIndex(s => s.id === newSample.id);
    
    if (existingIndex !== -1) {
        // 기존 데이터 업데이트 (좋아요 등)
        samples[existingIndex] = newSample;
    } else {
        // 신규 데이터 추가
        newSample.id = newSample.id || Date.now().toString();
        samples.unshift(newSample);
        // 최근 10개만 유지
        samples = samples.slice(0, 10);
    }

    // KV에 다시 저장
    await env.SAMPLES.put('recent_blessings', JSON.stringify(samples));

    return new Response(JSON.stringify({ success: true, data: samples }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
