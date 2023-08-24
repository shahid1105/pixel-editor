import { SketchPicker } from "react-color";
import { useState } from "react";

import Icon from "./Icon";
import { FaHome } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MdLensBlur } from "react-icons/md";
import { Link } from "react-router-dom";
import SideMenu from "../../SideMenu/SideMenu";
import ImageEditor from "../../ImageEditor/ImageEditor";
import { useSelector } from "../../../Redux/Store";

const IconMenu = () => {
  const selectedImage = useSelector((state) => state.selectedImage);

  const [details, setDetails] = useState("");
  const [crop, setCrop] = useState("");
  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vertical: 1,
    horizontal: 1,
  });

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });
        const stateData = {
          image: reader.result,
          brightness: 100,
          grayscale: 0,
          sepia: 0,
          saturate: 100,
          contrast: 100,
          hueRotate: 0,
          rotate: 0,
          vertical: 1,
          horizontal: 1,
        };
        storeData.insert(stateData);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const [currentColor, setCurrentColor] = useState();
  const [columns, setColumns] = useState(1);

  const handleOnchange = (color) => {
    setCurrentColor(color.hex);
  };

  const toggleColumns = () => {
    setColumns(columns === 1 ? 2 : 1);
  };

  const naveItem = <></>;

  return (
    <>
      <div className="">
        <div className="navbar bg-gray-600 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {naveItem}
              </ul>
            </div>
            <div className="ml-5">
              <FaHome></FaHome>
            </div>
            <div className="divider divider-horizontal "></div>
            <div>
              <FaPaintBrush></FaPaintBrush>
            </div>
            <div className="divider divider-horizontal"></div>
            <div>
              <MdLensBlur></MdLensBlur>
            </div>
            <div className="divider divider-horizontal "></div>
            <div className="flex">
              <h3>Mode:</h3>
              <input
                type="text"
                placeholder="Normal"
                className="border-solid px-2 rounded-md ml-1 w-full max-w-xs"
              />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{naveItem}</ul>
          </div>
        </div>
        <div className="icone grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-1">
          <div className={`bg-slate-700 text-white`}>
            <button onClick={toggleColumns} className="text-sm ml-3">
              {columns === 1 ? (
                <BsChevronDoubleLeft />
              ) : (
                <BsChevronDoubleRight />
              )}
            </button>
            <div
              className={`p-4 grid grid-cols-10 md:grid-cols-${columns} gap-2  md:col-span-1 bg-slate-700 text-white`}>
              <Icon></Icon>
            </div>
          </div>
          <div className="col-span-8 bg-purple-400">
            <ImageEditor></ImageEditor>
          </div>
          <div
            style={{ backgroundColor: currentColor }}
            className="p-5 col-span-3 ">
            <SketchPicker
              className="mx-auto"
              color={currentColor}
              onChangeComplete={handleOnchange}
            />
          </div>
        </div>
      </div>
      <div className="icone h-[600px] grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-1">
        <div className={`bg-slate-600 text-white`}>
          <button onClick={toggleColumns} className="text-sm ml-3">
            {columns === 1 ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
          </button>
          <div
            className={`p-4 grid grid-cols-10 md:grid-cols-${columns} gap-2 bg-slate-700 text-white`}>
            <Icon></Icon>
          </div>
        </div>
        <div className="col-span-8 bg-purple-400">
          <ImageEditor></ImageEditor>
        </div>
        <div
          style={{ backgroundColor: currentColor }}
          className="p-5 col-span-3 ">
          <SketchPicker
            className="mx-auto"
            color={currentColor}
            onChangeComplete={handleOnchange}
          />
        </div>
      </div>
    </>
  );
};

export default IconMenu;
