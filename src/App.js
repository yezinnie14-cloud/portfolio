import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import { TabsProvider } from "./context/tabsContext";
const App = () => {
  return (
    <TabsProvider>
<BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          </Route>
      </Routes>
      </BrowserRouter>
      </TabsProvider>
  );
};

export default App