import { SketchPicker } from "react-color";
import { useState } from "react";
import Icon from "./Icon";
import { FaCopy, FaDownload, FaHome, FaPaste } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsLayers } from "react-icons/bs";
import { MdDelete, MdLensBlur } from "react-icons/md";
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
  const [isBringFront, setBringFront] = useState(false);
  const [isSentToBack, setSentToBack] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [isPaste, setPaste] = useState(false);
  const [isDownload, setDownload] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);


  
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
      content = <div className="flex items-center">
          <label className="mx-2 py-1" htmlFor="">
            Pen Width {penWidth}
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
            Color 
          </label>
          <input
            className="mr-5"
            type="color"
            onChange={(e) => setPenColor(e.target.value)}
            value={penColor}
          />
          <button className="btn btn-sm btn-outline btn-warning" onClick={() => dispatch(setPenTool(false))}>
            Disable PenTool
          </button>
      </div>;
      break;
    case showDiv:
      content = <div>showDiv</div>;
      break;
    case 'option3':
      content = <div>Option 3 </div>;
      break;
    default:
      content = <div>Default</div>;
  }

  return (
    <div className="">
      <div className="navbar bg-white text-black border-b-2">
        <div className="navbar-start flex justify-between">
          <div className="ml-5 flex items-center gap-2">
            <Link to="/home">
              <FaHome></FaHome>
            </Link>

            {content}
          </div>
                    
          
        </div>

        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">
          <div className="flex items-center">
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-sm m-1">
                  <FaCopy></FaCopy>
                  </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
                  <li>
                    <p onClick={()=>{setCopy(true)}}>
                      <FaCopy></FaCopy> Copy
                    </p>
                  </li>
                  <li>
                    <p onClick={()=>{setPaste(true)}}>
                      <FaPaste></FaPaste> Paste
                    </p>
                  </li>
                </ul>
              </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="btn btn-sm m-1">
                <BsLayers></BsLayers>
                </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
                <li>
                  <p onClick={()=>{setBringFront(true)}}>
                    Being Front
                  </p>
                </li>
                <li>
                  <p onClick={()=>{setSentToBack(true)}}>
                    Sent To Back
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm" onClick={()=>{setDeleteElement(true)}}>
                <MdDelete></MdDelete>
              </button>
              <button className="btn btn-sm btn-success" onClick={()=>{setDownload(true)}}>
                <FaDownload></FaDownload>
              </button>
              
            </div>
          </div>
          </ul>
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
            isBringFront = {isBringFront}
            setBringFront = {setBringFront}
            isSentToBack = {isSentToBack}
            setSentToBack = {setSentToBack}
            isCopy = {isCopy}
            setCopy =  {setCopy}
            isPaste = {isPaste}
            setPaste = {setPaste}
            isDownload = {isDownload}
            setDownload = {setDownload}
            


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
