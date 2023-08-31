import React from "react";
import { FaHome } from "react-icons/fa";
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-60 text-md h-full  bg-gray-600 text-white">

          <li className="text-center ">
            <Link to="/" className="sidebar-link">
              <FaHome className="sidebar-icon" /> Home
            </Link>
          </li>

          <li className="text-center ">
            <Link to="/dashboard/manageUsers" className="sidebar-link">
              <AiOutlineUsergroupAdd className="sidebar-icon" /> Users
            </Link>
          </li>

         
          
          
          
          
        </ul>
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
           
           
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/manageUsers" >Users</NavLink>
            </li>
          </ul> */}
      </div>
    </div>
  );
};

export default Dashboard;
