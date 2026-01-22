import Listup from "../../../components/common/Listup";
import projects from "../../../assets/data/Project.json";
import "./List.scss";

const CloneList = () => {
  const items = projects.clone;
  return (
    <section className="list">
      <h2 className="title"># Clone Projects</h2>

      {items.map((item) => (
        <Listup key={item.id} {...item} />
      ))}
    </section>
  );
};

export default CloneList;