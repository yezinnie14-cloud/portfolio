import GnbFile from "./GnbFile";
import GnbData from "../assets/data/Gnb.json";

export default function Gnb() {
  return (
    <aside className="gnb">
      <GnbFile node={GnbData} depth={0} />
    </aside>
  );
}
