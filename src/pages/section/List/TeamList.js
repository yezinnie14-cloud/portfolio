import "./List.scss";
import Listup from "../../../components/common/Listup";
import projects from "../../../assets/data/Project.json";

function TeamList() {
  const items = projects.team;

  return (
    <section className="list">
      <h2 className="title"># Team Projects</h2>
      <p className="sub">제가 참여한 주요 팀 프로젝트들입니다.</p>

      {items.map((item) => (
        <Listup key={item.id} {...item} />
      ))}
    </section>
  );
}

export default TeamList;


