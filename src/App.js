import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";

import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
      <header>
        나의 포트폴리오
      </header>
      

      <div className="container">
        <nav>
          <Link to={"/introduction"}>INTRODUCTION</Link>
          <Link to={"/project"}>PROJECT</Link>
          <Link to={"/contest"}>CONTEST </Link>
          <Link to={"/career"}>CAREER</Link>
        </nav>
      </div>
      
        <main>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/contest" Component={Contest} />
            <Route path="/career" Component={Career} />
          </Routes>
        </main>
      
      <footer>
        <i>
          Copyright 2023. 지은이 all rights reserved.
          <br />
          연락처 : 010-9402-7368
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;
