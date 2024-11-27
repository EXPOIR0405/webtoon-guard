import OnestopserviceClient from './OnestopserviceClient'

export const metadata = {
  title: '그림지기 | 웹툰 작가를 위한 원스톱 법률 지원 서비스',
  description: '웹툰 작가를 위한 저작권 침해 대응, 법률 상담, 계약서 검토까지 한번에 해결하세요. 24시간 AI 상담으로 빠른 답변을 받아보세요.',
  keywords: '웹툰 법률, 저작권 침해, 웹툰 작가 지원, 계약서 검토, 법률 상담, 그림지기, AI 상담',
  openGraph: {
    title: '그림지기 | 웹툰 작가를 위한 원스톱 법률 지원 서비스',
    description: '웹툰 작가를 위한 저작권 침해 대응, 법률 상담, 계약서 검토까지 한번에 해결하세요.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '그림지기 원스톱 서비스',
      },
    ],
  }
};

export default function Onestopservice() {
  return <OnestopserviceClient />
}