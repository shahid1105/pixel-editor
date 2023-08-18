import { Link, Outlet } from "react-router-dom";
import { FaDesktop, FaDropbox, FaGoogleDrive, FaHome } from "react-icons/fa";
import { GrOnedrive } from "react-icons/Gr";
import { BiLogIn } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const SideMenu = () => {
  const { logOut, user } = useContext(AuthContext);

  //logout

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="drawer lg:drawer-open text-gray-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center mt-5">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full bg-gray-200 text-base-content">
          {/* user profile */}

          <div className="bg-white text-black rounded-full mb-5">
            {user ? (
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="px-6 text-lg">{user.displayName}</p>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU" />
                  </div>
                </div>
                <p className="px-6 text-lg">..........</p>
              </div>
            )}
          </div>

          {/* Sidebar content here */}
          <li className="text-center">
            <Link to="/home" className="sidebar-link">
              <FaHome className="sidebar-icon" /> Home
            </Link>
          </li>
          <li className="text-center">
            <Link to="/device" className="sidebar-link">
              <FaDesktop className="sidebar-icon" /> This Device
            </Link>
          </li>
          <li className="text-center">
            <Link to="/dropbox" className="sidebar-link">
              <FaDropbox className="sidebar-icon" /> Dropbox
            </Link>
          </li>
          <li className="text-center">
            <Link to="/oneDrive" className="sidebar-link">
              <GrOnedrive className="sidebar-icon" /> OneDrive
            </Link>
          </li>
          <li className="text-center">
            <Link to="/googleDrive" className="sidebar-link">
              <FaGoogleDrive className="sidebar-icon" /> Google Drive
            </Link>
          </li>

          {/* registration and login btn */}
          <li className="text-center">
            {/* <Link to="/registration" className="sidebar-link">
              {" "}
              <BiLogIn className="sidebar-icon"></BiLogIn>Registration
            </Link> */}

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
      </div>
    </div>
  );
};

export default SideMenu;
