import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="font-Roboto bg-blue-200">
           <Navbar> <button className="p-4 bg-slate-400 rounded-lg"> 
                Drak Mode
            </button></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>

        </div>
    );
};

export default Layout;