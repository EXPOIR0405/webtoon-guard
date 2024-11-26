import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { errorType, errorDescription, userEmail } = await req.json();

    // 이메일 전송을 위한 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Gmail 사용
      auth: {
        user: process.env.EMAIL_USER,     // 보내는 사람 이메일
        pass: process.env.EMAIL_PASSWORD  // 앱 비밀번호
      }
    });

    // 이메일 옵션 설정
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,  // 관리자(받는 사람) 이메일
      subject: `[오류 신고] ${errorType}`,
      html: `
        <h2>오류 신고가 접수되었습니다</h2>
        <p><strong>오류 유형:</strong> ${errorType}</p>
        <p><strong>사용자 이메일:</strong> ${userEmail}</p>
        <p><strong>상세 내용:</strong></p>
        <p>${errorDescription}</p>
      `
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: '이메일이 성공적으로 전송되었습니다.' 
    });

  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    );
  }
}