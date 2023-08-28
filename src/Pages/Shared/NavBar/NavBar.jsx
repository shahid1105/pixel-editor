import { FaFacebookF, FaSearch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navMenuLeft = (
    <>
      <ul className="lg:flex  justify-center items-center gap-2 md:gap-4 px-2 font-semibold">
        <li>
          <Link className="hover:text-purple-500" to="/">
            Home
          </Link>
        </li>
        <div className="dropdown">
          <label tabIndex={0} className="hover:text-purple-500 m-1">
            File
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 text-black shadow bg-base-100 rounded-box w-40">
            <li>
              <Link to="/iconMenu">
                <a>New Project</a>
              </Link>
            </li>
            <li>
              <Link to="/canvas">Canvas</Link>
            </li>
            <li>
              <a>Open File</a>
            </li>
            <li>
              <a>Save</a>
            </li>
            <li>
              <a>Share</a>
            </li>
            <li>
              <a>Open File</a>
            </li>
          </ul>
        </div>

        <li>
          <Link className="hover:text-purple-500">Edit</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Layer</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Filter</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">View</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">More</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Image</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Select</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">
            <FaSearch></FaSearch>
          </Link>
        </li>
      </ul>
    </>
  );
  const navMenuRight = (
    <>
      <ul className="flex justify-center items-center gap-2 md:gap-4 font-semibold">
        <li>
          <Link className="hover:text-purple-500" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Learn</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Blog</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">Api</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">
            <a href="https://twitter.com">
              <FaTwitter></FaTwitter>
            </a>
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">
            <a href="https://www.facebook.com">
              <FaFacebookF></FaFacebookF>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <div className="navbar bg-gray-800 md:px-4 h-[50px] text-black md:text-white">
        <div className="dropdown navbar-start lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
            {navMenuLeft}
          </ul>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navMenuLeft}</ul>
        </div>
        <div className="md:navbar-end navbar-center text-white">
          {navMenuRight}
        </div>
      </div>
    </>
  );
};

export default NavBar;
