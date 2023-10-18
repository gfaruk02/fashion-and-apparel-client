import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut =()=>{
    logOut()
      .then(()=> console.log('User Logged Out Successfully'))
      .catch(error=> console.error(error))
  }
    const NavLinks = <>
        <li className=" font-semibold text-base text-green-600"> 
            <NavLink
                to="/"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Home
            </NavLink>
        </li>
        
        <li className=" font-semibold text-base text-green-600"> 
            <NavLink
                to="/addproduct"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Add Product
            </NavLink>
        </li>
        <li className=" font-semibold text-base text-green-600"> 
            <NavLink
                to="/register"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
                Register
            </NavLink>
        </li>
        {/* <li className=" font-semibold text-base text-green-600"> 
            <NavLink
                to="/login"
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
            >
               Sign in
            </NavLink>
        </li> */}
    </>

    return (
<div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            NavLinks
        }
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">Curate Shop</a> */}
    <img className="w-12" src={'https://i.ibb.co/k580LvD/300504449-478370404302190-8942857416603116987-n.jpg'} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        NavLinks
    }
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>
      </div>
{
    user ? <>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Name : {user.displayName}
          </a>
        </li>
        <li><a>Email: {user.email} </a></li>
        <li> <button onClick={handleSignOut}>Sign Out</button></li>
      </ul>
    </div>
    </> 
    : 
    <Link to='/login'>
    <button className=" bg-rose-700 rounded-lg hover:bg-rose-400 text-white font-semibold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base">Login</button>
  </Link>

}

</div>
</div>
    );
};

export default Navbar;