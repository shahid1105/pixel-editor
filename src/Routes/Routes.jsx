import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/SideMenu/HomePage/HomePage";
import ThisDevice from "../Pages/SideMenu/ThisDevice/ThisDevice";
import DropBox from "../Pages/SideMenu/DropBox/DropBox";
import OneDrive from "../Pages/SideMenu/OneDrive/OneDrive";
import GoogleDrive from "../Pages/SideMenu/GoogleDrive/GoogleDrive";
import ImageEditor from "../Pages/ImageEditor/ImageEditor";
import Templates from "../Pages/Templates/Templates";
import Registration from "../Login-Registration/Registration";
import Login from "../Login-Registration/Login";
import IconMenu from "../Pages/MainPage/IconMenu/IconMenu";
import About from "../Pages/Component/About/About";
import SideMenu from "../Pages/SideMenu/SideMenu";
import Canvas from "../Pages/Component/About/Canvas/Canvas";
import App from "../App";
// import { Canvas } from "fabric/fabric-impl";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SideMenu></SideMenu>,
      },
      {
        path: "/home",
        element: <SideMenu></SideMenu>,
      },
      {
        path: "/device",
        element: <ThisDevice></ThisDevice>,
      },
      {
        path: "/canvas",
        element: <Canvas />,
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
        element: <IconMenu></IconMenu>,
      },
      {
        path: "/templates",
        element: <Templates></Templates>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "chat",
        element: <App></App>,
      },
    ],
  },
]);

export default router;
