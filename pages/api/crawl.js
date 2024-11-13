// src/pages/api/crawl.js
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let browser;
  try {
    const { webtoonUrl } = req.body;  // URL 전체를 받도록 수정
    console.log('크롤링 시도:', webtoonUrl);

    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]
    });
    
    const page = await browser.newPage();
    
    // 기본적인 차단 우회 설정
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ko-KR,ko;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    });

    // 페이지 로드
    await page.goto(webtoonUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // 페이지의 HTML 구조 확인
    const pageContent = await page.content();
    console.log('페이지 내용:', pageContent.substring(0, 500)); // 처음 500자만 로그

    // 페이지의 모든 텍스트 노드 확인
    const textContent = await page.evaluate(() => {
      return {
        title: document.title,
        bodyText: document.body.innerText,
        // 모든 숫자를 포함하는 요소 찾기
        numbers: Array.from(document.querySelectorAll('*'))
          .filter(el => el.innerText && /\d+/.test(el.innerText))
          .map(el => ({
            text: el.innerText.trim(),
            className: el.className,
            id: el.id,
            tagName: el.tagName
          }))
      };
    });

    console.log('페이지 정보:', textContent);

    // 일단 임시로 고정된 값 반환
    res.status(200).json({ 
      viewCount: 1000,
      message: '페이지 분석 완료',
      debug: {
        title: textContent.title,
        numbersFound: textContent.numbers.length
      }
    });

  } catch (error) {
    console.error('크롤링 에러:', error);
    res.status(500).json({ 
      error: '크롤링 실패',
      message: error.message,
      stack: error.stack
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}