import OnestopserviceClient from './OnestopserviceClient'

export const metadata = {
  title: '그림지기 | 웹툰 작가를 위한 원합 법률 지원 플랫폼',
  description: '웹툰 작가를 위한 저작권 침해 신고, 계약서 검토, 법률 자문까지 한번에 해결하세요. 예비 창작가부터 프리랜서까지, 상황별 맞춤형 법률 정보와 전문가 상담을 제공합니다.',
  keywords: [
    '웹툰 법률, 저작권 침해, 계약서 검토, 법률 자문',
    '웹툰 작가 지원, 예비 창작가, 프리랜서',
    '표준계약서, 분쟁 조정, 권리침해 신고',
    '법률 상담, 온라인 상담, 대면 상담',
    '창작자 권리, 저작권 보호, 그림지기'
  ].join(', '),
  openGraph: {
    title: '그림지기 | 웹툰 작가를 위한 종합 법률 지원 플랫폼',
    description: '저작권 침해 신고부터 계약서 검토, 분쟁 조정까지 웹툰 작가에게 필요한 모든 법률 서비스를 제공합니다. 예비 창작가, 프리랜서 맞춤 정보와 전문가 상담을 한 곳에서 만나보세요.',
    type: 'website',
    images: [
      {
        url: '/pasu2.png',
        width: 1200,
        height: 630,
        alt: '그림지기 - 웹툰 작가 지원 종합 서비스',
      },
    ],
    siteName: '그림지기',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  twitter: {
    card: 'summary_large_image',
    title: '그림지기 | 웹툰 작가를 위한 종합 법률 지원 플랫폼',
    description: '저작권 침해 신고부터 계약서 검토, 분쟁 조정까지 웹툰 작가에게 필요한 모든 법률 서비스를 제공합니다.',
    images: ['/pasu2.png'],
  }
};

export default function Onestopservice() {
  return <OnestopserviceClient />
}