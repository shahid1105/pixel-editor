import { Link, Outlet } from "react-router-dom";
import { FaDesktop, FaDropbox, FaGoogleDrive, FaHome } from "react-icons/fa";
import { GrOnedrive } from "react-icons/Gr";

const SideMenu = () => {
  return (
    <div className="drawer lg:drawer-open text-gray-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full bg-gray-200 text-base-content">
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
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
