'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    const [showScroll, setShowScroll] = useState(true);

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>그림지기</h1>
          <p className={styles.slogan}>
            당신의 작품과 권리를 지키는 든든한 파수꾼
          </p>
          
          <div className={styles.serviceGrid}>
            <Link href="/support" className={styles.serviceCard}>
              <div>
                <h3>🏛️ 원스톱 종합 서비스 지원 안내</h3>
                <p>어떤 도움이 필요할지 몰라서 한번에 모아두었습니다. 
                  각 분야 전문 기관을 한눈에 확인하고 도움을 받을 수 있습니다.</p>
              </div>
            </Link>
            
            <Link href="/situations" className={styles.serviceCard}>
              <div>
                <h3>📝 상황별 지원 정보</h3>
                <p>다양한 상황에 맞게 맞춤형 지원 정보를 공유해드립니다</p>
              </div>
            </Link>
            
            <Link href="/faq" className={styles.serviceCard}>
              <div>
                <h3>💡 상담 정보 공유</h3>
                <p>창작자로서 겪어야 되었던 여러가지 질문들! <br/>
                  자주 묻는 질문을 통해 확인해보세요.</p>
              </div>
            </Link>
          </div>
  
          <div className={styles.bottomSection}>
            <Link href="/" className={styles.ctaButton}>
              시작하기
            </Link>
            
            {showScroll && (
              <Link href="/contact" className={styles.scrollButton}>
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
    );
  }