import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/SideMenu/HomePage/HomePage";
import ThisDevice from "../Pages/SideMenu/ThisDevice/ThisDevice";
import DropBox from "../Pages/SideMenu/DropBox/DropBox";
import OneDrive from "../Pages/SideMenu/OneDrive/OneDrive";
import GoogleDrive from "../Pages/SideMenu/GoogleDrive/GoogleDrive";
import ImageEditor from "../Pages/ImageEditor/ImageEditor";
import Templates from "../Pages/Templates/Templates";
import About from "../Pages/Component/About/About";
import IconMenu from "../Pages/MainPage/IconMenu/IconMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/device",
        element: <ThisDevice></ThisDevice>,
      },
      {
        path: "/dropbox",
        element: <DropBox></DropBox>,
      },
      {
        path: "/oneDrive",
        element: <OneDrive></OneDrive>,
      },
      {
        path: "/googleDrive",
        element: <GoogleDrive></GoogleDrive>,
      },
      {
        path: "/imageEditor",
        element: <ImageEditor></ImageEditor>,
      },
      {
        path: "/iconMenu",
        element: <IconMenu></IconMenu>
      },
      {
        path: "/templates",
        element: <Templates></Templates>,
        path: "/about",
        element: <About></About>
      },
    ],
  },
]);

export default router;
