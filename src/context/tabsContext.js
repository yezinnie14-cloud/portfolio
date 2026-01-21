import React, { createContext, useContext, useReducer } from "react";

const TabsContext = createContext(null);

const initialState = {
  tabs: [],       // [{ id, title, path }]
  activeId: null,
};

function tabsReducer(state, action) {
  switch (action.type) {
    case "OPEN_TAB": {
      const tab = action.payload;
      const exists = state.tabs.some((t) => t.id === tab.id);

      if (exists) {
        return { ...state, activeId: tab.id };
      }

      return {
        ...state,
        tabs: [...state.tabs, tab],
        activeId: tab.id,
      };
    }

    case "SET_ACTIVE":
      return { ...state, activeId: action.payload };

    case "CLOSE_TAB": {
      const closingId = action.payload;
      const idx = state.tabs.findIndex((t) => t.id === closingId);
      if (idx === -1) return state;

      const newTabs = state.tabs.filter((t) => t.id !== closingId);

      // active 아닌 탭 닫으면 active 유지
      if (state.activeId !== closingId) {
        return { ...state, tabs: newTabs };
      }

      // active 탭 닫으면 왼쪽 우선, 없으면 오른쪽/마지막
      const nextTab = newTabs[idx - 1] || newTabs[idx] || null;

      return {
        ...state,
        tabs: newTabs,
        activeId: nextTab ? nextTab.id : null,
      };
    }

    default:
      return state;
  }
}

export function TabsProvider({ children }) {
  const [state, dispatch] = useReducer(tabsReducer, initialState);

  const value = {
    tabs: state.tabs,
    activeId: state.activeId,
    openTab: (tab) => dispatch({ type: "OPEN_TAB", payload: tab }),
    setActive: (id) => dispatch({ type: "SET_ACTIVE", payload: id }),
    closeTab: (id) => dispatch({ type: "CLOSE_TAB", payload: id }),
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used within TabsProvider");
  return ctx;
}
