import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const politician = searchParams.get('name');

    if (!politician) {
      return NextResponse.json(
        { error: '정치인 이름이 필요합니다.' },
        { status: 400 }
      );
    }

    const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
    const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

    // 연합뉴스 포함, 더 단순한 검색 쿼리 사용
    const searchQuery = `${politician} 탄핵 발언`;

    try {
      const response = await fetch(
        `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(searchQuery)}&display=100&sort=date`,
        {
          headers: {
            'X-Naver-Client-Id': NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('네이버 API 오류 응답:', errorText);
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      console.log('검색된 전체 결과 수:', data.items.length);

      // 결과 필터링 및 정제
      const processedQuotes = data.items
        .map(item => {
          const title = item.title
            .replace(/<[^>]*>/g, '')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&amp;/g, '&')
            .replace(/\[.*?\]/g, '')
            .replace(/^\S+\s+/, '');

          // 정치인 이름이 포함된 제목만 선택
          if (!title.includes(politician)) return null;

          // 따옴표로 둘러싸인 내용 추출 시도
          const quotedContent = title.match(/["""'']([^"""'']+)["""'']/);
          
          return {
            quote: quotedContent ? quotedContent[1] : title,
            date: new Date(item.pubDate).toLocaleDateString('ko-KR'),
            source: new URL(item.originallink).hostname.replace('www.', ''),
            url: item.link,
            priority: quotedContent ? 1 : 2
          };
        })
        .filter(Boolean)
        .sort((a, b) => {
          if (a.priority !== b.priority) return a.priority - b.priority;
          return new Date(b.date) - new Date(a.date);
        })
        .slice(0, 5)
        .map(({ quote, date, source, url }) => ({ quote, date, source, url }));

      return NextResponse.json({
        name: politician,
        quotes: processedQuotes
      });

    } catch (error) {
      console.error(`검색 중 오류:`, error);
      throw error;
    }

  } catch (error) {
    console.error('API 처리 중 상세 오류:', error);
    return NextResponse.json(
      { error: '정치인 발언을 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}