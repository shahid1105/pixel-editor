import { SketchPicker } from "react-color";
import { useState } from "react";
import Icon from "./Icon";
import { FaHome } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MdLensBlur } from "react-icons/md";
import { Link } from "react-router-dom";

import Canvas from "../../Component/About/Canvas/Canvas";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../Redux/Color";
import { setPenTool } from "../../../Redux/PenToolReducer";
// import LightRuler from "light-ruler";

const IconMenu = () => {

  const isPenToolClick = useSelector((state) => state.penToolReducer.isPenToolClick);

  const [showDiv, setShowDiv] = useState(false);
  const [deleteElement, setDeleteElement] = useState(false);

  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const [selectedCanvasColor, setSelectedCanvasColor] = useState("white");
  const handleOnchange = (color) => {
    setSelectedCanvasColor(color.hex);
  };

  const dispatch = useDispatch();
  const [textColor, setTextColor] = useState("black");
  // console.log(textColor);
  const handleTextColorChange = (color) => {
    setTextColor(color);
    dispatch(setColor(textColor));
  };


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

  var content;
  
  switch (true) {
    case isPenToolClick:
      content = <div className="flex">
          <label className="mx-2 py-1" htmlFor="">
            Pen WIdth - {penWidth}
          </label>
          <input
            className="mx-2 py-1 "
            type="range"
            onChange={(e) => setPenWidth(e.target.value)}
            value={penWidth}
            min={1}
            max={30}
          />
          <label className="mx-2 py-1" htmlFor="">
            Pen Color - {penColor}
          </label>
          <input
            className="mr-5"
            type="color"
            onChange={(e) => setPenColor(e.target.value)}
            value={penColor}
          />
          <button className="btn bg-red-400" onClick={() => dispatch(setPenTool(false))}>
            Disable PenTool
          </button>
      </div>;
      break;
    case showDiv:
      content = <div>Option 2 content goes here</div>;
      break;
    case 'option3':
      content = <div>Option 3 content goes here</div>;
      break;
    default:
      content = <div>Default content goes here</div>;
  }

  return (
    <div className="">
      <div className="navbar bg-white text-black border-b-2">
        <div className="navbar-start">
          <div className="ml-5">
            <Link to="/home">
              <FaHome></FaHome>
            </Link>
          </div>

          {content}
          
          {showDiv ? (
            <>
              <h1>Bangladesh</h1>
              <button className="btn" onClick={()=>{setDeleteElement(true)}}>
                Delete
              </button>
            </>
          ) : (
            <>
              
              <div className="flex items-center">
                <h3>Color:</h3>
                <input
                  type="color"
                  id="colorPicker"
                  className="ml-1"
                  value={textColor}
                  onChange={(e) => handleTextColorChange(e.target.value)}
                />
              </div>

              <button className="btn" onClick={()=>{setDeleteElement(true)}}>
                Delete
              </button>
              
            </>
          )}
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
            className="text-sm ml-1 border-2 hidden md:block border-gray-300 px-1">
            {columns === 1 ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
          </button>
          <br />
          <Icon textColor={textColor}></Icon>
        </div>

        <div className="md:col-span-9 h-screen bg-gray-300 ">
          {/* <ImageEditor></ImageEditor> */}
          <Canvas
            setShowDiv={setShowDiv}
            textColor={textColor}
            selectedCanvasColor={selectedCanvasColor}
            deleteElement = {deleteElement}
            setDeleteElement = {setDeleteElement}
            penWidth = {penWidth}
            setPenWidth = {setPenWidth}
            penColor = {penColor}
            setPenColor = {setPenColor}
            


            ></Canvas>
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
