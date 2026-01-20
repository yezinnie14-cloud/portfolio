import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body">
        <Gnb/>
        <Outlet/>
      </div>
      <Footer />
    </div>
  )
}

export default Layout