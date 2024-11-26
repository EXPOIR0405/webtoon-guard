'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function ErrorForm() {
  const [formData, setFormData] = useState({
    errorType: '',
    errorDescription: '',
    userEmail: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('전송에 실패했습니다.');
      }

      setSubmitStatus('success');
      setFormData({
        errorType: '',
        errorDescription: '',
        userEmail: ''
      });
      alert('의견이 성공적으로 접수되었습니다.');

    } catch (error) {
      console.error('전송 오류:', error);
      setSubmitStatus('error');
      alert('접수에 실패했습니다. 다시 시도해주세요.');

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>콘텐츠 제안 / 오류 신고</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="errorType">제안 / 오류 유형</label>
          <select 
            id="errorType" 
            value={formData.errorType}
            onChange={(e) => setFormData({...formData, errorType: e.target.value})}
            required
          >
            <option value="">유형을 선택해주세요</option>
            <option value="content">콘텐츠 오류</option>
            <option value="system">시스템 오류</option>
            <option value="suggestion">콘텐츠 제안</option>
            <option value="other">기타</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="errorDescription">상세 내용</label>
          <textarea 
            id="errorDescription"
            value={formData.errorDescription}
            onChange={(e) => setFormData({...formData, errorDescription: e.target.value})}
            placeholder="발생한 문제(or 제안)에 대해 자세히 설명해주세요."
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="userEmail">회신받으실 이메일</label>
          <input 
            type="email" 
            id="userEmail"
            value={formData.userEmail}
            onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
            placeholder="example@email.com"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? '전송 중...' : '제출하기'}
        </button>

        {submitStatus === 'success' && (
          <p className={styles.successMessage}>
            성공적으로 전송되었습니다. 메일 확인 후 답변 드리겠습니다.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className={styles.errorMessage}>
            전송에 실패했습니다. 다시 시도해주세요.
          </p>
        )}
      </form>
    </div>
  );
}