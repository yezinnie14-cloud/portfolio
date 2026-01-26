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
        <p className="list-title">{title}</p>

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
