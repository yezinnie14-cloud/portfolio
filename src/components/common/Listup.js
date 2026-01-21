const Listup = () => {
  return (
    <div className="list-card">
      <div className="list-header">
      <h3 className="list-title">ZIO (Zari-It-O)</h3>
      <p>깃허브, 공유 아이콘</p>
      </div>
      <p className="list-date">2026.01.02-01.13 · {" "} <span className="highlight">소스관리 담당</span></p>
      <p className="desc">주차장 관리 웹 사이트</p>
        <p className="Key-highlights">Key highlights:</p>
        <ul className="key-highlights">
          <li>지도 API를 통한 주차 예약 시스템</li>
          <li>Supabase data 사용</li>
          <li>반응형 디자인 구현</li>
      </ul>
      <div className="skills">
        <span className="skill-item">React</span>
        <span className="skill-item">Supabase</span>
        <span className="skill-item">Figma</span>
        <span className="skill-item">Node.js</span> 
        <span className="skill-item">Scss</span> 
        <span className="skill-item">Kakao Map API</span>
      </div>
    </div>
  )
}

export default Listup