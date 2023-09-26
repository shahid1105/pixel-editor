import { FaFacebookF, FaHome, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../Component/About/Canvas/Modal";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiLogIn, BiSolidDashboard } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleNewProjectClick = () => {
    setShowModal(true);
    setMenuVisible(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navMenuLeft = (
    <>
      <ul className="lg:flex text-black md:text-white justify-center items-center gap-2 md:gap-4 px-2 font-semibold">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <div className="dropdown">
      <label
        tabIndex={0}
        className="cursor-pointer"
        onClick={toggleMenu}
      >
        File
      </label>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-2 text-black shadow bg-base-100 rounded-box w-40 ${isMenuVisible ? '' : 'hidden'}`}
      >
        <li>
          <button className="" onClick={handleNewProjectClick}>
            New Project
          </button>
        </li>
      </ul>
    </div>

      </ul>
    </>
  );
  const navMenuRight = (
    <>
      <ul className="flex justify-center items-center gap-2 md:gap-4 font-semibold">
        <Link className="mx-5 md:hidden" to="/home">
          <FaHome></FaHome>
        </Link>
        <li>
          <Link className="hover:text-purple-500" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/learn" className="hover:text-purple-500">
            Learn
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-purple-500">
            Blog
          </Link>
        </li>
        <li>
          <a
            className="hover:text-purple-500"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li>
          <a
            className="hover:text-purple-500"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF></FaFacebookF>
          </a>
        </li>
      </ul>
    </>
  )

// sideMenu option 
const { logOut, user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu2 = () => {
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
      <div className="bg-gray-200 w-fit text-black rounded-full mx-2 md:mx-4  my-1">
        {user ? (
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full border-black border-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <p className="px-2">{user.displayName}</p>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU" />
              </div>
            </div>
            <p className="px-2">Not have User</p>
          </div>
        )}
      </div>
      <ul className="menu p-4 w-60 text-md h-full text-black">
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
    <>
      <div className="navbar bg-gray-400 md:px-4  h-[50px] text-black md:text-black">
        {/* sideMenu option  */}
        <div className="h-screen md:hidden lg:hidden">
      <div className="text-black">
        {/* Hamburger  */}
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={toggleMenu2} />
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {sideMenuOption}
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{sideMenuOption}</ul>
        </div>
      </div>
    </div>
        <div className="dropdown md:navbar-start lg:hidden">
          {/* <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label> */}
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit hidden md:block"
          >
            {navMenuLeft}
          </ul>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navMenuLeft}</ul>
        </div>
        <div className="md:navbar-end navbar-center text-white">
          {navMenuRight}
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {" "}
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
