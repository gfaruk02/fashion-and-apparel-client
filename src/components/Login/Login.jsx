import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

  const {signInUser, googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signInUser(email, password)
    .then(Result=>{
      console.log(Result.user);
      e.target.reset();
      navigate(location?.state?location.state : "/");
    })
    .catch(error=>{
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'You Email or Password is incorrect. Please try again.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })

  }
  const handleGoogleLogIn = () =>{
    googleSignIn()
    .then(Result=>{
      console.log(Result.user);
      navigate(location?.state?location.state : "/");
    })
    .catch(error=>{
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'You Email is incorrect. Please try again.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }
    return (
        <div>
          <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="mt-12 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center pt-6 px-3 text-green-700">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex items-center relative ">
          <input name="password" type={showPassword? "text" :"password"} placeholder="password" className=" w-full input input-bordered" required />
          <span className=" absolute right-2" onClick={()=>setShowPassword(!showPassword)}>
          {
              showPassword ? <FaEyeSlash className="  text-green-400 text-lg"></FaEyeSlash> : <FaEye className=" text-green-700 text-lg"></FaEye>
          }
          </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-green-700 hover:bg-green-500 text-white">Login</button>
        </div>
      </form>
      <div> 
        <p className=" text-lg pl-3 pb-5"> <button onClick={handleGoogleLogIn}>Login with Google</button></p>
      </div>
      <div>
        <p className="text-lg pl-3 pb-5">Do not Have an Account? Please <Link className="text-green-700 font-bold" to="/register">Register</Link> </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;