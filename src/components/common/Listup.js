// import "./Listup.scss";
// const Listup = () => {
//   return (
//     <div className="list-card">
//       <div className="list-header">
//       <h3 className="list-title">ZIO (Zari-It-O)</h3>
//       <p className="list-icon">깃허브, 공유 아이콘</p>
//       </div>
//       <p className="list-date">2026.01.02-01.13 · {" "} <span className="highlight">소스관리 담당</span></p>
//       <p className="desc">주차장 관리 웹 사이트</p>
        
//         <ul className="key-highlights">
//           <p className="highlights">Key highlights:</p>
//           <li>지도 API를 통한 주차 예약 시스템</li>
//           <li>Supabase data 사용</li>
//           <li>반응형 디자인 구현</li>
//       </ul>
//       <div className="skills">
//         <span className="skill-item">React</span>
//         <span className="skill-item">Supabase</span>
//         <span className="skill-item">Figma</span>
//         <span className="skill-item">Node.js</span> 
//         <span className="skill-item">Scss</span> 
//         <span className="skill-item">Kakao Map API</span>
//       </div>
//     </div>
//   )
// }

// export default Listup
import "./Listup.scss";
import { useNavigate } from "react-router-dom";

function Listup(props) {
  const navigate = useNavigate();

  const {
    title,
    period,
    role,
    desc,
    highlights = [],
    skills = [],
    to,
    repo,
    live,
  } = props;

  const handleClick = () => {
    if (to) navigate(to);
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div className="list-card" onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="list-header">
        <h3 className="list-title">{title}</h3>

        <div className="list-icons" onClick={stop}>
          {repo ? (
            <a className="icon-btn" href={repo} target="_blank" rel="noreferrer">
              github
            </a>
          ) : null}

          {live ? (
            <a className="icon-btn" href={live} target="_blank" rel="noreferrer">
              live
            </a>
          ) : null}
        </div>
      </div>

      <p className="list-date">
        {period} · <span className="highlight">{role}</span>
      </p>

      <p className="desc">{desc}</p>

      <div className="key-highlights">
        <p className="highlights">Key Highlights:</p>
        <ul>
          {highlights.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="skills">
        {skills.map((s) => (
          <span key={s} className="skill-item">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Listup;
