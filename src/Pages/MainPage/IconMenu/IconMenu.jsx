import { SketchPicker } from "react-color";
import { useRef, useState } from "react";
import Icon from "./Icon";
import { FaArrowCircleLeft, FaArrowCircleRight, FaCopy, FaDownload, FaHome, FaPaste } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsLayers,
} from "react-icons/bs";
import { MdDelete, MdLensBlur } from "react-icons/md";
import { Link } from "react-router-dom";

import Canvas from "../../Component/About/Canvas/Canvas";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../Redux/Color";
import { setPenTool } from "../../../Redux/PenToolReducer";
import "./IconMenu.css";
import { GiResize } from "react-icons/gi";
import { TbResize } from "react-icons/tb";
import { IoMdResize } from "react-icons/io";

// import LightRuler from "light-ruler";

const IconMenu = () => {
  const isPenToolClick = useSelector(
    (state) => state.penToolReducer.isPenToolClick
  );

  const [showDiv, setShowDiv] = useState(false);
  const [textDecoration, setTextDecoration] = useState(false);

  const [deleteElement, setDeleteElement] = useState(false);
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);
  const [isBringFront, setBringFront] = useState(false);
  const [isSentToBack, setSentToBack] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [isPaste, setPaste] = useState(false);
  const [isDownload, setDownload] = useState(false);

  /* ----------------all filter items -------------------- */
  /* ------------------brightness------------------- */
  const [brightness, setBrightness] = useState(0); // Initial brightness
  const [showRangeInput, setShowRangeInput] = useState(false);

  const handleToggleRangeInput = () => {
    setShowRangeInput(!showRangeInput);
  };

  const handleBrightnessChange = (event) => {
    const newBrightness = parseFloat(event.target.value);
    setBrightness(newBrightness);
  };

  /* ----------------contrast------------- */

  const [contrast, setContrast] = useState(0);
  const [showContrastInput, setShowContrastInput] = useState(false);

  const handleToggleContrastRangeInput = () => {
    setShowContrastInput(!showContrastInput);
  };
  const handleContrastControl = (event) => {
    const newContrast = parseFloat(event.target.value);
    setContrast(newContrast);
  };

  /* ----------------------color matrix------------ */
  const [colorMatrix, setColorMatrix] = useState([
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
  ]);

  const [isColorMatrixControlVisible, setColorMatrixControlVisible] =
    useState(false);

  const handleToggleColorMatrixControl = () => {
    setColorMatrixControlVisible(!isColorMatrixControlVisible);
  };

  const handleColorMatrixChange = (event) => {
    const newMatrixValue = parseFloat(event.target.value);
    // Update the specific matrix value in the state
    const updatedMatrix = [...colorMatrix];
    const matrixIndex = parseInt(event.target.name);
    updatedMatrix[matrixIndex] = newMatrixValue;
    setColorMatrix(updatedMatrix);
  };

  /* --------------hua Rotation--------------- */
  const [hueRotation, setHueRotation] = useState(-0.5);
  const [showHueRotationInput, setShowHueRotationInput] = useState(false);

  const handleToggleHueRotationInput = () => {
    setShowHueRotationInput(!showHueRotationInput);
  };

  const handleHueRotationChange = (event) => {
    const newRotation = parseFloat(event.target.value);
    setHueRotation(newRotation);
  };

  /* --------------------saturation---------------------- */

  const [saturation, setSaturation] = useState(1);
  const [showSaturationInput, setShowSaturationInput] = useState(false);

  const handleToggleSaturationInput = () => {
    setShowSaturationInput(!showSaturationInput);
  };

  const handleSaturationChange = (event) => {
    const newSaturation = parseFloat(event.target.value);
    setSaturation(newSaturation);
  };
  /* ---------------saturation end--------------------- */

  /* --------all object color handle here start---------- */
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };
  /* --------all object color handle here end---------- */

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

  const [columns, setColumns] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const toggleColumns = () => {
    setColumns(columns === 1 ? 2 : 1);
  };

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

  /* ------------handle text size start---------------- */

  const [textSize, setTextSize] = useState(16);
  // console.log(textSize);
  const increaseTextSize = () => {
    const newSize = textSize + 1;
    setTextSize(newSize);
  };

  const decreaseTextSize = () => {
    const newSize = textSize - 1;
    setTextSize(newSize);
  };

  /* ------------handle text size end---------------- */

  /* ----------------handle rotate start------------ */
  const [rightRotate, setRightRotate] = useState(false);
  const [leftRotate, setLeftRotate] = useState(false);

  // const rightRotateObj = () => {
  //   setRightRotate(true);
  // };

  // const leftRotateObj = () => {
  //   setLeftRotate(true);
  // };

  /* ----------------handle rotate end------------ */

  /* -----------------add line color picker start--------------- */
  const colorPickerRef = useRef(null);
  const [newColor, setNewColor] = useState("black");

  const changeLineColor = (newColor) => {
    setNewColor(newColor);
  };
  /* -----------------add line color picker end--------------- */

  /* -----------------obj resize start --------------- */
  const [resize, setResize] = useState(false);
  // const resizeObject = () => {
  //   setResize(true);
  // };
  /* -----------------obj resize end --------------- */

  var content;

  switch (true) {
    case isPenToolClick:
      content = (
        <div className="flex items-center">
          <label className="mx-2 py-1" htmlFor="">
            Pen Width: {penWidth}
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
          <button
            className="btn btn-xs btn-outline btn-warning"
            onClick={() => dispatch(setPenTool(false))}
          >
            Disable PenTool
          </button>
        </div>
      );
      break;
    case showDiv:
      content = (
        <div>
          {showDiv ? (
            <>
              {isColorMatrixControlVisible ? (
                <>
                  <button
                    className="btn btn-xs btn-outline"
                    onClick={handleToggleColorMatrixControl}
                  >
                    ColorMatrix
                  </button>
                  {isColorMatrixControlVisible && (
                    <div className="grid md:grid-cols-8 md:gap-x-28">
                      {colorMatrix.slice(0, 16).map((value, index) => (
                        <div key={index}>
                          <label>Value{index}</label>
                          <input
                            className="small-size"
                            type="range"
                            min={-1}
                            max={1}
                            step={0.01}
                            value={value}
                            name={index.toString()} // Use the index as the name to identify the matrix value
                            onChange={handleColorMatrixChange}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-2">
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={handleToggleRangeInput}
                    >
                      Brightness
                    </button>
                    {showRangeInput && (
                      <>
                        <div className="flex gap-1 items-center">
                          <input
                            className="w-full md:w-[80%]"
                            type="range"
                            min={-1}
                            max={1}
                            step={0.05}
                            value={brightness}
                            onChange={handleBrightnessChange}
                          />
                          <label htmlFor="brightness">{brightness}</label>
                        </div>
                      </>
                    )}

                    <button
                      className="btn btn-xs btn-outline"
                      onClick={handleToggleContrastRangeInput}
                    >
                      Contrast
                    </button>
                    {showContrastInput && (
                      <>
                        <div className="flex gap-2 items-center">
                          <input
                            className="w-full md:w-[80%]"
                            type="range"
                            min={-1}
                            max={1}
                            step={0.1}
                            value={contrast}
                            onChange={handleContrastControl}
                          />
                          <label htmlFor="contrast">{contrast}</label>
                        </div>
                      </>
                    )}

                    <button
                      className="btn btn-xs btn-outline"
                      onClick={handleToggleHueRotationInput}
                    >
                      Hue_Rotation
                    </button>
                    {showHueRotationInput && (
                      <>
                        <div className="flex gap-2 items-center">
                          <input
                            className="w-full md:w-[80%]"
                            type="range"
                            min={-1}
                            max={1}
                            step={0.05}
                            value={hueRotation}
                            onChange={handleHueRotationChange}
                          />
                          <label htmlFor="hue-rotation">{hueRotation}</label>
                        </div>
                      </>
                    )}

                    <button
                      className="btn btn-xs btn-outline"
                      onClick={handleToggleSaturationInput}
                    >
                      Saturation
                    </button>
                    {showSaturationInput && (
                      <>
                        <div className="flex gap-2 items-center">
                          <input
                            className="w-full md:w-[80%]"
                            type="range"
                            min={0}
                            max={2}
                            step={0.05}
                            value={saturation}
                            onChange={handleSaturationChange}
                          />
                          <label htmlFor="saturation">{saturation}</label>
                        </div>
                      </>
                    )}
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={handleToggleColorMatrixControl}
                    >
                      ColorMatrix
                    </button>
                    {isColorMatrixControlVisible && (
                      <div className="grid md:grid-cols-10 md:gap-x-32">
                        {colorMatrix.map((value, index) => (
                          <div key={index}>
                            <label>{index}:</label>
                            <input
                              type="range"
                              min={-1}
                              max={1}
                              step={0.01}
                              value={value}
                              name={index.toString()} // Use the index as the name to identify the matrix value
                              onChange={handleColorMatrixChange}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      );
      break;
    case textDecoration:
      content = (
        <div className="flex justify-between gap-2 ml-6 md:ml-0">
          {textDecoration ? (
            <>
              <p className="hidden md:block my-auto mr-5">Text Decoration:</p>
              <p className="my-auto hidden md:block font-bold mr-2">Color:</p>
              <div className="grid grid-cols-1 h-10 w-10 mr-3 md:mr-10">
                <label
                  htmlFor="colorA"
                  className="font-bold text-center text-black -mb-1 mt-1"
                >
                  A
                </label>
                <input
                  className="h-3 w-10"
                  id="colorA"
                  type="color"
                  value={selectedColor}
                  onChange={(e) => {
                    handleColorChange(e);
                  }}
                />
              </div>
              <p className="hidden md:block my-auto items-center font-bold">
                Text Size:
              </p>
              <div className="text-size-controls flex items-center gap-3 mr-10">
                <button
                  className="btn btn-outline btn-error btn-xs"
                  onClick={decreaseTextSize}
                >
                  <span role="img" aria-label="Decrease Text Size">
                    ➖
                  </span>
                </button>
                <div className="text-size font-bold text-md text-black">
                  {textSize}
                </div>
                <button
                  className="btn btn-outline btn-success btn-xs"
                  onClick={increaseTextSize}
                >
                  <span role="img" aria-label="Increase Text Size">
                    ➕
                  </span>
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      );
      break;
    default:
      content = (
        <div className="grid grid-cols-2 md:grid-cols-5 items-center  justify-between gap-2 ">
          <p className=" mr-1 hidden md:block">Default:</p>
          <p className="flex items-center font-bold mr-2">
            {" "}
            Color:
          </p>
          <div className="mr-10">
            <input
              id="colorA"
              type="color"
              value={selectedColor}
              onChange={(e) => {
                handleColorChange(e);
              }}
            />
          </div>
          <p className="flex items-center font-bold mr-2">Line Color:</p>
          <input
            type="color"
            ref={colorPickerRef}
            onChange={(e) => changeLineColor(e.target.value)}
          />
        </div>
      );
  }

  return (
    <div className="">
      <div className="navbar grid grid-cols-1 md:grid-cols-2 bg-white text-black border-b-2">
        <div className="flex ">
          <div className="ml-5  flex items-center gap-2">
            <Link to="/home">
              <FaHome className="mx-3"></FaHome>
            </Link>

            {content}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ul className="menu menu-horizontal px-1">
            <div className="flex items-center md:gap-2 lg:gap-3">
              <div className="flex items-center gap-1">
                <p className="font-bold">Rotate:</p>
                <button
                  onClick={() => {
                    setRightRotate(true);
                  }}
                  className="font-bold text-xl mr-2">
                  <FaArrowCircleRight></FaArrowCircleRight>
                </button>
                <button
                  onClick={() => {
                    setLeftRotate(true);
                  }}
                  className="font-bold text-xl">
                  <FaArrowCircleLeft></FaArrowCircleLeft>
                </button>
              </div>
              <div>
                <p
                  onClick={() => setResize(true)}
                  title="Object double size"
                  className="btn btn-sm m-1">
                  <IoMdResize></IoMdResize>
                </p>
              </div>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-xs m-1">
                  <FaCopy></FaCopy>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <p
                      onClick={() => {
                        setCopy(true);
                      }}
                    >
                      <FaCopy></FaCopy> Copy
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        setPaste(true);
                      }}
                    >
                      <FaPaste></FaPaste> Paste
                    </p>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0} className="btn btn-xs m-1">
                  <BsLayers></BsLayers>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <p
                      onClick={() => {
                        setBringFront(true);
                      }}
                    >
                      Being Front
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        setSentToBack(true);
                      }}
                    >
                      Sent To Back
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-xs"
                  onClick={() => {
                    setDeleteElement(true);
                  }}
                >
                  <MdDelete></MdDelete>
                </button>
                <button
                  className="btn btn-xs btn-success"
                  onClick={() => {
                    setDownload(true);
                  }}
                >
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
          className={`px-5 py-3 grid grid-cols-12 md:grid-cols-${columns} gap-2  md:col-span-1 bg-slate-700 text-white z-50`}
          style={{
            position: "absolute",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <button
            onClick={toggleColumns}
            className="text-xs ml-1 border-2 hidden md:block border-gray-300 px-1"
          >
            {columns === 1 ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
          </button>
          <br />
          <Icon textColor={textColor}></Icon>
        </div>

        <div className="md:col-span-9 h-screen bg-gray-300 ">
          {/* <ImageEditor></ImageEditor> */}
          <Canvas
            resize={resize}
            setResize={setResize}
            newColor={newColor}
            setLeftRotate={setLeftRotate}
            leftRotate={leftRotate}
            setRightRotate={setRightRotate}
            rightRotate={rightRotate}
            textSize={textSize}
            setTextDecoration={setTextDecoration}
            selectedColor={selectedColor}
            saturation={saturation}
            hueRotation={hueRotation}
            colorMatrix={colorMatrix}
            setBrightness={setBrightness}
            brightness={brightness}
            setContrast={setContrast}
            contras={contrast}
            setShowDiv={setShowDiv}
            textColor={textColor}
            selectedCanvasColor={selectedCanvasColor}
            deleteElement={deleteElement}
            setDeleteElement={setDeleteElement}
            penWidth={penWidth}
            setPenWidth={setPenWidth}
            penColor={penColor}
            setPenColor={setPenColor}
            isBringFront={isBringFront}
            setBringFront={setBringFront}
            isSentToBack={isSentToBack}
            setSentToBack={setSentToBack}
            isCopy={isCopy}
            setCopy={setCopy}
            isPaste={isPaste}
            setPaste={setPaste}
            isDownload={isDownload}
            setDownload={setDownload}
          ></Canvas>
        </div>
        <div className="p-5 col-span-3 mt-20">
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
