import { SketchPicker } from "react-color";
import { useState } from "react";
import Icon from "./Icon";
import { FaHome } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MdLensBlur } from "react-icons/md";
import { Link } from "react-router-dom";

import ImageEditor from "../../ImageEditor/ImageEditor";
import Canvas from "../../Component/About/Canvas/Canvas";
import { useRef } from "react";
import { useSelector } from "react-redux";
// import LightRuler from "light-ruler";


const IconMenu = () => {
  const [selectedCanvasColor, setSelectedCanvasColor] = useState("white");
  const handleOnchange = (color) => {
    setSelectedCanvasColor(color.hex);
  };

  // const [isDragging, setIsDragging] = useState(false);
  // const [offset, setOffset] = useState({ x: 0, y: 0 });

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

  // const [currentColor, setCurrentColor] = useState();
  // const [columns, setColumns] = useState(1);

  const toggleColumns = () => {
    setColumns(columns === 1 ? 2 : 1);
  };

  const [columns, setColumns] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    const maxX = window.innerWidth - e.target.offsetWidth;
    const maxY = window.innerHeight - e.target.offsetHeight;
    const clampedX = Math.max(0, Math.min(newX, maxX));
    const clampedY = Math.max(0, Math.min(newY, maxY));
    e.target.style.left = clampedX + "px";
    e.target.style.top = clampedY + "px";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };



//   const ruler = new LightRuler({
//     mode: "infinite",
//     mountRef: rulerRef.current,
//     scrollElement: document.getElementById("wrap"),
//     rulerId: "ruler",
//     width: 30000,
//     height: 30000,
//     onScroll: (x, y) => {
//         console.log(x, y);
//     },
// });

  return (
    <div className="">
      <div className="navbar bg-gray-600 text-white border-b-2">



        <div className="navbar-start">
          <div className="ml-5">
            <Link to="/home">
              <FaHome></FaHome>
            </Link>
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
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
      </div>
      {/* Icon  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-1">
        <div
          className={`p-4 grid grid-cols-10 md:grid-cols-${columns} gap-2  md:col-span-1 bg-slate-700 text-white z-50`}
          style={{
            position: "absolute",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}>
          <button
            onClick={toggleColumns}
            className="text-sm ml-1 border-2 border-gray-300 px-1">
            {columns === 1 ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
          </button>
          <br />
          <Icon></Icon>
        </div>

        <div className="col-span-9 bg-purple-400">
          {/* <ImageEditor></ImageEditor> */}
          <Canvas selectedCanvasColor={selectedCanvasColor}></Canvas>
        </div>
        <div className="p-5 col-span-3 ">
          <SketchPicker
            className="mx-auto"
            color={selectedCanvasColor}
            onChangeComplete={handleOnchange}
          />
        </div>
      </div>
    </div>
  );
};

export default IconMenu;
