# 불법웹툰대응센터 (Webtoon Guard)

웹툰 작가를 위한 피해사실 정리 및 법적 대응 지원 도구입니다.

## 프로젝트 소개
불법웹툰대응센터는 웹툰/웹소설 저작권 보호와 불법 유통 근절을 위한 비영리 프로젝트입니다. 경기도 갭이어 프로젝트 프로젝트 플러스+의 지원을 받아 제작되었습니다.

### 목적
웹툰 불법 복제는 작가들의 창작 의욕을 저하시키고 웹툰 산업의 건전한 발전을 저해하는 심각한 문제입니다. 법적 대응을 위해서는 구체적인 피해 사실 증명이 필요한데, 이는 개별 작가들이 정리하기에 쉽지 않은 작업입니다.

본 프로젝트는 작가들이 받은 피해를 보다 쉽게 정량화하고 문서화할 수 있도록 지원하여, 실질적인 법적 대응이 가능하도록 돕는 것을 목적으로 합니다.

### 의의
- 불법 복제로 인한 피해 규모의 가시화
- 법적 대응을 위한 기초 자료 제공
- 웹툰 작가들의 권리 보호 지원

## 주요 기능
- 📋 불법 운영자의 명예의 전당(?)
- ❓ 맞춤형 법률 정보 제공
- 💬 법률 상담 서비스
- 피해사실 정리서 발급

### 피해 산정 및 문서화
- 불법 사이트의 조회수/추천수 기반 피해액 산정
- 한 화당 유료 웹툰 개별 가격 계산 기능 지원
- 피해사실 정리서 PDF 자동 생성
- 다양한 법적 대응 용도별 문서 생성 지원

### AI 법률 상담 챗봇
- OpenAI GPT 기반의 지능형 법률 상담 서비스
- 웹툰 저작권 관련 즉각적인 법률 자문 제공
- 자주 묻는 질문에 대한 빠른 응답
- 실시간 타이핑 효과로 자연스러운 대화 경험
- 사용자 친화적인 인터페이스

## 챗봇 기능 상세

### 주요 상담 가능 항목
- 저작권 등록 절차 안내
- 불법 복제 발견 시 대응 방법
- 해외 서비스 침해 대응 방안
- 팬아트 가이드라인 설명
- 법적 대응 절차 안내

### UI/UX 특징
- 실시간 타이핑 효과로 자연스러운 응답 표시
- 로딩 중 애니메이션으로 대기 시간 시각화
- 모바일/데스크톱 반응형 디자인
- 직관적인 채팅 인터페이스
- 자주 묻는 질문 빠른 접근 기능

## 페이지 구성
- **메인 페이지**: 서비스 소개 및 주요 기능 안내
- **불법 운영자 명단**: 주요 불법 사이트 운영자 정보 및 현황
- **자주 묻는 질문**: 저작권 침해 대응 관련 법률 정보
- **피해 신고**: 불법 사이트 신고 시스템 (개발중)
- **법률 상담**: ai 상담 서비스

## 기술 스택

### Frontend
- Next.js 13
- React
- Tailwind CSS
- html2canvas
- jsPDF

### AI/챗봇
- OpenAI GPT-3.5 Turbo
- React Hooks for 타이핑 효과
- Custom Animation Components

### 개발 도구
- Git
- GitHub Actions
- VS Code
- npm

## 최근 업데이트

### 2024.11.15 - 증거자료 기능 추가
- 다중 이미지 업로드 지원
- 각 증거자료별 상세 설명 입력 기능
- PDF 출력 시 증거자료 자동 페이지 분할
- 증거자료 섹션 별도 처리
- 피해내용 서술 방식 개선


### 2024.11.14 - 챗봇 기능 추가
- AI 기반 법률 상담 챗봇 구현
- 실시간 타이핑 효과 추가
- 로딩 애니메이션 개선
- 반응형 UI 최적화
- 🐛 채팅봇 한글 타이핑 효과 버그 수정
 - 한글 메시지가 부분적으로 누락되거나 깨지는 현상 수정
 - 타이핑 효과 안정성 개선
- 네비게이션 바 모바일 대응 (햄버거 메뉴)
- 상단 네비게이션 바 고정
- 푸터 디자인 개선
- FAQ 페이지 추가
- 반응형 디자인 적용


## 사용 방법

본 서비스는 웹툰 작가 및 관계자분들을 위한 것으로, 별도의 설치 없이 웹 브라우저에서 바로 사용하실 수 있습니다.

1. 피해자 정보 입력
   - 이름, 생년월일, 연락처 등 기본 정보 입력
   - 피해 입은 웹툰 작품명 입력

2. 피해 현황 입력
   - 불법 사이트명 입력
   - 확인된 조회수 또는 추천수 입력
   - 회차당 정상 구매 가격 입력
   - 회차당 구매 가격 산정을 위한 계산 제공

3. 피해액 산정
   - 입력된 정보를 바탕으로 예상 피해액 자동 계산

4. 문서 생성
   - 용도에 맞는 문서 양식 선택
   - PDF 형태의 피해사실 정리서 자동 생성

## 스크린샷
![메인 화면](public/main.png)
![문서 생성 예시](public/document.png)
![챗봇 예시](public/chatbot.png)

## 향후 개발 계획

- 챗봇 응답 품질 개선
- 커뮤니티 기능 개발
- 다양한 문서 템플릿 추가
- 피해 사례 데이터베이스 구축 (작가 동의 하에)
- 통계 분석 기능 추가

## 설치 방법 (개발자용)

bash

git clone https://github.com/your-username/webtoon-guard.git

cd webtoon-guard

npm install

npm run dev


## 환경 변수 설정

프로젝트 실행을 위해 다음 환경 변수가 필요합니다:

```env
OPENAI_API_KEY=your_api_key_here
```

.env.local 파일을 프로젝트 루트에 생성하고 위 변수를 설정해주세요.



## 라이선스

MIT License

## 기여하기

버그를 발견하시거나 새로운 기능을 제안하고 싶으시다면 Issue를 생성해주세요.
Pull Request도 환영합니다!

## 연락처

프로젝트에 대한 문의사항이 있으시다면 [이슈](https://github.com/EXPOIR0405/webtoon-guard/issues)를 생성해주세요.



## 감사의 말
김동연 경기도지사님께 감사의 말씀을 전합니다. 🙏