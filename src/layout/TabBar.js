import { useNavigate } from "react-router-dom";
import { useTabs } from "../context/tabsContext";

export default function TabBar() {
  const navigate = useNavigate();
  const { tabs, activeId, setActive, closeTab } = useTabs();

  if (tabs.length === 0) return null;

  const handleTabClick = (tab) => {
    setActive(tab.id);
    navigate(tab.path);
  };

  const handleClose = (e, tabId) => {
    e.stopPropagation();
    closeTab(tabId);
  };

  return (
    <div className="tabbar-wrap">
    <div className="tabbar">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeId === tab.id ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          <span>{tab.title}</span>
          <button onClick={(e) => handleClose(e, tab.id)}>×</button>
        </div>
      ))}
    </div>
    </div>
  );
}
