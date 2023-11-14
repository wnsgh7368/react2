const Project2 = () => {
  return (
    <div>
      <h1>VueJs 이용한 Frontend Web</h1>
      {/* <img src="/image/vue.png" alt="react" /> */}
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>주요 기능:
컴포넌트 기반 아키텍처: Vue.js의 강력한 컴포넌트 시스템을 활용하여 재사용 가능한 UI 컴포넌트를 개발하고, 애플리케이션을 구성합니다.

반응성 및 실시간 업데이트: Vue.js의 양방향 데이터 바인딩을 활용하여 사용자 인터페이스를 실시간으로 업데이트하고, WebSocket 등을 통한 실시간 통신을 통해 동적인 데이터를 처리합니다.

라우팅 및 네비게이션: Vue Router를 사용하여 다양한 페이지 간의 라우팅 및 네비게이션을 구현하고, 사용자에게 원활한 애플리케이션 탐색 경험을 제공합니다.

상태 관리: Vuex를 활용하여 전역 상태를 효과적으로 관리하고, 컴포넌트 간의 데이터 교환과 상태 공유를 용이하게 합니다.</li>
          <li>개발 환경
Node.js 및 npm (또는 Yarn): 프로젝트 의존성 및 패키지 관리를 위한 도구.
ESLint 및 Prettier: 코드 품질과 일관성을 유지하기 위한 도구.</li>
          <li>배포
서버 호스팅 플랫폼 (예: Netlify, Vercel): 정적 파일을 호스팅하여 애플리케이션을 배포.</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project2;
