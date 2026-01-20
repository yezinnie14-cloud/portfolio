import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          </Route>
      </Routes>
      </BrowserRouter>
  );
};

export default App