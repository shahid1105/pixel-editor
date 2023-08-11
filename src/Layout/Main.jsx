import NavBar from "../Pages/Shared/NavBar/NavBar";
import SideMenu from "../Pages/SideMenu/SideMenu";

const Main = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <NavBar></NavBar>
      <div className="bg-black">
        
      <SideMenu></SideMenu>
      <p>Hello</p>
      </div>
    </div>
  );
};

export default Main;
