// import Listup from "../../../components/common/Listup";
// import "./List.scss";
// const TeamList = () => {
//   return (
//     <section className="list">
//       <h2 className="title"># Team Projects</h2>

//       <Listup />
//       <Listup />
//     </section>
//   );
// };

// export default TeamList;
import Listup from "../../../components/common/Listup";
import "./List.scss";

const TeamList = () => {
  return (
    <section className="list">
      <h2 className="title"># Team Projects</h2>

      <Listup to="/projects/team/zio" />
      <Listup to="/projects/team/pacey" />
    </section>
  );
};

export default TeamList;


