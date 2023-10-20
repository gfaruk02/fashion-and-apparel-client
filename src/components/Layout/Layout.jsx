import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="font-Roboto">
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>

        </div>
    );
};

export default Layout;