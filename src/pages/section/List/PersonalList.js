import Listup from "../../../components/common/Listup";
import projects from "../../../assets/data/Project.json";
import "./List.scss";

const PersonalList = () => {
  const items = projects.personal;
  return (
    <section className="list">
      <h2 className="title"># Personal Projects</h2>

      {items.map((item) => (
        <Listup key={item.id} {...item} />
      ))}

    </section>
  );
};

export default PersonalList;