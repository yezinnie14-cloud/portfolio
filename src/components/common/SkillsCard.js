import "./SkillsCard.scss";

function SkillsCard({ label, icon }) {
  return (
    <article className="skill-card">
      <div className="skill-icon">
        {icon && <img src={icon} alt={label} />}
      </div>
      <p className="skill-label">{label}</p>
    </article>
  );
}

export default SkillsCard;
