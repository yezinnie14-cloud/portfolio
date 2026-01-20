import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header/>
      <Gnb/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout