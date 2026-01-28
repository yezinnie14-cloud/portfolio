import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

const DEFAULT_TAB = {
  id: "readme",
  title: "README.md",
  path: "/",
};

export function TabsProvider({ children }) {
  const [tabs, setTabs] = useState([DEFAULT_TAB]);   // 처음부터 README 열려있게
  const [activeId, setActiveId] = useState("readme"); //  active도 README

  const openTab = (tab) => {
    setTabs((prev) => {
      const exists = prev.some((t) => t.id === tab.id);
      return exists ? prev : [...prev, tab];
    });
    setActiveId(tab.id);
  };

  const setActive = (id) => setActiveId(id);

  const closeTab = (id) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.id !== id);

      // README는 닫히지 않게 하고 싶으면(선택)
      // if (id === "readme") return prev;

      // 닫은 탭이 active였으면 다른 탭 활성화
      if (id === activeId) {
        const fallback = next[next.length - 1] || DEFAULT_TAB;
        setActiveId(fallback.id);
      }
      return next.length ? next : [DEFAULT_TAB]; // 최소 README 하나는 남김(선택)
    });
  };

  return (
    <TabsContext.Provider
      value={{ tabs, activeId, openTab, setActive, closeTab }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export const useTabs = () => useContext(TabsContext);
