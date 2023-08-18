import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { AuthContext } from "../Pages/Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit,reset} = useForm();
   

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
          .then((result) => {
            const user = result.user;
            reset();
            Swal.fire({
              title: 'User login successful',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
    
          
        
    
    
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div className="hero min-h-screen  rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center uppercase text-black">Login </h1>
  
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="email"
                    className="input input-bordered border-purple-600 border-2 text-black"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="password"
                    className="input input-bordered border-purple-600 border-2 text-black"
                    name="password"
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-purple-600 text-white hover:bg-violet-500 transition duration-700 ease-in-out"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>
              <p className="text-center text-black">
                New to Here?
                <Link className="text-blue-900 font-bold" to="/registration">
                  Registration
                </Link>
              </p>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;