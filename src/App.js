import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import TeamList from "./pages/section/List/TeamList";
import CloneList from "./pages/section/List/CloneList";
import PersonalList from "./pages/section/List/PersonalList";
import PracticalList from "./pages/section/List/PracticalList";
import { TabsProvider } from "./context/tabsContext";
const App = () => {
  return (
    <TabsProvider>
<BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/team" element={<TeamList />} />
          <Route path="/projects/clone" element={<CloneList />} />
          <Route path="/projects/personal" element={<PersonalList />} />
          <Route path="/projects/practical" element={<PracticalList />} />
          <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
          </Route>
      </Routes>
      </BrowserRouter>
      </TabsProvider>
  );
};

export default App