export default function CopyrightGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">저작권 안내</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">저작권 보호 정책</h2>
        <p className="mb-4">
          본 서비스는 저작권법을 준수하며, 모든 콘텐츠의 권리는 해당 저작권자에게 있습니다.
        </p>
        <p className="mb-4">
          무단 복제, 배포, 전송 등의 행위는 관련 법령에 의해 처벌될 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">저작권 침해 신고</h2>
        <p className="mb-4">
          저작권 침해 사항을 발견하신 경우, 문의하기 페이지를 통해 신고해 주시기 바랍니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">이용 안내</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">콘텐츠 이용 시 출처를 명확히 표시해 주세요.</li>
          <li className="mb-2">상업적 이용의 경우 별도의 허가가 필요합니다.</li>
          <li className="mb-2">문의사항이 있으시면 언제든 연락주시기 바랍니다.</li>
        </ul>
      </section>
    </div>
  );
}
