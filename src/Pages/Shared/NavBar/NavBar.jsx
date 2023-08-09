import { FaFacebookF, FaSearch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navMenuLeft = (
    <>
      <ul className="flex justify-center items-center gap-2 md:gap-4 px-2 font-semibold">
        <li>
          <Link to="/">File</Link>
        </li>
        <li>
          <Link to="/">Edit</Link>
        </li>
        <li>
          <Link to="/">Layer</Link>
        </li>
        <li>
          <Link to="/">Filter</Link>
        </li>
        <li>
          <Link to="/">View</Link>
        </li>
        <li>
          <Link to="/">More</Link>
        </li>
        <li>
          <Link to="/">Image</Link>
        </li>
        <li>
          <Link to="/">Select</Link>
        </li>
        <li>
          <Link to="/"><FaSearch></FaSearch></Link>
        </li>
      </ul>
    </>
  );
  const navMenuRight = (
    <>
      <ul className="flex justify-center items-center gap-2 md:gap-4 font-semibold">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Learn</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Api</Link>
        </li>
        <li>
          <Link to="/"><FaTwitter></FaTwitter></Link>
        </li>
        <li>
          <Link to="/"><FaFacebookF></FaFacebookF></Link>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar bg-gray-800 md:px-4 text-black md:text-white">
    <div className="dropdown navbar-start">
      <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
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
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit"
      >
        {navMenuLeft}
      </ul>
    </div>
    <div className="navbar-start hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{navMenuLeft}</ul>
    </div>
    <div className="md:navbar-end navbar-center text-white">{navMenuRight}</div>
  </div>
  );
};

export default NavBar;
