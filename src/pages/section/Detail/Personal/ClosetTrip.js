import "./PersonalDetail.scss";
import { useMemo, useState } from "react";
import quizPreview from "../../../../assets/images/Personal/closettrip.png";

function ClosetTrip() {
  const [openPreview, setOpenPreview] = useState(false);

  const links = useMemo(
    () => ({
      github: "https://github.com/yezinnie14/Closet-trip",
      live: "", // "https://..."
    }),
    []
  );


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
            <h1 className="detail-top__title">CLOSET TRIP</h1>
            <p className="detail-top__subtitle">의류 관리 웹 애플리케이션</p>

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
              카드형 레이아웃 쇼핑몰 웹 사이트
            </p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 진행 기간</h2>
            <p className="panel__text">2025.12.23 - 2025.12.24 (2일)</p>
          </section>

          <section className="panel">
            <h2 className="panel__title">• 주요 기능 & 구현 포인트</h2>
            <ul className="panel__list">
              <li>사용자의 편리성을 위해 자세한 룩 키워드 삽입</li>
              <li>사용자 가독성을 최우선으로 고려한 타이포그래픽 및 카드형 레이아웃 설계</li>
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
              <p className="ts__v">찜을 설정하고 싶어서 하트를 누르면 색이 바뀌게끔 설정했는데 색이 바뀐 하트 크기가 맞지 않음 </p>
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

export default ClosetTrip;
