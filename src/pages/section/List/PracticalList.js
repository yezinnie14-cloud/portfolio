import Listup from "../../../components/common/Listup";
import projects from "../../../assets/data/Project.json";
import "./List.scss";
const PracticalList = () => {
  const items = projects.practical;
  return (
   <section className="list">
      <h2 className="title"># Practical Projects</h2>
{items.map((item) => (
        <Listup key={item.id} {...item} />
      ))}
    </section>
  )
}

export default PracticalList