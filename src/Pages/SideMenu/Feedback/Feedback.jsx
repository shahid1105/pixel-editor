// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

// const Feedback = () => {
//   const { user } = useContext(AuthContext);
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const saveData = {
//       feedback: data.feedback,
//       user_name: data.user_name,
//       user_email: data.user_email,
//     };
//     fetch(" /feedback", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(saveData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           // alert msg
//           reset();
//           Swal.fire({
//             title: "submitted successfully.",
//             showClass: {
//               popup: "animate__animated animate__fadeInDown",
//             },
//             hideClass: {
//               popup: "animate__animated animate__fadeOutUp",
//             },
//           });
//         }
//       });
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-center mb-6 text-4xl text-[#78ca99] font-bold uppercase">
//         Report & Feedback
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">User Name</span>
//             </label>
//             <input
//               name="user_name"
//               {...register("user_name")}
//               type="text"
//               value={user?.displayName}
//               className="input input-bordered border-[#7ece9e] border-2"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">User Email</span>
//             </label>
//             <input
//               name="user_email"
//               {...register("user_email")}
//               type="email"
//               value={user?.email}
//               className="input input-bordered border-[#66d492] border-2"
//             />
//           </div>
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Feedback</span>
//           </label>
//           <textarea
//             name="feedback"
//             {...register("feedback")}
//             type="text"
//             defaultValue=""
//             className="input input-bordered border-[#60c186] border-2"></textarea>
//         </div>

//         <div className="form-control mt-6 md:ml-32">
//           <input
//             className="btn bg-[#75d49b] text-white hover:bg-[#9c936c] transition duration-700 ease-in-out"
//             type="submit"
//             value="submit"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Feedback;
