const Project1 = () => {
  return (
    <div>
      <h1>React를 이용한 Frontend Web</h1>
      {/* <img src="/image/react.png" alt="react" /> */}
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li><strong>프로젝트 목표</strong>: 
            이 프로젝트의 목표는 사용자 친화적이고 동적인 웹 애플리케이션을 개발하여 사용자 경험을 향상시키는 것입니다. 
            React를 사용하여 컴포넌트 기반 아키텍처를 채택하고, 단일 페이지 애플리케이션(Single Page Application, SPA)의 형태로 구축합니다.</li>

          <li><strong>주요 기능</strong>: 
            사용자 인증 및 프로필 관리: 사용자는 회원가입 및 로그인을 통해 애플리케이션에 접근할 수 있으며, 개인 프로필을 관리할 수 있습니다.

            실시간 업데이트: WebSocket 또는 기타 실시간 통신 기술을 이용하여 실시간으로 데이터를 업데이트하고, 사용자에게 실시간 정보를 제공합니다.

            대화형 컴포넌트: React의 장점을 살려 대화형 UI를 개발하여 사용자와의 상호작용을 향상시킵니다. 예를 들어, 폼 검증, 실시간 검색 등을 구현할 수 있습니다.

            라우팅 및 네비게이션: React Router를 사용하여 다양한 페이지 간의 라우팅 및 네비게이션을 구현합니다. 사용자가 페이지 간에 자유롭게 이동할 수 있도록 합니다.

            상태 관리: Redux 또는 Context API를 활용하여 전역 상태를 관리하여 컴포넌트 간의 데이터 공유를 용이하게 합니다.</li>
          <li><strong>개발 환경</strong>:
            Node.js 및 npm (또는 Yarn): 프로젝트 의존성 및 패키지 관리를 위한 도구.
            ESLint 및 Prettier: 코드 품질과 일관성을 유지하기 위한 도구.</li>
          <li><strong>배포</strong>:
            서버 호스팅 플랫폼 (예: Netlify, Vercel): 정적 파일을 호스팅하여 애플리케이션을 배포.
</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project1;
