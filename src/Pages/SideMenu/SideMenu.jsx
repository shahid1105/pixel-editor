import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiLogIn, BiSolidDashboard } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import HomePage from "./HomePage/HomePage";
import Hamburger from "hamburger-react";
import { useState } from "react";

const SideMenu = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const sideMenuOption = (
    <>
      <div className="bg-gray-200 w-fit text-black rounded-full mx-2 md:mx-2 lg:mx-4 my-1">
        {user ? (
          <div className="flex md:flex-col justify-center items-center ">
            <div>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full border-black border-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <div>
              <p className="px-2">{user.displayName}</p>
            </div>
          </div>
        ) : (
          <div className="flex md:flex-col justify-center items-center">
            <div className="avatar mr-6">
              <div className="w-10 h-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU" />
              </div>
            </div>
            <p className="px-2">Not have User</p>
          </div>
        )}
      </div>
      <ul className="menu p-4 md:px-2 w-60 text-md h-full text-black">
        <li className="text-center ">
          <Link to="/home" className="sidebar-link">
            <FaHome className="sidebar-icon" /> Home
          </Link>
        </li>
        <li className="text-center ">
          <Link to="/dashboard" className="sidebar-link">
            <BiSolidDashboard className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li className="text-center">
          {user ? (
            <button onClick={handleLogout}>
              {" "}
              <PiSignOutBold></PiSignOutBold> LogOut
            </button>
          ) : (
            <Link to="/login" className="sidebar-link">
              {" "}
              <BiLogIn className="sidebar-icon"></BiLogIn> Login
            </Link>
          )}
        </li>
      </ul>
    </>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div className="col-span-2 bg-gray-200 text-black hidden lg:block md:block">
        {/* Hamburger  */}
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={toggleMenu} />
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {sideMenuOption}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="menu menu-horizontal px-1">{sideMenuOption}</ul>
        </div>
      </div>
      <div className="col-span-10">
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default SideMenu;
