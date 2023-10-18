import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
             <div className="h-screen flex justify-center items-center text-center bg-rose-200">
                <div>
                    <h1 className="text-3xl md:text-5xl pb-5">Oops! You`re lost.</h1>
                    <p className="text-xl md:text-2xl pb-2">The page you are looking for was not found</p>
                    <div> 
                    <NavLink to="/"> <button className="mt-5  py-3 px-6 bg-rose-500 rounded-md text-xl font-semibold text-white" >Go Home</button></NavLink>
                </div>
                </div>
                <br />
        </div>
        </div>
    );
};

export default Errorpage;