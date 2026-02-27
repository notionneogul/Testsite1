// Last updated: 2026-02-27 14:05 KST
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
    const origin = new URL(request.url).origin;
    
    // Using gemini-2.0-flash for high performance and improved quality
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": origin
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `신앙인을 위한 ${name.length}행시(이름: ${name})를 3가지 버전으로 작성해줘. 

[중요 스타일 조건]
- 각 줄은 반드시 이름의 각 글자로 시작할 것.
- 교회 주보나 설교문처럼 딱딱하게 쓰지 말 것.
- 형식적인 기도문 표현 절대 금지.
- 중학생도 바로 이해할 수 있는 쉬운 단어 사용.
- 한 사람이 다른 사람에게 조용히 건네는 말처럼 자연스럽고 짧은 문장으로 작성.
- 전체 메시지는 가볍지만 따뜻하게, 인스타그램 감성 사진의 캡션처럼 트렌디하고 다정한 톤.

[추가 기능]
- 각 N행시가 끝난 뒤, 그 메시지의 주제와 어울리는 짧은 '성경 구절'을 하나씩 추천해줘.
- 성경 구절은 반드시 "구절 내용 (책이름 장:절)" 형식으로 작성할 것.

[출력 형식]
반드시 아래와 같은 순수 JSON 배열 형식으로만 응답해줘. 다른 설명은 생략해.
[
  {
    "poem": ["1행", "2행", "..."],
    "verse": "성경 구절 내용 (장:절)"
  },
  ... (총 3개)
]`
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      const errorMessage = data.error?.message || "Google API 호출 중 오류가 발생했습니다.";
      return new Response(JSON.stringify({ 
        error: `[Google API Error ${response.status}] ${errorMessage}`,
        status: response.status 
      }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
      return new Response(JSON.stringify({ error: "응답을 생성하지 못했습니다. 다시 시도해주세요." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const text = data.candidates[0].content.parts[0].text;
    
    return new Response(JSON.stringify({ result: text }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "서버 내부 오류가 발생했습니다: " + error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
