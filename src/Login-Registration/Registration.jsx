import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { AuthContext } from "../Pages/Providers/AuthProvider";

const Registration = () => {
  const { createUser, userProfile, userProfileUpdate } =
    useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;

        userProfile(data.name, data.photo).then(() => {
          userProfileUpdate(data.name, data.photo);

          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photo,
            role: "user",
          };

          fetch(" /users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();

                Swal.fire({
                  title: "User created successfully.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }
            });
        });

        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen   rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
          <div className="card-body">
            <h1 className="text-3xl text-black font-bold text-center uppercase">
              Registration{" "}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="input input-bordered border-purple-600 border-2 text-black"
                  name="name"
                />
              </div>
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  {...register("photo")}
                  placeholder="photo URL"
                  className="input input-bordered border-purple-600 border-2 text-black"
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-purple-600 text-white hover:bg-violet-500 transition duration-700 ease-in-out"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-black">
              Already Have an Account?
              <Link className="text-blue-900 font-bold" to="/login">
                Login
              </Link>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
