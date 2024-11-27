'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    const [showScroll, setShowScroll] = useState(true);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(currentActive => currentActive === index ? null : index);
    };

    return (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>그림지기</h1>
            <p className={styles.slogan}>
              당신의 작품과 권리를 지키는 든든한 파수꾼<br/>
            </p>
            
            <div className={styles.serviceGrid}>
              <Link href="/" className={styles.serviceCard}>
                <div>
                  <h3>🏛️ 원스톱 종합 서비스 지원 안내</h3>
                  <p>여기저기 흩어진 정보들 다 모아왔어요.<br/>
                    </p>
                </div>
              </Link>
              
              <Link href="/LegalSupport" className={styles.serviceCard}>
                <div>
                  <h3>📝 법률 상담 지원 정보</h3>
                  <p>"지금 당장 법률 상담이 필요해요!"<br/>
                    걱정마세요, 어떤 내용의 법률 정보가 필요한지 모아두었어요</p>
                </div>
              </Link>
              
              <Link href="/legal" className={styles.serviceCard}>
                <div>
                  <h3>💡 자주 묻는 질문 정보 공유</h3>
                  <p>작가들이 자주 묻는 질문 모음집!<br/>
                    </p>
                </div>
              </Link>
            </div>
    
            <div className={styles.bottomSection}>
              <Link href="/" className={styles.ctaButton}>
                시작하기
              </Link>
              
              {showScroll && (
                <Link href="/inquiry" className={styles.scrollButton}>
                  <div className={styles.scrollContainer}>
                    <button 
                      className={styles.closeButton}
                      onClick={(e) => {
                        e.preventDefault(); // Link 이동 방지
                        setShowScroll(false);
                      }}
                    >
                      ✕
                    </button>
                    <Image
                      src="/parchment.png"
                      alt="양피지 배경"
                      width={350}
                      height={300}
                      className={styles.scrollImage}
                    />
                    <div className={styles.scrollContent}>
                      <h4>숲지기에게 전언 남기기</h4>
                      <p>당신의 목소리가 <br/>
                      그림지기를 더 풍요롭게 합니다<br/>새로운 의견을 들려주세요</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className={styles.introSection}>
          <div className={styles.introContent}>
            <div className={styles.missionStatement}>
              <h2>왜 그림지기를 만들었나요?</h2>
              
              <div className={styles.quotesContainer}>
                <div className={styles.quoteLeft}>
                  "내 작품이 불법 유통되고 있대요..."
                </div>
                <div className={styles.quoteRight}>
                  "어떻게 대응해야 할지 모르겠어요..."
                </div>
                <div className={styles.quoteLeft}>
                  "혼자서는 너무 막막해요..."
                </div>
                <div className={styles.quoteRight}>
                  "누가 좀 도와주면 안되나요? 😭"
                </div>
              </div>

        
            </div>

            <div className={styles.purposeGrid}>
              <div className={styles.purposeCard}>
                <h3>🛡️ 든든한 파수꾼</h3>
                <p>더이상 막막한 정보 찾기는 그만!.<br/>
                N이버 지식인 남부럽지 않을 만큼 필요한 정보만 확실히!<br/>
                </p>
              </div>

              <div className={styles.purposeCard}>
                <h3>🤝 믿음직한 동반자</h3>
                <p>창작에만 집중할 수 있도록<br/>
                작가님들의 지원 홍보에는 그림지기가 함께합니다!</p>
              </div>
            </div>
          </div>
        </div>

        {/* 세번째 섹션 */}

        {/* <div className={styles.teamSection}>
          <div className={styles.teamContent}>
            <h2>그림지기를 만든 사람들</h2>
            
            <div className={styles.profileContainer}>
              <div className={styles.profileImage}>
                <Image
                  src="/student.png"
                  alt="개발자 프로필"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className={styles.storyBox}>
              <p className={styles.developerQuote}>
                "안녕하세요, 개발자입니다 👋<br/>
                네... 혼자예요... (눈물)<br/>
                하지만 웹툰에 대해 생각하는게<br/>
                제 인생을 곱씹어보는 것보다 의미있었어요"
              </p>
             <p className={styles.smallNote}>
                * 실제 개발자의 독백입니다
            </p>
            </div>
          </div>
        </div> */}
      </>
    );
}