import { Link } from "react-router-dom";


const Login = () => {

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  }
    return (
        <div>
          <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="mt-12 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center pt-6 px-3">Login now!</h1>
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
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div> 
        <p className=" text-lg"> Login with Google</p>
      </div>
      <div>
        <p className="text-lg">Do not Have an Account? Please <Link to="/register">Register</Link> </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;