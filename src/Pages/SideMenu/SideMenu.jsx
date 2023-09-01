
import { Link, Outlet } from "react-router-dom";
import { FaDesktop, FaDropbox, FaGoogleDrive, FaHome } from "react-icons/fa";
import { GrOnedrive } from "react-icons/Gr";
import { BiLogIn, BiMessage ,BiSolidDashboard} from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import HomePage from "./HomePage/HomePage";
import Chat from "../chat";
import {MdOutlineFeedback} from "react-icons/md"

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
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-2 bg-gray-600">
        <div className="bg-white text-black rounded-full mx-2 my-5">
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
        <ul className="menu p-4 w-60 text-md h-full text-white">
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
          <li className="text-center">
            <Link to="/chat" className="sidebar-link">
              <BiMessage className="sidebar-icon" /> Chat
            </Link>
          </li>
          <li className="text-center">
            <Link to="/feedback" className="sidebar-link">
              <MdOutlineFeedback className="sidebar-icon" /> Report & Feedback
            </Link>
          </li>
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
      <div className="col-span-10">
        <HomePage></HomePage>
      </div>
    </div>
    
  );
};


export default SideMenu;
