// src/pages/section/Detail/Clone/ConnectWave.js
import "./CloneDetail.scss";
import { useMemo, useState } from "react";

function ConnectWave() {
  const [mode, setMode] = useState("compare"); // "compare" | "checklist"

  const links = useMemo(
    () => ({
      original: "", // 원본 주소
      repo: "",     // 깃허브
      live: ""      // 배포링크
    }),
    []
  );

  // ✅ 이미지 import로 연결하면 제일 안전함
  // import originalImg from "../../../../assets/images/Clone/connectwave/original.png";
  // import cloneImg from "../../../../assets/images/Clone/connectwave/clone.png";
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
      <header className="clone-head">
        <button type="button" className="clone-head__back" onClick={() => window.history.back()}>
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
            <button className="btn btn--primary" type="button" disabled>
              배포 링크
            </button>
          )}

          {links.repo ? (
            <a className="btn" href={links.repo} target="_blank" rel="noreferrer">
              깃허브 레포지토리
            </a>
          ) : (
            <button className="btn" type="button" disabled>
              깃허브 레포지토리
            </button>
          )}

          {links.original ? (
            <a className="btn" href={links.original} target="_blank" rel="noreferrer">
              원본 사이트
            </a>
          ) : (
            <button className="btn" type="button" disabled>
              원본 사이트
            </button>
          )}
        </div>

        <div className="clone-head__tabs">
          <button
            type="button"
            className={`mini-tab ${mode === "compare" ? "is-active" : ""}`}
            onClick={() => setMode("compare")}
          >
            Compare
          </button>
          <button
            type="button"
            className={`mini-tab ${mode === "checklist" ? "is-active" : ""}`}
            onClick={() => setMode("checklist")}
          >
            Checklist
          </button>
        </div>
      </header>

      <div className="clone-body">
        {/* LEFT: 설명 영역 */}
        <div className="clone-body__left">
          <section className="panel">
            <h2 className="panel__title">• 한 줄 요약</h2>
            <p className="panel__text">GSAP 라이브러리를 활용한 인터랙티브 웹 구현</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 진행 기간</h2>
            <p className="panel__text">2025.12.08 - 2025.12.10 (3일)</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">## Project Details</h2>

            <h3 className="panel__sub">• 주요 기능 & 구현 포인트</h3>
            <ul className="panel__list">
              <li>GSAP 애니메이션: 요소 등장/이동/페이드 효과 구현</li>
              <li>스크롤 연동: 콘텐츠 흐름을 자연스럽게 전환되도록 구성</li>
              <li>타이밍 제어: GSAP Timeline으로 애니메이션 흐름 관리</li>
              <li>섹션별 전환: 화면 전환 시 각 섹션마다 다른 모션 적용</li>
              <li>UI 몰입도 강화: 정적인 화면이 아닌 “움직임 중심” 페이지 구성</li>
            </ul>

            <h3 className="panel__sub">• 기술스택</h3>
            <ul className="panel__list">
              <li>Language: JavaScript (ES6+)</li>
              <li>Framework: React.js</li>
              <li>Animation: GSAP</li>
              <li>Styling: SCSS</li>
              <li>Design & Tool: Figma, Git, GitHub</li>
            </ul>

            <h3 className="panel__sub">• 배운점</h3>
            <ul className="panel__list">
              <li>ScrollTrigger 처리 및 다양한 애니메이션 효과</li>
              <li>타임라인으로 모션을 설계하는 방식</li>
              <li>레이아웃/텍스트 리듬이 UX 몰입도에 주는 영향</li>
            </ul>
          </section>
        </div>

        {/* RIGHT: 모드별 뷰 */}
        <div className="clone-body__right">
          {mode === "compare" ? (
            <div className="compare">
              <div className="compare__col">
                <div className="compare__label">Original</div>
                <div className="preview-frame preview-frame--light">
                  {originalImg ? (
                    <img className="preview-frame__img" src={originalImg} alt="original preview" />
                  ) : (
                    <div className="preview-frame__empty">원본 캡처.</div>
                  )}
                </div>
              </div>

              <div className="compare__col">
                <div className="compare__label">Clone</div>
                <div className="preview-frame preview-frame--light">
                  {cloneImg ? (
                    <img className="preview-frame__img" src={cloneImg} alt="clone preview" />
                  ) : (
                    <div className="preview-frame__empty">클론 캡처.</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="checklist">
              <h3 className="checklist__title">Reproduction Checklist</h3>

              <ul className="checklist__list">
                {checklist.map((c) => (
                  <li key={c.id} className={`check checklist--${c.status}`}>
                    <span className="check__badge">
                      {c.status === "done" ? "✅" : c.status === "partial" ? "⏳" : "⬜"}
                    </span>
                    <span className="check__text">{c.label}</span>
                  </li>
                ))}
              </ul>

              <div className="panel panel--soft">
                <h4 className="panel__title">• 개선 계획</h4>
                <ul className="panel__list">
                  <li>반응형 섹션별 모션 최적화</li>
                  <li>이미지/폰트 로딩 최적화로 퍼포먼스 개선</li>
                  <li>컴포넌트 분리로 유지보수성 강화</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConnectWave;
