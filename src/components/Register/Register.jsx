import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'


const Register = () => {

  const {registerUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState();
  const [success, setSuccess] = useState();
  const [showPassword, setShowPassword] = useState();



  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);

    setSuccess('');
    if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)){
      // setRegisterError('Password Minimum 6 characters, at least one uppercase letter, one number and one special character:');
      Swal.fire({
        title: 'Error!',
        text: 'Password Minimum 6 characters, at least one uppercase letter, one number and one special character:',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    else{
      setRegisterError('');
      registerUser(email, password)
      .then(result=>{
        // console.log(result.user);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'CONGRATULATIONS! You have now successfully registered! ',
          showConfirmButton: false,
          timer: 1500
        })
        //update user
        updateProfile(result.user,{
          displayName:name,
          photoURL: photo,
        })
        e.target.reset();
        navigate("/")
      })
      .catch(error =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The email address is already in use. Please use a different email address',
        })
        console.error(error);
      })
    }
  }

    return (
        <div>
          {
           registerError &&  <p>{registerError}</p>
          }
          {
            success && <p> {success} </p>
          }
<div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center pt-4 px-3 text-green-700">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body pt-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <input name="password" type={showPassword? "text":"password"} placeholder="password" className="input input-bordered w-full" required />
          <span className=" absolute right-2" onClick={()=>setShowPassword(!showPassword)}>
          {
              showPassword ? <FaEyeSlash className=" text-green-400 text-lg"></FaEyeSlash> : <FaEye className=" text-green-700 text-lg"></FaEye>
          }
          </span>
        </div>
        </div>
        <div className="form-control mt-4 ">
          <button className="btn btn-primary bg-green-700 hover:bg-green-500 text-white">Register</button>
        </div>
      </form>

      <div className="md:p-2">
        <p className="text-lg pl-3 pb-5">Already! Have an Account? Please <Link className="text-green-700 font-bold" to="/login">Sign In</Link> </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;