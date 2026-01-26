import "./PersonalDetail.scss";
import { useMemo, useState } from "react";
import previewImage from "../../../../assets/images/Personal/closettrip.png";

function ClosetTrip() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const links = useMemo(
    () => ({
      github: "https://github.com/yezinnie14/Closet-trip",
      live: "",
    }),
    []
  );

  return (
    <section className="detail-page editor-page">
      <div className={`editor-layout ${isPreviewOpen ? "split" : "single"}`}>
        {/* LEFT */}
        <div className="editor-left">
          <header className="project-header">
            <button
              type="button"
              className="back-button"
              onClick={() => window.history.back()}
            >
              ← Back to Projects
            </button>

            <p className="project-tag">#개인프로젝트 #JavaScript</p>
            <h1 className="project-title">CLOSET TRIP</h1>
            <p className="project-subtitle">의류 관리 웹 애플리케이션</p>

            <div className="project-actions">
              <button
                type="button"
                className="btn primary"
                onClick={() => setIsPreviewOpen(true)}
              >
                미리보기 열기
              </button>

              {links.github ? (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  깃허브 링크
                </a>
              ) : (
                <button className="btn" disabled>
                  깃허브 링크
                </button>
              )}

              {links.live ? (
                <a className="btn" href={links.live} target="_blank" rel="noreferrer">
                  배포링크
                </a>
              ) : (
                <button className="btn" disabled>
                  배포링크
                </button>
              )}
            </div>
          </header>

          <section className="info-section">
            <h2 className="section-title">• 한 줄 요약</h2>
            <p className="section-text">카드형 레이아웃 쇼핑몰 웹 사이트</p>
          </section>

          <section className="info-section">
            <h2 className="section-title">• 진행 기간</h2>
            <p className="section-text">2025.12.23 - 2025.12.24 (2일)</p>
          </section>

          <section className="info-section">
            <h2 className="section-title">• 주요 기능 & 구현 포인트</h2>
            <ul className="section-list">
              <li>사용자의 편리성을 위해 자세한 룩 키워드 삽입</li>
              <li>가독성을 고려한 타이포그래피 및 카드형 레이아웃</li>
            </ul>
          </section>

          <section className="info-section">
            <h2 className="section-title">• 기술스택</h2>
            <ul className="section-list">
              <li>JavaScript (ES6+)</li>
              <li>CSS</li>
              <li>Figma, Git, GitHub</li>
            </ul>
          </section>

          <section className="info-section">
            <h2 className="section-title">• Trouble Shooting</h2>
            <div className="trouble-box">
              <p className="label">문제</p>
              <p>하트 클릭 시 색이 바뀌지만 크기가 어색함</p>

              <p className="label">원인</p>
              <p>상태 변화에 대한 시각적 피드백 부족</p>

              <p className="label">해결</p>
              <p>전환 애니메이션과 버튼 상태 피드백 추가</p>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        {isPreviewOpen && (
          <div className="editor-right">
            <div className="preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <p className="preview-title">CLOSET TRIP</p>

                <button
                  className="preview-close"
                  onClick={() => setIsPreviewOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="preview-body">
                <img src={previewImage} alt="preview" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ClosetTrip;
