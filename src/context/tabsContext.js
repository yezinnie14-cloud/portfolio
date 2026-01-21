// import React, { createContext, useContext, useReducer } from "react";

// const TabsContext = createContext(null);

// const initialState = {
//   tabs: [],       // [{ id, title, path }]
//   activeId: null,
// };

// function tabsReducer(state, action) {
//   switch (action.type) {
//     case "OPEN_TAB": {
//       const tab = action.payload;
//       const exists = state.tabs.some((t) => t.id === tab.id);

//       if (exists) {
//         return { ...state, activeId: tab.id };
//       }

//       return {
//         ...state,
//         tabs: [...state.tabs, tab],
//         activeId: tab.id,
//       };
//     }

//     case "SET_ACTIVE":
//       return { ...state, activeId: action.payload };

//     case "CLOSE_TAB": {
//       const closingId = action.payload;
//       const idx = state.tabs.findIndex((t) => t.id === closingId);
//       if (idx === -1) return state;

//       const newTabs = state.tabs.filter((t) => t.id !== closingId);

//       // active 아닌 탭 닫으면 active 유지
//       if (state.activeId !== closingId) {
//         return { ...state, tabs: newTabs };
//       }

//       // active 탭 닫으면 왼쪽 우선, 없으면 오른쪽/마지막
//       const nextTab = newTabs[idx - 1] || newTabs[idx] || null;

//       return {
//         ...state,
//         tabs: newTabs,
//         activeId: nextTab ? nextTab.id : null,
//       };
//     }

//     default:
//       return state;
//   }
// }

// export function TabsProvider({ children }) {
//   const [state, dispatch] = useReducer(tabsReducer, initialState);

//   const value = {
//     tabs: state.tabs,
//     activeId: state.activeId,
//     openTab: (tab) => dispatch({ type: "OPEN_TAB", payload: tab }),
//     setActive: (id) => dispatch({ type: "SET_ACTIVE", payload: id }),
//     closeTab: (id) => dispatch({ type: "CLOSE_TAB", payload: id }),
//   };

//   return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
// }

// export function useTabs() {
//   const ctx = useContext(TabsContext);
//   if (!ctx) throw new Error("useTabs must be used within TabsProvider");
//   return ctx;
// }
import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

const DEFAULT_TAB = {
  id: "readme",
  title: "README.md",
  path: "/",
};

export function TabsProvider({ children }) {
  const [tabs, setTabs] = useState([DEFAULT_TAB]);   // ✅ 처음부터 README 열려있게
  const [activeId, setActiveId] = useState("readme"); // ✅ active도 README

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

      // ✅ README는 닫히지 않게 하고 싶으면(선택)
      // if (id === "readme") return prev;

      // 닫은 탭이 active였으면 다른 탭 활성화
      if (id === activeId) {
        const fallback = next[next.length - 1] || DEFAULT_TAB;
        setActiveId(fallback.id);
      }
      return next.length ? next : [DEFAULT_TAB]; // ✅ 최소 README 하나는 남김(선택)
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
