import { NextResponse } from 'next/server';

export async function GET() {
  const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
  const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

  if (!NAVER_CLIENT_ID || !NAVER_CLIENT_SECRET) {
    console.error('네이버 API 키가 설정되지 않았습니다.');
    return NextResponse.json({ error: 'API 설정이 필요합니다.' }, { status: 500 });
  }

  try {
    const impeachmentResponse = await fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent('탄핵 헌법재판소')}&display=10&sort=date`,
      {
        headers: {
          'X-Naver-Client-Id': NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        },
      }
    );

    const presidentResponse = await fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent('윤석열 대통령')}&display=10&sort=date`,
      {
        headers: {
          'X-Naver-Client-Id': NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        },
      }
    );

    if (!impeachmentResponse.ok || !presidentResponse.ok) {
      throw new Error('네이버 API 응답 오류');
    }

    const impeachmentData = await impeachmentResponse.json();
    const presidentData = await presidentResponse.json();

    const getPublisher = (url) => {
      try {
        const domain = new URL(url).hostname;
        const mediaMap = {
          'www.mk.co.kr': '매일경제',
          'www.seoul.co.kr': '서울신문',
          'news.sbs.co.kr': 'SBS',
          'www.imaeil.com': '매일신문',
          'www.natv.go.kr': '국회방송',
          'www.ikbc.co.kr': 'KBC광주방송',
          'www.inews365.com': '인터넷신문',
          'www.hani.co.kr': '한겨레',
          'www.ebn.co.kr': '이비엔',
          'www.joseilbo.com': '조세일보',
          'www.xportsnews.com': '엑스포츠뉴스',
          'www.edaily.co.kr': '이데일리',
          'www.news1.kr': '뉴스1',
          // 필요한 만큼 더 추가
        };
        return mediaMap[domain] || domain.replace('www.', '').split('.')[0].toUpperCase();
      } catch {
        return '출처 미상';
      }
    };

    const cleanText = (text) => {
      if (!text) return '';
      return text
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/<[^>]*>/g, '')
        .replace(/\&\#34;/g, '"')
        .replace(/\&\#39;/g, "'");
    };

    const formatNews = (items) => items.map(item => ({
      date: new Date(item.pubDate).toLocaleDateString('ko-KR'),
      title: cleanText(item.title),
      source: getPublisher(item.originallink),
      url: item.link
    }));

    return NextResponse.json({
      impeachment: formatNews(impeachmentData.items),
      president: formatNews(presidentData.items)
    });

  } catch (error) {
    console.error('뉴스 데이터 처리 중 오류:', error);
    return NextResponse.json(
      { error: '뉴스를 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}