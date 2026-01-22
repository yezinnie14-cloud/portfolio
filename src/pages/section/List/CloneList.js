import Listup from "../../../components/common/Listup";
import "./List.scss";

const CloneList = () => {
  return (
    <section className="list">
      <h2 className="title"># Clone Projects</h2>

      <Listup to="/projects/clone/connect" title="Connect" />
      <Listup to="/projects/clone/ifkakao" title="ifKakao" />
      <Listup to="/projects/clone/lg" title="LG Clone" />
      <Listup to="/projects/clone/momentum" title="Momentum" />
    </section>
  );
};

export default CloneList;