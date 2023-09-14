import React, { useState } from "react";
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
import { fabric } from "fabric";

import { useDispatch, useSelector } from "react-redux";
import { setCropping } from "../../../Redux/Crop";
import { setRectangleMarqueTool } from "../../../Redux/RectangleMarqueToolReducer";
import { addTextBox, removeTextBox } from "../../../Redux/TextBox";

/* ------------------------------ */

const Icon = () => {
  /* -------------------------------------------- */
  const isCropping = useSelector((state) => state.cropReducer.isCropping);
  const [isTextboxActive, setIsTextboxActive] = useState(false);

  const isRectangleMarqueToolClick = useSelector((state) =>state.rectangleMarqueToolReducer.isRectangleMarqueToolClick);


  const dispatch = useDispatch();

  const handleCropToolClick = () => {
    // Dispatch the setCropping action to enable cropping mode
    dispatch(setCropping(!isCropping));
  };

  /* --------------------textbox-------------------- */
  const handleTextToolClick = () => {
    // Toggle Textbox activation
    if (isTextboxActive) {
      // If Textbox is active, remove it
      dispatch(removeTextBox());
    } else {
      // If Textbox is not active, create and add it
      const newTextbox = new fabric.Textbox("Enter your text here", {
        left: 100,
        top: 50,
        width: 200,
        fontSize: 20,
        fill: "black",
        editable: true,
        selectable: true,
        placeholder: true,
      });
      dispatch(addTextBox(newTextbox));
    }

    // Toggle the Textbox state
    setIsTextboxActive(false);
  };


  const handleRectangleToolClick = () =>{
    dispatch(setRectangleMarqueTool(true));
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
          
          <li onClick={handleRectangleToolClick}><a> Rectangular Marque Tools</a></li>
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
    <BiText
        title={isTextboxActive ? "Disable Text Tool" : "Enable Text Tool"}
        onClick={handleTextToolClick}></BiText>
      <BiSolidPointer title="Path Selection Tool"></BiSolidPointer>
      <FaRegCircle title="Ellipse Tool"></FaRegCircle>
      <FaRegHandPaper title="Hand Tool"></FaRegHandPaper>
      <TbZoomReplace title="Zoom Tool"></TbZoomReplace>
      <BiDotsHorizontalRounded title="Edit Toolbar"></BiDotsHorizontalRounded>
    </>
  );
};

export default Icon;
