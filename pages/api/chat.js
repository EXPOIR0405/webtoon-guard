import OpenAI from 'openai';

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '허용되지 않는 메소드입니다.' });
  }

  try {
    // API 키 확인
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API 키가 설정되지 않았습니다.');
    }

    const { messages } = req.body;
    
    // 메시지 형식 검증
    if (!messages || !Array.isArray(messages)) {
      throw new Error('올바르지 않은 메시지 형식입니다.');
    }

    // OpenAI API 메시지 형식으로 변환
    const formattedMessages = [
      {
        role: 'system',
        content: '당신은 웹툰 저작권 전문 변호사입니다. 다음 지침을 따라주세요:\n' +
                '1. 저작권법과 관련 판례를 기반으로 답변해주세요.\n' +
                '2. 불확실한 내용은 "법률 전문가의 자문이 필요합니다"라고 답변하세요.\n' +
                '3. 답변은 항상 단계별로 구조화해서 제공하세요.\n' +
                '4. 가능한 경우 관련 법조항을 인용해주세요.'
      }
    ];

    // 사용자 메시지 변환
    messages.forEach(msg => {
      if (msg.sender === 'user' || msg.role === 'user') {
        formattedMessages.push({
          role: 'user',
          content: msg.text || msg.content
        });
      } else if (msg.sender === 'bot' || msg.role === 'assistant') {
        formattedMessages.push({
          role: 'assistant',
          content: msg.text || msg.content
        });
      }
    });

    console.log('Formatted Messages:', formattedMessages); // 디버깅용

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // 응답 확인
    if (!completion.choices[0].message) {
      throw new Error('OpenAI API 응답이 올바르지 않습니다.');
    }

    // 성공 응답
    res.status(200).json({
      message: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // 구체적인 에러 메시지 반환
    res.status(500).json({
      error: '서버 오류가 발생했습니다.',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}