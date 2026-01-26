import "./TeamDetail.scss";

function Pacey() {
  return (
    <section className="team-page">
      {/* TOP */}
      <header className="team-header">
        <button
          className="back-button"
          type="button"
          onClick={() => window.history.back()}
        >
          ← Back to Projects
        </button>

        <p className="project-category">TEAM PROJECT</p>
        <h1 className="project-title">PACEY (페이시)</h1>
        <p className="project-subtitle">주차장 관리 웹 사이트</p>

        <div className="project-actions">
          {/* <a className="btn primary" href="#" target="_blank" rel="noreferrer">
            깃허브 바로가기
          </a>
          <a className="btn" href="#" target="_blank" rel="noreferrer">
            배포 링크
          </a>
          <a className="btn" href="#" target="_blank" rel="noreferrer">
            발표 / 기획서
          </a> */}
        </div>
      </header>

      {/* PREVIEW */}
      <section className="section">
        <h2 className="section-title">## Preview</h2>

        <div className="preview-layout">
          <div className="preview-item desktop">
            <div className="preview-frame">Desktop</div>
            <img
              className="preview-image"
              src="../../assets/images/Team/pacey/pacey.png"
              alt="Pacey desktop preview"
            />
          </div>

          <div className="preview-item mobile">
            <div className="preview-frame">Mobile</div>
            <img
              className="preview-image"
              src=""
              alt="Pacey mobile preview"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <h2 className="section-title">## Project Overview</h2>

        <div className="overview-layout">
          <div className="overview-main">
            <p className="overview-label">프로젝트 설명</p>
            <p className="overview-text">
              지도 API를 활용해 주차장 조회/예약 흐름을 제공하고,
              Supabase로 데이터를 관리한 팀 프로젝트입니다.
            </p>

            <div className="overview-meta">
              <div className="meta-item">
                <p className="meta-label">기간</p>
                <p className="meta-value">2026.01.02 - 01.13</p>
              </div>

              <div className="meta-item">
                <p className="meta-label">역할</p>
                <p className="meta-value">소스관리 담당</p>
              </div>

              <div className="meta-item">
                <p className="meta-label">핵심 기능</p>
                <ul className="meta-list">
                  <li>지도 API 기반 주차장 조회</li>
                  <li>예약 / 상세 흐름</li>
                  <li>Supabase 데이터 연동</li>
                  <li>반응형 UI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overview-side">
            <p className="overview-label">기술 스택</p>
            <div className="tech-chips">
              <span className="chip">React</span>
              <span className="chip">SCSS</span>
              <span className="chip">Supabase</span>
              <span className="chip">Kakao Map API</span>
              <span className="chip">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLE SHOOTING */}
      <section className="section">
        <h2 className="section-title">## Trouble Shooting</h2>

        <div className="trouble-list">
          <article className="trouble-card">
            <h3 className="trouble-title">이슈 1</h3>

            <p className="label">문제</p>
            <p>
              지도 로딩 및 마커 렌더 타이밍 문제로
              특정 상황에서 UI 반영이 지연됨.
            </p>

            <p className="label">원인</p>
            <p>비동기 로딩 시점과 상태 업데이트 순서가 꼬임.</p>

            <p className="label">해결</p>
            <p>
              로딩 상태 분리 + effect 의존성 정리,
              렌더 조건을 명확히 해서 안정화.
            </p>
          </article>

          <article className="trouble-card">
            <h3 className="trouble-title">이슈 2</h3>

            <p className="label">문제</p>
            <p>Supabase 요청 중 AbortError 또는 중복 요청 발생.</p>

            <p className="label">원인</p>
            <p>라우팅 이동 중 요청이 중단되며 에러로 노출됨.</p>

            <p className="label">해결</p>
            <p>
              cleanup 처리 + 중복 요청 방지,
              에러를 사용자 메시지로 분리.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Pacey;
