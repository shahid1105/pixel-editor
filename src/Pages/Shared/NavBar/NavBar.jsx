import { FaFacebookF, FaSearch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import NewProjectForm from "../../Component/About/NewProject/NewProjectForm";
// import Modal from "../../Component/About/Canvas/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../Component/About/Canvas/Modal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => {
  //     console.log("hello");
  //     console.log(data);
  //     setCanvasInfo(data);
  //     console.log('canvasInfo : '+canvasInfo);

  //     // sendDataToCanvas(data);
  //     setShowModal(false);
  //     // setShowModal(true)

  // }
  // const openModal = () =>{
  //   window.new_project_modal.showModal();
  //    setShowModal(true)
  // }

  const navMenuLeft = (
    <>
      <ul className="lg:flex  justify-center items-center gap-2 md:gap-4 px-2 font-semibold">
        <li>
          <Link className="hover:text-purple-500" to="/">
            Home
          </Link>
        </li>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="hover:text-purple-500 m-1 cursor-pointer"
            onClick={(e) =>
              e.currentTarget.nextSibling.classList.toggle("hidden", false)
            }>
            File
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 text-black shadow bg-base-100 rounded-box w-40 hidden">
            <li>
              <>
                <button className="" onClick={() => setShowModal(true)}>
                  {" "}
                  New Project{" "}
                </button>
              </>
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
          <Link to='/iconMenu' className="hover:text-purple-500">Filter</Link>
        </li>
        <li>
          <Link className="hover:text-purple-500">View</Link>
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
          <Link to='/learn' className="hover:text-purple-500">Learn</Link>
        </li>
        <li>
          <Link to='/blog' className="hover:text-purple-500">Blog</Link>
        </li>
        <li>
          <Link to='/api' className="hover:text-purple-500">Api</Link>
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

        {/* <NewProjectForm showModal={showModal} setShowModal={setShowModal}>
          {" "}
        </NewProjectForm> */}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {" "}
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
