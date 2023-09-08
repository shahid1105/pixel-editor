import React from "react";
import { LuFrame, LuLasso, LuStamp } from "react-icons/Lu";
import {
  BsArrowsMove,
  BsCrop,
  BsEraserFill,
  BsEyedropper,
} from "react-icons/bs";
import { GiHealthCapsule } from "react-icons/gi";
import { TbMarquee2, TbZoomReplace } from "react-icons/tb";
import { PiPenNibBold, PiSelectionAllFill } from "react-icons/pi";
import { IoMdColorWand } from "react-icons/io";
import { MdGradient, MdHistoryEdu } from "react-icons/md";
import { RiBlurOffLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import {
  BiDotsHorizontalRounded,
  BiSolidPointer,
  BiText,
} from "react-icons/bi";
import { FaRegCircle, FaRegHandPaper } from "react-icons/fa";

/* ------------------------------ */

import { useDispatch, useSelector } from "react-redux";
import { setCropping } from "../../../Redux/Crop";
import { setRectangleMarqueTool } from "../../../Redux/RectangleMarqueToolReducer";

/* ------------------------------ */

const Icon = () => {
  /* -------------------------------------------- */
  const isCropping = useSelector((state) => state.cropReducer.isCropping); // Assuming you store the cropping state in Redux

  const isRectangleMarqueToolClick = useSelector((state) =>state.rectangleMarqueToolReducer.isRectangleMarqueToolClick);


  const dispatch = useDispatch();

  const handleCropToolClick = () => {
    // Dispatch the setCropping action to enable cropping mode
    dispatch(setCropping(true));
  };


  const handleRectangleToolClick = () =>{
    dispatch(setRectangleMarqueTool(!isRectangleMarqueToolClick));
  }

  /* -------------------------------------------- */
  return (
    <>
      <BsArrowsMove title="Move Tool"></BsArrowsMove>
      
      <div className="dropdown dropdown-right">
        <label tabIndex={0} className="">
          <TbMarquee2 title="Rectangular Marquee Tool"></TbMarquee2>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 text-white  rounded-box w-52 text-xs">
          
          <li onClick={handleRectangleToolClick}><a> Rectangular Marque Tools{isRectangleMarqueToolClick?'ok':'no'}</a></li>
          <li ><a> Elliptical Marque Tools</a></li>
        </ul>
      </div>
      <LuLasso title="Magnetic Lasso Tool"></LuLasso>
      <PiSelectionAllFill title="Object Selection Tools"></PiSelectionAllFill>
      <BsCrop
        onClick={handleCropToolClick}
        title={isCropping ? "Disable Crop Tool" : "Enable Crop Tool"}></BsCrop>
      <LuFrame title="Frame Tool"></LuFrame>
      <BsEyedropper title="Eyedropper Tool"></BsEyedropper>
      <GiHealthCapsule title="Healing Brush Tool"></GiHealthCapsule>
      <IoMdColorWand title="Color Replacement Tool"></IoMdColorWand>
      <LuStamp title="Clone Stamp Tool"></LuStamp>
      <MdHistoryEdu title="History Brush Tool"></MdHistoryEdu>
      <BsEraserFill title="Magic Eraser Tool"></BsEraserFill>
      <MdGradient title="Gradient Tool"></MdGradient>
      <RiBlurOffLine title="Blur Tool"></RiBlurOffLine>
      <SlMagnifier title="Dodge Tool"></SlMagnifier>
      <PiPenNibBold title="Curvature Pen Tool"></PiPenNibBold>
      <BiText title="Horizontal Type Tool"></BiText>
      <BiSolidPointer title="Path Selection Tool"></BiSolidPointer>
      <FaRegCircle title="Ellipse Tool"></FaRegCircle>
      <FaRegHandPaper title="Hand Tool"></FaRegHandPaper>
      <TbZoomReplace title="Zoom Tool"></TbZoomReplace>
      <BiDotsHorizontalRounded title="Edit Toolbar"></BiDotsHorizontalRounded>
    </>
  );
};

export default Icon;
