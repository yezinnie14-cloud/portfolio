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
    <section className="skills-page">
      <header className="skills-page__header">
        <h2 className="skills-page__title"># Skills</h2>
        <p className="skills-page__desc">
          다양한 기술 스택을 활용해 프로젝트를 구현하고 있습니다.
        </p>
      </header>

      <div className="skills-page__sections">
        {sections.map((sec) => (
          <div key={sec.id} className="skills-block">
            <div className="skills-block__head">
              <span className="skills-block__dot">•</span>
              <h3 className="skills-block__title">{sec.title}</h3>
            </div>

            <div className="skills-block__grid">
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
