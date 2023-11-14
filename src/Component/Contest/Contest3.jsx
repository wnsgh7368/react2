import "../CSS/Contest.css";

const Contest3 = () => {
  return (
    <div>
      <h1>마이데이터 아이디어 공모전</h1>
      {/* <img src="/image/contest3.png" alt="react" /> */}
      <fieldset>
        <legend>공모전 개요</legend>
        <ul>
          <li>참가자격: 국민 누구나 (개인 또는 3인 이내 팀)</li>
          <li>공모주제: 새로운 발견, 마이데이터의 사각지대를 찾아라! - 개인정보 전송요구권 도입으로 기대되는 미개방 분야 마이데이터 아이디어 기획</li>
          <li>접수방법: 이메일을 통한 접수 (mydataidea@gmail.com)</li>
          <li>주최: 과학기술정보통신부, 한국데이터산업진흥원</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest3;