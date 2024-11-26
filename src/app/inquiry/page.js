import ErrorForm from '@/components/ErrorForm';
import styles from './page.module.css';

export default function InquiryPage() {
  return (
    <main className={styles.container}>
      <div className={styles.noticeSection}>
        <h2>서비스 안내</h2>
        <p>현재 이 페이지는 지속적으로 업데이트되고 있습니다. 
           여러분의 소중한 의견을 통해 더 나은 서비스를 만들어가고 있습니다.</p>
        <p>필요한 기능이나 개선사항이 있으시다면 아래 양식을 통해 알려주세요.</p>
      </div>
      <ErrorForm />
    </main>
  );
}