// src/pages/api/crawl.js
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url, userCookies } = req.body; // 사용자가 제공한 URL과 쿠키 정보

    try {
      const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();

      // 사용자가 제공한 쿠키 설정
      await page.setCookie(...userCookies);

      await page.goto(url, { waitUntil: 'domcontentloaded' });

      await page.waitForSelector('.wr-good', { timeout: 10000 });

      const recommendationCounts = await page.evaluate(() => {
        const countElements = document.querySelectorAll('.wr-good');
        return Array.from(countElements).map(el => parseInt(el.innerText.trim(), 10) || 0);
      });

      await browser.close();

      const totalRecommendations = recommendationCounts.reduce((acc, count) => acc + count, 0);

      res.status(200).json({ recommendationCount: totalRecommendations });
    } catch (error) {
      console.error('크롤링 중 오류 발생:', error);
      res.status(500).json({ error: '크롤링에 실패했습니다.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}