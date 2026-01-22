import Listup from "../../../components/common/Listup";
import "./List.scss";

const PersonalList = () => {
  return (
    <section className="list">
      <h2 className="title"># Personal Projects</h2>

      <Listup to="/projects/personal/closet-trip" title="Closet Trip" />
      <Listup to="/projects/personal/quiz" title="Quiz" />
    </section>
  );
};

export default PersonalList;