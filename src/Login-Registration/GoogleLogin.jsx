import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
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
          .then(() => {});

        Swal.fire({
          title: "User login successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="">
      <div className="divider">OR</div>
      <div className="form-control mt-6">
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-purple-600 hover:bg-violet-500">
          {" "}
          <FcGoogle className="text-3xl"></FcGoogle> Login With Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
