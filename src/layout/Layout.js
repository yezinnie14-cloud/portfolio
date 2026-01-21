import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TabBar from "./TabBar";
import "./Layout.scss"; 
const Layout = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body">
        <Gnb/>
        <div className="editor">
        <TabBar/>
        <Outlet/>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout