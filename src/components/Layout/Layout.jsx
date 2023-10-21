import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="font-Roboto">
           <div className=" sticky top-0 z-50">
           <Navbar></Navbar> 
           </div>
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
    );
};

export default Layout;