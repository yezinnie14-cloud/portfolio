// src/pages/section/Detail/Personal/Quiz.js
import "./PersonalDetail.scss";
import { useMemo, useState } from "react";

// ✅ 이미지 경로는 너 프로젝트 구조에 맞게 바꿔줘
// 예) src/assets/images/Personal/quiz/quiz.png
// import quizPreview from "../../../../assets/images/Personal/quiz/quiz.png";

function Quiz() {
  const [openPreview, setOpenPreview] = useState(false);

  const links = useMemo(
    () => ({
      github: "", // "https://github.com/..."
      live: "", // "https://..."
    }),
    []
  );

  return (
    <section className="detail-page">
      {/* TOP */}
      <header className="detail-top">
        <button
          type="button"
          className="detail-top__back"
          onClick={() => window.history.back()}
        >
          ← Back to Projects
        </button>

        <p className="detail-top__tag">#개인프로젝트 #JavaScript</p>
        <h1 className="detail-top__title">QUIZ</h1>
        <p className="detail-top__subtitle">퀴즈 웹 애플리케이션</p>

        <div className="detail-top__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setOpenPreview(true)}
          >
            미리보기 열기
          </button>

          {links.github ? (
            <a
              className="btn"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              깃허브 레포지토리 링크
            </a>
          ) : (
            <button type="button" className="btn" disabled>
              깃허브 링크 
            </button>
          )}

          {links.live ? (
            <a className="btn" href={links.live} target="_blank" rel="noreferrer">
              배포링크
            </a>
          ) : (
            <button type="button" className="btn" disabled>
              배포링크 
            </button>
          )}
        </div>
      </header>

      {/* BODY (VSCode split 느낌) */}
      <div className={`split ${openPreview ? "split--open" : ""}`}>
        {/* LEFT: README */}
        <div className="split__left">
          <section className="panel">
            <h2 className="panel__title">• 한 줄 요약</h2>
            <p className="panel__text">
              JSON 데이터를 활용한 동적 문제 렌더링 및 실시간 점수 계산 로직 구현
            </p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 진행 기간</h2>
            <p className="panel__text">2025.12.01 - 2025.12.30 (4주)</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 주요 기능 & 구현 포인트</h2>
            <ul className="panel__list">
              <li>질문 & 답 선택: 여러 개의 문제를 순서대로 제공하고 답 선택 가능</li>
              <li>점수 계산: 정답 여부를 판별해 점수 누적 및 결과 화면 표시</li>
              <li>UI 업데이트: 선택/제출에 따라 화면이 동적으로 전환되는 흐름 구현</li>
              <li>로컬 UI 이벤트: 버튼 클릭으로 다음 문제 이동, 결과 보기</li>
            </ul>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 기술스택</h2>
            <ul className="panel__list">
              <li>Language: JavaScript (ES6+)</li>
              <li>Styling: CSS</li>
              <li>Design & Tool: Figma, Git, GitHub</li>
            </ul>
          </section>

          <section className="panel">
            <h2 className="panel__title">• Trouble Shooting</h2>

            <div className="ts">
              <p className="ts__k">문제</p>
              <p className="ts__v">
                초기 디자인이 단순해서 화면이 밋밋해 보이고 몰입감이 떨어짐
              </p>

              <p className="ts__k">원인</p>
              <p className="ts__v">
                상호작용(피드백) 요소가 부족했고, 전환이 즉각적이라 변화가 덜 느껴짐
              </p>

              <p className="ts__k">해결</p>
              <p className="ts__v">
                버튼/전환에 간단한 애니메이션과 상태 피드백을 추가해 사용 흐름을
                더 매끄럽게 개선
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT: Preview Panel */}
        <aside className="split__right" aria-hidden={!openPreview}>
          <div className="preview-window">
            <div className="preview-window__titlebar">
              <div className="preview-window__dots" aria-hidden>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>

              <p className="preview-window__tab">QUIZ.</p>

              <button
                type="button"
                className="preview-window__close"
                onClick={() => setOpenPreview(false)}
                aria-label="close preview"
              >
                ×
              </button>
            </div>

            <div className="preview-window__content">
              {/* <img
                className="preview-window__img"
                src={quizPreview}
                alt="Quiz preview"
              /> */}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Quiz;
