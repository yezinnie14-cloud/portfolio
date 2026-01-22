import "./CloneDetail.scss";
import { useState } from "react";

function ConnectWave() {
  const [mode, setMode] = useState("compare"); // "compare" | "checklist"

  // ✅ 그냥 객체로 선언
  const links = {
    original: "", // 원본 주소
    repo: "",     // 깃허브
    live: ""      // 배포링크
  };

  // 이미지 (나중에 import로 교체 추천)
  const originalImg = null;
  const cloneImg = null;

  const checklist = [
    { id: "layout", label: "레이아웃 구조 재현", status: "done" },
    { id: "scroll", label: "스크롤 인터랙션", status: "done" },
    { id: "gsap", label: "GSAP 애니메이션 타이밍", status: "done" },
    { id: "responsive", label: "반응형(모바일/태블릿)", status: "partial" },
    { id: "perf", label: "퍼포먼스 최적화(이미지/리렌더)", status: "todo" }
  ];

  return (
    <section className="clone-detail">
      {/* HEADER */}
      <header className="clone-head">
        <button
          type="button"
          className="clone-head__back"
          onClick={() => window.history.back()}
        >
          ← Back to Projects
        </button>

        <p className="clone-head__tag">#키워드 #클론프로젝트 #GSAP</p>
        <h1 className="clone-head__title">ConnectWave</h1>
        <p className="clone-head__subtitle">ConnectWave 홈페이지 클론</p>

        <div className="clone-head__actions">
          {links.live ? (
            <a className="btn btn--primary" href={links.live} target="_blank" rel="noreferrer">
              배포 링크
            </a>
          ) : (
            <button className="btn btn--primary" disabled>
              배포 링크
            </button>
          )}

          {links.repo ? (
            <a className="btn" href={links.repo} target="_blank" rel="noreferrer">
              깃허브 레포지토리
            </a>
          ) : (
            <button className="btn" disabled>
              깃허브 레포지토리
            </button>
          )}

          {links.original ? (
            <a className="btn" href={links.original} target="_blank" rel="noreferrer">
              원본 사이트
            </a>
          ) : (
            <button className="btn" disabled>
              원본 사이트
            </button>
          )}
        </div>

        <div className="clone-head__tabs">
          <button
            className={`mini-tab ${mode === "compare" ? "is-active" : ""}`}
            onClick={() => setMode("compare")}
          >
            Compare
          </button>
          <button
            className={`mini-tab ${mode === "checklist" ? "is-active" : ""}`}
            onClick={() => setMode("checklist")}
          >
            Checklist
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="clone-body">
        {/* LEFT */}
        <div className="clone-body__left">
          <section className="panel">
            <h2 className="panel__title">• 한 줄 요약</h2>
            <p className="panel__text">
              GSAP 라이브러리를 활용한 인터랙티브 웹 구현
            </p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 진행 기간</h2>
            <p className="panel__text">2025.12.08 - 2025.12.10 (3일)</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">## Project Details</h2>

            <h3 className="panel__sub">• 주요 기능 & 구현 포인트</h3>
            <ul className="panel__list">
              <li>GSAP 애니메이션 효과 구현</li>
              <li>스크롤 연동 콘텐츠 전환</li>
              <li>Timeline 기반 모션 제어</li>
              <li>섹션별 전환 애니메이션</li>
            </ul>

            <h3 className="panel__sub">• 기술스택</h3>
            <ul className="panel__list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>GSAP</li>
              <li>SCSS</li>
            </ul>
          </section>
        </div>

        {/* RIGHT */}
        <div className="clone-body__right">
          {mode === "compare" ? (
            <div className="compare">
              <div className="compare__col">
                <div className="compare__label">Original</div>
                <div className="preview-frame preview-frame--light">
                  {originalImg ? (
                    <img src={originalImg} alt="original preview" />
                  ) : (
                    <div className="preview-frame__empty">원본 캡처</div>
                  )}
                </div>
              </div>

              <div className="compare__col">
                <div className="compare__label">Clone</div>
                <div className="preview-frame preview-frame--light">
                  {cloneImg ? (
                    <img src={cloneImg} alt="clone preview" />
                  ) : (
                    <div className="preview-frame__empty">클론 캡처</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="checklist">
              <h3 className="checklist__title">Reproduction Checklist</h3>
              <ul className="checklist__list">
                {checklist.map((item) => (
                  <li key={item.id} className={`check checklist--${item.status}`}>
                    <span className="check__badge">
                      {item.status === "done" ? "✅" : item.status === "partial" ? "⏳" : "⬜"}
                    </span>
                    <span className="check__text">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConnectWave;
