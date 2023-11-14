import "../CSS/Contest.css";

const Contest2 = () => {
  return (
    <div>
      <h1>ICT 융합 프로젝트 공모전</h1>
      {/* <img src="/image/contest2.png" alt="react" /> */}
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>주제: 
전자, 로봇, 인공지능, 기계 분야 중 자유주제</li>
          <li>심사기준:
창의성, 실용성, 작품성, 기술성, 작품 완성도, 보고서 완성도 평가</li>
          <li>참가방법: 
응모원고: A4 10~30매 내외 DOC, HWP 파일
(회로도, 소스코드 외 제작 과정 일체) + 참가 신청서</li>
          <li>참가대상: 
국내·외 대학생, 대학원생 및 일반인 누구나 응모 가능 (팀 응모 가능)</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest2;