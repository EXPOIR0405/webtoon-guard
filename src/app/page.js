import OneStopService from '@/components/OneStopService/OnestopserviceClient'

export const metadata = {
  title: '그림지기 | 웹툰 작가를 위한 원스톱 법률 지원 서비스',
  description: '웹툰 작가님들의 권리 보호를 위한 전문 법률 정보 플랫폼입니다. 저작권 침해 대응부터 계약서 검토까지, 신뢰할 수 있는 법률 전문기관을 연결해드립니다.',
  keywords: '웹툰 법률, 저작권 침해, 웹툰 작가 지원, 계약서 검토, 법률 상담, 그림지기, 법률 정보',
  openGraph: {
    title: '그림지기 | 웹툰 작가를 위한 원스톱 법률 지원 서비스',
    description: '웹툰 작가님들의 권리 보호를 위한 전문 법률 정보 플랫폼입니다. 저작권 침해 대응부터 계약서 검토까지, 신뢰할 수 있는 법률 전문기관을 연결해드립니다.',
    type: 'website',
    images: [
      {
        url: '/pasu2.png',
        width: 1200,
        height: 630,
        alt: '그림지기 원스톱 서비스',
      },
    ],
  }
};

export default function Home() {
  return <OneStopService />
}