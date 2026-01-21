import "./MainPage.scss";

export default function Main() {
  return (
    <div className="main">
      <h2 className="h2">## 포트폴리오에 오신 것을 환영합니다.</h2>
      <section className="introbox">
        <div className="faceimg" aria-hidden />

        <div className="intro">
          <p className="intro-txt1">안녕하세요 👋</p>
          <p className="intro-txt2">
            저는 사용자 경험을 중심으로 생각하는{" "}
            <span className="highlight">프론트엔드 개발자 박예진</span>입니다.
            깔끔한 코드와 더 편리하고 감각있는 UI를 만들기 위해 
            <br />
            노력하고 있습니다. 소통 능력이 좋아 팀 활동도 좋아하고, 책임감이 강해 맡은 바를 최선을 다합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="title">## What I Do</p>

        <div className="cards">
          <article className="card">
            <div className="cardTitle">🎨 UI/UX Design</div>
            <div className="cardDesc">
              Figma 기반 화면 설계 / 사용자 흐름 고려
            </div>
          </article>

          <article className="card">
            <div className="cardTitle">💻 Web Development</div>
            <div className="card-txt">
              React 컴포넌트 설계 / 유지보수 가능한 구조
            </div>
          </article>

          <article className="card">
            <div className="cardTitle">🚀 Performance</div>
            <div className="card-txt">
              체감 성능 개선 / 불필요한 렌더 최소화
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="title">## Interests</p>
        <div className="rows">
          <div className="row">
            <div className="rowTitle">❤️ Open</div>
            <div className="row-txt">소통과 피드백을 좋아합니다.</div>
          </div>

          <div className="row">
            <div className="rowTitle">🧭 Responsibility</div>
            <div className="row-txt">맡은 일은 끝까지 완성합니다.</div>
          </div>

          <div className="row">
            <div className="rowTitle">🌱 Continuous Learning</div>
            <div className="row-txt">왜 동작하는지 이해하며 성장합니다.</div>
          </div>
        </div>

        <blockquote className="quote">
          “Code is like humor. When you have to explain it, it’s bad.” - Cory
          House
        </blockquote>
      </section>

      {/* QUICK START */}
      <section className="section">
        <p className="title">## 빠른 시작</p>
        <pre className="code">
          {`$ cd portfolio
$ npm install
$ npm run dev`}
        </pre>
      </section>

      {/* EXPLORE */}
      <section className="section">
        <p className="title">## 탐색하기</p>
        <ul className="explore">
          <li>
            <span className="file">about.</span> — 포트폴리오 소개
          </li>
          <li>
            <span className="file">projects.</span> — 주요 프로젝트
          </li>
          <li>
            <span className="file">skills.</span> — 기술 스택
          </li>
          <li>
            <span className="file">contact.</span> — 연락 방법
          </li>
        </ul>

        <div className="tip">
          TIP: 왼쪽 사이드바에서 파일을 클릭하면 탭으로 열립니다!
        </div>
      </section>
    </div>
  );
}
