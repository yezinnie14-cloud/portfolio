import "./SkillsCard.scss";

function SkillsCard({ label, icon }) {
  return (
    <article className="skill-card">
      <div className="skill-card__icon">
        {icon && <img src={icon} alt="" />}
      </div>
      <p className="skill-card__label">{label}</p>
    </article>
  );
}

export default SkillsCard;
