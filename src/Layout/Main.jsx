import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import SideMenu from "../Pages/SideMenu/SideMenu";
import IconMenu from "../Pages/MainPage/IconMenu/IconMenu";
import ImageEditor from "../Pages/ImageEditor/ImageEditor";

const Main = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/home";

  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      {/* {isHomeRoute ? <SideMenu /> : <IconMenu></IconMenu>} */}
      {/* <SideMenu></SideMenu> */}
    </div>
  );
};

export default Main;
