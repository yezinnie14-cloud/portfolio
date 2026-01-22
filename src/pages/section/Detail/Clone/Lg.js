import "./CloneDetail.scss";
import { useState } from "react";

function Lg() {
  const [mode, setMode] = useState("compare"); // "compare" | "checklist"

  const links = {
    original: "",
    repo: "",
    live: ""
  };

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
      <header className="clone-header">
        <button
          type="button"
          className="back-btn"
          onClick={() => window.history.back()}
        >
          ← Back to Projects
        </button>

        <p className="clone-tag">#키워드 #클론프로젝트 #GSAP</p>
        <h1 className="clone-title">LG U+ 프라이버시 센터</h1>
        <p className="clone-subtitle">Lg 홈페이지 클론</p>

        <div className="clone-actions">
          {links.live ? (
            <a className="btn primary" href={links.live} target="_blank" rel="noreferrer">
              배포 링크
            </a>
          ) : (
            <button className="btn primary" disabled>
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

        <div className="clone-tabs">
          <button
            className={`tab ${mode === "compare" ? "active" : ""}`}
            onClick={() => setMode("compare")}
          >
            Compare
          </button>
          <button
            className={`tab ${mode === "checklist" ? "active" : ""}`}
            onClick={() => setMode("checklist")}
          >
            Checklist
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="clone-body">
        {/* LEFT */}
        <div className="clone-left">
          <section className="info-block">
            <h2 className="info-title">• 한 줄 요약</h2>
            <p className="info-text">
              GSAP 라이브러리를 활용한 인터랙티브 웹 구현
            </p>
          </section>

          <section className="info-block">
            <h2 className="info-title">• 진행 기간</h2>
            <p className="info-text">2025.12.08 - 2025.12.10 (3일)</p>
          </section>

          <section className="info-block">
            <h2 className="info-title">## Project Details</h2>

            <h3 className="info-sub">• 주요 기능 & 구현 포인트</h3>
            <ul className="info-list">
              <li>GSAP 애니메이션 효과 구현</li>
              <li>스크롤 연동 콘텐츠 전환</li>
              <li>Timeline 기반 모션 제어</li>
              <li>섹션별 전환 애니메이션</li>
            </ul>

            <h3 className="info-sub">• 기술스택</h3>
            <ul className="info-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>GSAP</li>
              <li>SCSS</li>
            </ul>
          </section>
        </div>

        {/* RIGHT */}
        <div className="clone-right">
          {mode === "compare" ? (
            <div className="compare-view">
              <div className="compare-col">
                <div className="compare-label">Original</div>
                <div className="preview-frame light">
                  {originalImg ? (
                    <img src={originalImg} alt="original preview" />
                  ) : (
                    <div className="preview-empty">원본 캡처</div>
                  )}
                </div>
              </div>

              <div className="compare-col">
                <div className="compare-label">Clone</div>
                <div className="preview-frame light">
                  {cloneImg ? (
                    <img src={cloneImg} alt="clone preview" />
                  ) : (
                    <div className="preview-empty">클론 캡처</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="checklist-view">
              <h3 className="checklist-title">Reproduction Checklist</h3>

              <ul className="checklist-list">
                {checklist.map((item) => (
                  <li key={item.id} className={`check-item ${item.status}`}>
                    <span className="check-icon">
                      {item.status === "done"
                        ? "✅"
                        : item.status === "partial"
                        ? "⏳"
                        : "⬜"}
                    </span>
                    <span className="check-text">{item.label}</span>
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

export default Lg;
