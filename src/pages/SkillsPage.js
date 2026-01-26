import "./SkillsPage.scss";
import data from "../assets/data/Skills.json";
import SkillCard from "../components/common/SkillsCard";

const icons = require.context("../assets/images/Icons", false, /\.svg$/);

function getIcon(fileName) {
  if (!fileName) return null;
  try {
    const mod = icons("./" + fileName);
    return mod.default || mod;
  } catch {
    return null;
  }
}

function SkillsPage() {
  const sections = data.skills;

  return (
    <section className="skills">
      <header className="skills-header">
        <p className="skills-title"># Skills</p>
        <p className="skills-desc">
          다양한 기술 스택을 활용해 프로젝트를 구현하고 있습니다.
        </p>
      </header>

      <div className="skills-sections">
        {sections.map((sec) => (
          <div key={sec.id} className="skills-section">
            <div className="section-head">
              <span className="dot">•</span>
              <h3 className="section-title">{sec.title}</h3>
            </div>

            <div className="skills-grid">
              {sec.items.map((item) => (
                <SkillCard
                  key={item.id}
                  label={item.label}
                  icon={getIcon(item.icon)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
