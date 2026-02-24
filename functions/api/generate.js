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
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `신앙인을 위한 ${name.length}행시(이름: ${name})를 3가지 버전으로 작성해줘.

[중요 스타일 조건]
- 각 줄은 반드시 이름의 각 글자로 시작할 것.
- 교회 주보나 설교문처럼 딱딱하게 쓰지 말 것.
- "채워지시기를, 감싸주시옵소서, 축복합니다, 되시기를 바랍니다" 같은 형식적인 기도문 표현 절대 금지.
- 어려운 신학 용어나 추상적인 표현(풍성한 은혜, 놀라운 역사 등) 자제.
- 중학생도 바로 이해할 수 있는 쉬운 단어 사용.
- 한 사람이 다른 사람에게 조용히 건네는 말처럼 자연스럽게.
- 문장은 짧고 분명하게 작성할 것.
- 같은 문장 끝맺음 반복하지 말 것.
- 억지로 만든 단어(존재하지 않는 합성어) 절대 금지.
- 전체 메시지는 가볍지만 따뜻하게, 카카오톡으로 바로 보내도 어색하지 않은 톤으로 작성할 것.

[출력 형식]
반드시 아래와 같은 순수 JSON 배열 형식으로만 응답해줘. 다른 설명은 생략해.
[
  ["1행", "2행", "..."],
  ["1행", "2행", "..."],
  ["1행", "2행", "..."]
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
