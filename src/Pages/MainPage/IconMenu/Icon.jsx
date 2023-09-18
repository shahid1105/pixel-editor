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
import { setLasso } from "../../../Redux/Lasso";
import { setCircleTool } from "../../../Redux/CircleToolReducer";
import { setPenTool } from "../../../Redux/PenToolReducer";
import { setNewBlur } from "../../../Redux/Blur";

/* ------------------------------ */

const Icon = () => {
  /* -------------------------------------------- */

  const isCropping = useSelector((state) => state.cropReducer.isCropping);
  const isLasso = useSelector((state) => state.magneticLasso.isLasso);
  const [isTextboxActive, setIsTextboxActive] = useState(false);

  const isRectangleMarqueToolClick = useSelector(
    (state) => state.rectangleMarqueToolReducer.isRectangleMarqueToolClick
  );

  const isPenToolClick = useSelector(
    (state) => state.penToolReducer.isPenToolClick
  );

  /* ----------------------------------------------------- */
  /* ---------------blur tool-------------------- */
  const [showBlurInput, setShowBlurInput] = useState(false);
  const [blur, setBlur] = useState(0);

  const handleBlurButtonClick = () => {
    setShowBlurInput(!showBlurInput);
  };

  const handleBlurChange = (event) => {
    const newBlur = parseFloat(event.target.value);
    setBlur(newBlur);
    dispatch(setNewBlur(newBlur));
  };

  // dispatch(setNewBlur(newBlur));

  /* ---------------blur tool-------------------- */

  /* --------------------image crop--------------------------------- */
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
        fontSize: 16,
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

  const handleRectangleToolClick = () => {
    dispatch(setRectangleMarqueTool(true));
  };
  const handleCilcleToolClick = () => {
    dispatch(setCircleTool(true));
  };
  const handlePenToolClick = () => {
    dispatch(setPenTool(!isPenToolClick));
  };

  // Lasso
  const handleMagneticLassoToolClick = () => {
    dispatch(setLasso(!isLasso));
  };

  /* -------------------------------------------- */
  return (
    <>
      <BsArrowsMove title="Move Tool"></BsArrowsMove>

      <div className="dropdown dropdown-right">
        <label tabIndex={0} className="">
          <TbMarquee2 title="Shape Tool"></TbMarquee2>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 text-white  rounded-box w-52 text-xs">
          <li onClick={handleRectangleToolClick}>
            <a> Rectangular Tools</a>
          </li>
          <li onClick={handleCilcleToolClick}>
            <a> Elliptical Tools</a>
          </li>
        </ul>
      </div>
      <LuLasso
        onClick={handleMagneticLassoToolClick}
        title={isLasso ? "Lasso is Working" : "Lasso not Working"}></LuLasso>
      <PiSelectionAllFill title="Object Selection Tool"></PiSelectionAllFill>
      <BsCrop
        onClick={handleCropToolClick}
        title={isCropping ? "Disable Crop Tool" : "Enable Crop Tool"}></BsCrop>
      <LuFrame title="Frame Tool"></LuFrame>
      <BsEyedropper title="Eyedropper Tool"></BsEyedropper>
      <IoMdColorWand title="Color Replacement Tool"></IoMdColorWand>
      {/* <LuStamp title="Clone Stamp Tool"></LuStamp> */}
      <BsEraserFill title="Magic Eraser Tool"></BsEraserFill>
      <MdGradient title="Gradient Tool"></MdGradient>
      <PiPenNibBold
        title="Pen Tool"
        onClick={handlePenToolClick}></PiPenNibBold>
      <div className="dropdown dropdown-right">
        <label tabIndex={0} className="">
          <RiBlurOffLine title="Blur Tool" onClick={handleBlurButtonClick} />
        </label>
        {showBlurInput && (
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-white rounded-box w-52 text-xs">
            <>
              <input
                id="blurTool"
                type="range"
                min={0}
                max={2}
                step={0.01}
                value={blur}
                onChange={handleBlurChange}
              />
              <label htmlFor="blurTool">{blur}</label>
            </>
          </div>
        )}
      </div>
      <SlMagnifier title="Dodge Tool"></SlMagnifier>
      <BiText
        title={isTextboxActive ? "Disable Text Tool" : "Enable Text Tool"}
        onClick={handleTextToolClick}></BiText>
      <TbZoomReplace title="Zoom Tool"></TbZoomReplace>
      <BiDotsHorizontalRounded title="Edit Toolbar"></BiDotsHorizontalRounded>
    </>
  );
};

export default Icon;
