import "./TeamDetail.scss"; 

function Zio() {
  return (
    <section className="team-detail">
      {/* TOP */}
      <div className="team-detail__top">
        <button className="team-detail__back" type="button" onClick={() => window.history.back()}>
          ← Back to Projects
        </button>

        <p className="team-detail__category">TEAM PROJECT</p>
        <h1 className="team-detail__title">ZIO (Zari-It-O)</h1>
        <p className="team-detail__subtitle">주차장 관리 웹 사이트</p>

        <div className="team-detail__actions">
          {/* <a className="btn btn--primary" href="#" target="_blank" rel="noreferrer">
            깃허브 바로가기
          </a>
          <a className="btn" href="#" target="_blank" rel="noreferrer">
            배포 링크
          </a>
          <a className="btn" href="#" target="_blank" rel="noreferrer">
            발표/기획서 (선택)
          </a> */}
        </div>
      </div>

      {/* PREVIEW */}
      <section className="panel">
        <h2 className="panel__title">## Preview</h2>

        <div className="preview">
          <div className="preview__desktop">
            <div className="preview__frame">Desktop</div>
            {/* 이미지 경로는 너 assets 위치에 맞춰 변경 */}
            <img
              className="preview__img"
              src="../../assets/images/Team/pacey/pacey.png"
              alt="ZIO desktop preview"
            />
          </div>

          <div className="preview__mobile">
            <div className="preview__frame">Mobile</div>
            <img
              className="preview__img"
              src=""
              alt="ZIO mobile preview"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="panel">
        <h2 className="panel__title">## Project Overview</h2>

        <div className="overview">
          <div className="overview__left">
            <p className="overview__label">프로젝트 설명</p>
            <p className="overview__desc">
              지도 API를 활용해 주차장 조회/예약 흐름을 제공하고, Supabase로 데이터를 관리한 팀 프로젝트입니다.
            </p>

            <div className="overview__meta">
              <div className="meta">
                <p className="meta__k">기간</p>
                <p className="meta__v">2026.01.02 - 01.13</p>
              </div>
              <div className="meta">
                <p className="meta__k">역할</p>
                <p className="meta__v">소스관리 담당</p>
              </div>
              <div className="meta">
                <p className="meta__k">핵심 기능</p>
                <ul className="meta__list">
                  <li>지도 API 기반 주차장 조회</li>
                  <li>예약/상세 흐름</li>
                  <li>Supabase 데이터 연동</li>
                  <li>반응형 UI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overview__right">
            <p className="overview__label">기술 스택</p>
            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">SCSS</span>
              <span className="chip">Supabase</span>
              <span className="chip">Kakao Map API</span>
              <span className="chip">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="panel">
        <h2 className="panel__title">## Trouble Shooting</h2>

        <div className="ts">
          <article className="ts__card">
            <h3 className="ts__q">이슈 1.</h3>
            <p className="ts__k">문제</p>
            <p className="ts__v">
              지도 로딩/마커 렌더 타이밍 문제로 특정 상황에서 UI가 늦게 반영됨.
            </p>

            <p className="ts__k">원인</p>
            <p className="ts__v">비동기 로딩 시점과 상태 업데이트 순서가 꼬임.</p>

            <p className="ts__k">해결</p>
            <p className="ts__v">
              로딩 상태 분리 + effect 의존성 정리, 렌더 조건을 명확히 해서 안정화.
            </p>
          </article>

          <article className="ts__card">
            <h3 className="ts__q">이슈 2.</h3>
            <p className="ts__k">문제</p>
            <p className="ts__v">
              Supabase 요청 중 AbortError 또는 중복 요청 발생.
            </p>

            <p className="ts__k">원인</p>
            <p className="ts__v">언마운트/라우팅 이동 중 요청이 중단되며 에러로 보임.</p>

            <p className="ts__k">해결</p>
            <p className="ts__v">
              cleanup 처리 + 요청 중복 방지 로직, 에러 핸들링을 사용자 메시지로 분리.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Zio;
