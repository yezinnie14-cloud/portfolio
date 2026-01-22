
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

// List
import TeamList from "./pages/section/List/TeamList";
import CloneList from "./pages/section/List/CloneList";
import PersonalList from "./pages/section/List/PersonalList";
import PracticalList from "./pages/section/List/PracticalList";

// Team Detail
import Pacey from "./pages/section/Detail/Team/Pacey";
import Zio from "./pages/section/Detail/Team/Zio";

// Clone Detail
import Connect from "./pages/section/Detail/Clone/ConnectedWave";
import IfKakao from "./pages/section/Detail/Clone/IfKakao";
import Lg from "./pages/section/Detail/Clone/Lg";
import Momentum from "./pages/section/Detail/Clone/Momentum";

// Personal Detail
import ClosetTrip from "./pages/section/Detail/Personal/ClosetTrip";
import Quiz from "./pages/section/Detail/Personal/Quiz";


import { TabsProvider } from "./context/tabsContext";



const App = () => {
  return (
    <TabsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 기본 페이지 */}
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 프로젝트 */}
            <Route path="/projects" element={<ProjectPage />} />

            {/* 프로젝트 리스트 */}
            <Route path="/projects/team" element={<TeamList />} />
            <Route path="/projects/clone" element={<CloneList />} />
            <Route path="/projects/personal" element={<PersonalList />} />
            <Route path="/projects/practical" element={<PracticalList />} />

            {/* Team 디테일 (여기 추가) */}
            <Route path="/projects/team/pacey" element={<Pacey />} />
            <Route path="/projects/team/zio" element={<Zio />} />
            {/* Clone 디테일 (여기 추가) */}
            <Route path="/projects/clone/connect" element={<Connect />} />
            <Route path="/projects/clone/ifkakao" element={<IfKakao />} />
            <Route path="/projects/clone/lg" element={<Lg />} />
            <Route path="/projects/clone/momentum" element={<Momentum />} />
            {/* Personal 디테일 (여기 추가) */}
            <Route path="/projects/personal/closet-trip" element={<ClosetTrip />} />
            <Route path="/projects/personal/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TabsProvider>
  );
};

export default App;
