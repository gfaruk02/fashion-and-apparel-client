import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,photo,email,password);
    }

    return (
        <div>
                   <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center pt-4 px-3">Register now!</h1>
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
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-4 ">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="p-2">
        <p className="text-lg">Already! Have an Account? Please <Link to="/login">Sign In</Link> </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;