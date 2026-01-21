import "./MainPage.scss";


export default function Main() {
  return (
    <div className="main">
      {/* HERO */}
      <section className="hero">
        <div className="avatar" aria-hidden />

        <div className="heroText">
          <span className="badge">안녕하세요 👋</span>
          <p className="intro">
            저는 사용자 경험을 중심으로 생각하는 프론트엔드 개발자 예진입니다.
            <br />
            기획 의도를 UI로 풀어내고, 디테일까지 책임감 있게 마무리합니다.
          </p>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section">
        <h2 className="h2">## What I Do</h2>

        <div className="cards">
          <article className="card">
            <div className="cardTitle">🎨 UI/UX Design</div>
            <div className="cardDesc">
              Figma 기반 화면 설계 / 사용자 흐름 고려
            </div>
          </article>

          <article className="card">
            <div className="cardTitle">💻 Web Development</div>
            <div className="cardDesc">
              React 컴포넌트 설계 / 유지보수 가능한 구조
            </div>
          </article>

          <article className="card">
            <div className="cardTitle">🚀 Performance</div>
            <div className="cardDesc">
              체감 성능 개선 / 불필요한 렌더 최소화
            </div>
          </article>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="section">
        <h2 className="h2">## Interests</h2>
        <div className="rows">
          <div className="row">
            <div className="rowTitle">❤️ Open</div>
            <div className="rowDesc">소통과 피드백을 좋아합니다.</div>
          </div>

          <div className="row">
            <div className="rowTitle">🧭 Responsibility</div>
            <div className="rowDesc">맡은 일은 끝까지 완성합니다.</div>
          </div>

          <div className="row">
            <div className="rowTitle">🌱 Continuous Learning</div>
            <div className="rowDesc">왜 동작하는지 이해하며 성장합니다.</div>
          </div>
        </div>

        <blockquote className="quote">
          “Code is like humor. When you have to explain it, it’s bad.” - Cory House
        </blockquote>
      </section>

      {/* QUICK START */}
      <section className="section">
        <h2 className="h2">## 빠른 시작</h2>
        <pre className="code">
{`$ cd portfolio
$ npm install
$ npm run dev`}
        </pre>
      </section>

      {/* EXPLORE */}
      <section className="section">
        <h2 className="h2">## 탐색하기</h2>
        <ul className="explore">
          <li><span className="file">about.</span> — 포트폴리오 소개</li>
          <li><span className="file">projects.</span> — 주요 프로젝트</li>
          <li><span className="file">skills.</span> — 기술 스택</li>
          <li><span className="file">contact.</span> — 연락 방법</li>
        </ul>

        <div className="tip">
          TIP: 왼쪽 사이드바에서 파일을 클릭하면 탭으로 열립니다!
        </div>
      </section>
    </div>
  );
}
