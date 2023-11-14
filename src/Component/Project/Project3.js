const Project3 = () => {
  return (
    <div>
      <h1>NodeJs 이용한 Backend Web</h1>
      {/* <img src="/image/node.png" alt="react" /> */}
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>프로젝트 목표
이 프로젝트의 목표는 안정적이고 확장 가능한 서버를 구축하여 프론트엔드와 통신하며, 데이터를 관리하고 비즈니스 로직을 처리하는 것입니다. Node.js를 사용하여 비동기적이며 효율적인 서버를 개발하고, RESTful API 또는 GraphQL을 통해 클라이언트와의 상호작용을 지원합니다.</li>
          <li>주요 기능
API 엔드포인트 구현: Express.js 등의 프레임워크를 사용하여 API 엔드포인트를 구현하고, 클라이언트와의 데이터 교환을 지원합니다.

데이터베이스 통합: MongoDB, MySQL, PostgreSQL 등의 데이터베이스와 연동하여 데이터를 저장하고 관리합니다.

사용자 인증 및 권한 관리: 사용자 로그인, 회원가입과 같은 인증 기능을 구현하고, 권한을 통한 접근 제어를 수행합니다.

비즈니스 로직 처리: 주요 비즈니스 로직을 서버에서 처리하고, 클라이언트에 필요한 데이터를 적절히 가공하여 제공합니다.

이메일 전송 및 알림 기능: 이메일 전송을 통한 회원 가입 인증 및 비밀번호 재설정과 같은 기능을 지원하고, 필요에 따라 알림 기능을 추가합니다.

보안 강화: SSL 인증서를 적용하고, 보안 취약점에 대한 대응책을 마련하여 시스템을 안전하게 운영합니다.</li>
          <li>개발 환경
npm (또는 Yarn): 프로젝트 의존성 및 패키지 관리를 위한 도구.
ESLint 및 Prettier: 코드 품질과 일관성을 유지하기 위한 도구.</li>
          <li>배포
클라우드 플랫폼 (예: AWS, Heroku): 안정적이고 확장 가능한 서버 인프라를 위한 클라우드 환경을 구축하고 배포.</li>
        
        </ul>
      </fieldset>
    </div>
  );
};

export default Project3;