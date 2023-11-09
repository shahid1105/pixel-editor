import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        " /users"
      );
      return res.data;
    },
  });
  console.log(users);

  //make admin
  const handleMakeAdmin = (user) => {
    fetch(
      ` /users/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: "admin" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //delete user
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` /users/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-4xl text-[#635a71] font-bold uppercase">
        manage users
      </h2>
      <div className="uppercase">Total User:{users.length}</div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full sm:w-auto">
          {/* head */}
          <thead className="text-xl sm:text-base">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th className="whitespace-nowrap">{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap">{user.name}</td>
                <td className="whitespace-nowrap">{user.email}</td>
                <td className="whitespace-nowrap">{user.role}</td>

                <td>
                  <button
                    onClick={() => {
                      handleMakeAdmin(user);
                    }}
                    className="btn text-white hover:bg-[#3aafda] bg-[#76837b] sm:whitespace-nowrap"
                    disabled={user.role === "admin"}>
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user);
                    }}
                    className="btn text-white hover:bg-[#3aafda] bg-[#76837b] sm:whitespace-nowrap"
                    //   disabled={user.role === "instructor"}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
