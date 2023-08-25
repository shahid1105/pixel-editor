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
<<<<<<< HEAD
      {/* <Outlet></Outlet> */}
      {isHomeRoute ? <SideMenu /> : <IconMenu></IconMenu>}
      {/* <ImageEditor></ImageEditor> */}
=======
      <Outlet></Outlet>
      {/* {isHomeRoute ? <SideMenu /> : <IconMenu></IconMenu>} */}
      {/* <SideMenu></SideMenu> */}
>>>>>>> 496d7e95fa7a63a6d21aadc8afeceff50c2679c0
    </div>
  );
};

export default Main;
