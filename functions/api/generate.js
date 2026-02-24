export async function onRequestPost(context) {
  const { request, env } = context;

  const API_KEY = env.GEMINI_API_KEY;
  
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: "API 키가 서버에 설정되지 않았습니다." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { name } = await request.json();
    
    // 가장 최신 모델 gemini-2.5-flash 적용
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `당신은 기독교적인 따뜻한 감성을 가진 전문 시인이자 축복의 메신저입니다. 
성함 "${name}"을 바탕으로, 각 글자로 시작하는 ${name.length}행시 축복 메시지를 3가지 다른 버전으로 작성해 주세요.

[작성 원칙]
1. 각 행의 첫 글자는 반드시 이름의 각 글자로 시작해야 합니다. (두음법칙 허용)
2. 주제: 하나님의 사랑, 평강, 소망, 은혜, 성령의 열매, 삶의 축복.
3. 문체: 매우 정중하고 따뜻하며, 시적인 표현을 사용한 존댓말.
4. 마무리: 각 행시의 마지막 행에는 이름과 상관없이 "오늘을 향한 짧은 축복 메시지"를 한 줄 더 추가하세요.

[출력 형식]
반드시 아래와 같은 JSON 배열 형식으로만 응답하세요. 다른 설명은 절대 하지 마세요.
[
  ["1행", "2행", "마지막축복"],
  ["..."],
  ["..."]
]`
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    const text = data.candidates[0].content.parts[0].text;
    
    return new Response(text, {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "서버 내부 오류가 발생했습니다." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
