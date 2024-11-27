import styles from './not-found.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.magicCircle}>
          <h1 className={styles.title}>
            4<span className={styles.magicZero}>0</span>4
          </h1>
        </div>
        <div className={styles.messageScroll}>
          <p className={styles.description}>
            앗! 페이지가 숲 속 어딘가에서 길을 잃었나 봐요..
            <br />
            숲지기와 고양이들이 찾아보고 있답니다
            <br />
            <span className={styles.magicText}>✨ 잠시만 기다려주세요 ✨</span>
          </p>
        </div>
        <Link href="/" className={styles.homeButton}>
          <span className={styles.buttonText}>홈으로 돌아가기</span>
          <span className={styles.buttonIcon}>🌿</span>
        </Link>
      </div>
      {/* <div className={styles.imageContainer}>
        <div className={styles.magicParticles}></div>
        <div className={styles.image} />
      </div> */}
    </div>
  );
}