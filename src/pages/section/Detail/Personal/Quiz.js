// src/pages/section/Detail/Personal/Quiz.js
import "./PersonalDetail.scss";
import { useMemo, useState } from "react";
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

  const quizPreview = null; // 이미지 연결하면 import로 바꿔

  return (
    <section className="detail-page detail-page--editor">
      <div className={`editor ${openPreview ? "editor--split" : "editor--single"}`}>
        {/* LEFT */}
        <div className="editor__left">
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
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  깃허브 링크
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
              <li>점수 계산: 정답 여부 판별해 점수 누적 및 결과 표시</li>
              <li>UI 업데이트: 선택/제출에 따라 화면이 동적으로 전환</li>
              <li>버튼 이벤트: 다음 문제 이동, 결과 보기</li>
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
              <p className="ts__v">초기 디자인이 단순해 밋밋하고 몰입감이 떨어짐</p>
              <p className="ts__k">원인</p>
              <p className="ts__v">피드백 요소 부족, 전환이 즉각적이라 변화가 덜 느껴짐</p>
              <p className="ts__k">해결</p>
              <p className="ts__v">전환/버튼에 상태 피드백과 간단한 애니메이션을 추가</p>
            </div>
          </section>
        </div>

        {/* RIGHT (Preview) */}
        {openPreview ? (
          <div className="editor__right">
            <div className="preview-shell">
              <div className="preview-shell__bar">
               

                <p className="preview-shell__title">QUIZ.</p>

                <button
                  type="button"
                  className="preview-shell__close"
                  onClick={() => setOpenPreview(false)}
                  aria-label="close preview"
                >
                  ×
                </button>
                 <div className="preview-shell__dots" aria-hidden>
                  <span className="preview-dot" />
                  <span className="preview-dot" />
                  <span className="preview-dot" />
                </div>
              </div>

              <div className="preview-shell__body">
                {quizPreview ? (
                  <img className="preview-shell__img" src={quizPreview} alt="Quiz preview" />
                ) : (
                  <div className="preview-shell__empty">미리보기 이미지 넣을 것</div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Quiz;
