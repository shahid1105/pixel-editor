import React from "react";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
import TextTool from "./textTool";

import { setRectangleMarqueTool } from "../../../../Redux/RectangleMarqueToolReducer";
import { setCircleTool } from "../../../../Redux/CircleToolReducer";
import { MdEditNotifications } from "react-icons/md";

/* -----------for commit-------------------- */

const Canvas = ({
  setResize,
  resize,
  newColor,
  setLeftRotate,
  leftRotate,
  setRightRotate,
  rightRotate,
  textSize,
  setTextDecoration,
  selectedColor,
  selectedCanvasColor,
  setShowDiv,
  contras,
  brightness,
  colorMatrix,
  hueRotation,
  saturation,
  deleteElement,
  setDeleteElement,
  penColor,
  textColor,
  penWidth,
  isBringFront,
  setBringFront,
  isSentToBack,
  setSentToBack,
  isCopy,
  setCopy,
  isPaste,
  setPaste,
  isDownload,
  setDownload,
}) => {
  const dispatch = useDispatch();

  /* -------------line--------------- */
  const AddLines = useSelector((state) => state.lineReducer.lines);

  /* ----------------for blur------------- */
  const isBlur = useSelector((state) => state.blurReducer.blur);
  // console.log(isBlur);

  /* ----------selected Image ------------ */
  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );
  // console.log(selectedImage);

  const color = useSelector((state) => state.colorReducer.color);
  // console.log(color);

  //RectangleMarqueToolClick Selector
  const isRectangleMarqueToolClick = useSelector(
    (state) => state.rectangleMarqueToolReducer.isRectangleMarqueToolClick
  );
  //RectangleMarqueToolClick Selector
  const isCircleToolClick = useSelector(
    (state) => state.circleToolReducer.isCircleToolClick
  );
  // console.log(isCircleToolClick);

  //penToolReducer
  const isPenToolClick = useSelector(
    (state) => state.penToolReducer.isPenToolClick
  );
  // console.log("hello" + isPenToolClick);

  //textbox reducer
  const textbox = useSelector((state) => state.textBoxReducer.textBox);
  // console.log("hello textbox");

  const imgCropping = useSelector((state) => state.cropReducer.isCropping);
  // console.log(imgCropping);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const height = queryParams.get("height");
  const width = queryParams.get("width");
  // console.log(name, height, width);

  const height1 = 500;
  const width2 = 800;

  // const defaultBackgroundColor = "white";
  // const [penWidth, setPenWidth] = useState(3);
  // const [penColor, setPenColor] = useState(3);

  const canvasRef = useRef(null);

  const [fabricCanvas, setFabricCanvas] = useState();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: selectedCanvasColor,

      width: width || width2,
      height: height || height1,
      // selection:true,

      // isDrawingMode: true,
      selection: true,
      allowTouchScrolling: true,
      // selectionColor: "yellow",
      // selectionLineWidth: 3,
      // preserveObjectStacking: true,
    });

    setFabricCanvas(canvas);

    // -----------------Image Start---------------

    fabric.Image.fromURL(selectedImage, function (oImg) {
      canvas.renderAll.bind(canvas);

      oImg.applyFilters();

      canvas.add(oImg);
      oImg.scaleToHeight(300);
      oImg.scaleToWidth(300);

      oImg.on("mousedown", function () {
        setShowDiv(true);
      });

      canvas.requestRenderAll();
    });

    return () => {
      canvas.dispose();
    };
  }, [canvasRef]);

  /* ---------for filter state start---------------- */

  // const [brightness, setBrightness] = useState(0); // Initial brightness
  // const [showRangeInput, setShowRangeInput] = useState(false);

  // const handleToggleRangeInput = () => {
  //   setShowRangeInput(!showRangeInput);
  // };

  // const handleBrightnessChange = (event) => {
  //   const newBrightness = parseFloat(event.target.value);
  //   setBrightness(newBrightness);
  //   if (fabricCanvas) {
  //     const activeObject = fabricCanvas.getActiveObject();
  //     if (activeObject) {
  //       const brightnessFilter = new fabric.Image.filters.Brightness({
  //         brightness: newBrightness,
  //       });
  //       activeObject.filters = [brightnessFilter];
  //       activeObject.applyFilters();
  //       fabricCanvas.requestRenderAll();
  //     }
  //   }
  // };

  /* ----------------brightness------------------ */
  useEffect(() => {
    const newBrightness = parseFloat(brightness);
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const brightnessFilter = new fabric.Image.filters.Brightness({
          brightness: newBrightness,
        });
        activeObject.filters = [brightnessFilter];
        activeObject?.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [brightness]);

  /* --------------contrast-------------------- */

  useEffect(() => {
    const newContrast = parseFloat(contras);
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const contrastFilter = new fabric.Image.filters.Contrast({
          contrast: newContrast,
        });
        activeObject.filters = [contrastFilter];
        activeObject?.applyFilters();
        fabricCanvas.renderAll();
      }
    }
  }, [contras]);
  /* ------------------color matrix--------------- */

  useEffect(() => {
    // Update the specific matrix value in the state
    const updatedMatrix = [...colorMatrix];
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const colorMatrixFilter = new fabric.Image.filters.ColorMatrix({
          matrix: updatedMatrix,
        });
        activeObject.filters = [colorMatrixFilter];
        activeObject?.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [colorMatrix]);

  /* -------------hue rotation--------- */

  useEffect(() => {
    const newRotation = parseFloat(hueRotation);
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const hueRotationFilter = new fabric.Image.filters.HueRotation({
          rotation: newRotation,
        });
        activeObject.filters = [hueRotationFilter];
        activeObject?.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [hueRotation]);

  /* ---------------saturation------------ */

  useEffect(() => {
    const newSaturation = parseFloat(saturation);
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const saturationFilter = new fabric.Image.filters.Saturation({
          saturation: newSaturation,
        });
        activeObject.filters = [saturationFilter];
        activeObject?.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [saturation]);

  /* ---------for filter state end---------------- */

  /* ---------------------blur code start---------------- */

  useEffect(() => {
    if (fabricCanvas) {
      const newIsBlur = parseFloat(isBlur);
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const blurFilter = new fabric.Image.filters.Blur({
          blur: newIsBlur,
        });
        activeObject.filters = [blurFilter];
        activeObject?.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [isBlur]);

  /* ---------------------blur code end---------------- */

  /* -----------------rotate------------------------ */

  useEffect(() => {
    if (rightRotate) {
      if (fabricCanvas) {
        const activeObject = fabricCanvas.getActiveObject();

        if (activeObject) {
          activeObject.set({
            originX: "center",
            originY: "center",
            angle: activeObject.angle + 30,
          });
          fabricCanvas.requestRenderAll();
        }
      }
    }
    setRightRotate(false);
  }, [rightRotate]);

  useEffect(() => {
    if (leftRotate) {
      if (fabricCanvas) {
        const activeObject = fabricCanvas.getActiveObject();

        if (activeObject) {
          activeObject.set({
            originX: "center",
            originY: "center",
            angle: activeObject.angle - 30,
          });
          fabricCanvas.requestRenderAll();
        }
      }
    }
    setLeftRotate(false);
  }, [leftRotate]);

  // const rightRotate = () => {
  //   if (fabricCanvas) {
  //     const activeObject = fabricCanvas.getActiveObject();

  //     if (activeObject) {
  //       activeObject.set({
  //         originX: "center",
  //         originY: "center",
  //         angle: activeObject.angle + 30,
  //       });
  //       fabricCanvas.requestRenderAll();
  //     }
  //   }
  // };

  // const leftRotate = () => {
  //   if (fabricCanvas) {
  //     const activeObject = fabricCanvas.getActiveObject();

  //     if (activeObject) {
  //       activeObject.set({
  //         originX: "center",
  //         originY: "center",
  //         angle: activeObject.angle - 30,
  //       });
  //       fabricCanvas.requestRenderAll();
  //     }
  //   }
  // };
  /* ---------------Rotate End-------------------------- */
  const [penTool, setPenTool] = useState(false);

  // -----------------Rectangle Start---------------

  useEffect(() => {
    if (isRectangleMarqueToolClick) {
      // console.log("hello rect----");
      const rect = new fabric.Rect({
        height: 200,
        width: 100,
        fill: "#f0f",
        top: 50,
        left: 50,
      });

      fabricCanvas?.add(rect);
      fabricCanvas?.setActiveObject(rect);

      rect.on("mousedown", function () {
        setShowDiv(false);
      });
      rect.on("mousedown", function () {
        setTextDecoration(false);
      });

      fabricCanvas?.requestRenderAll();
      dispatch(setRectangleMarqueTool(false));
    }
  }, [isRectangleMarqueToolClick]);

  // --------------Rectangle End---------------

  // -----------------Circle Start---------------

  useEffect(() => {
    if (isCircleToolClick) {
      const circle = new fabric.Circle({
        radius: 50,
        fill: "yellow",
        top: 50,
        left: 50,
        selectable: true,
      });
      // circle.set({ radius: 50, fill: "#f00", opacity: 0.7 });
      fabricCanvas?.add(circle);
      fabricCanvas?.setActiveObject(circle);

      circle.on("mousedown", function () {
        setShowDiv(false);
      });
      circle.on("mousedown", function () {
        setTextDecoration(false);
      });

      fabricCanvas?.requestRenderAll();
      dispatch(setCircleTool(false));
    }
  }, [isCircleToolClick]);

  /* --------------------text box start---------------------------- */

  useEffect(() => {
    if (textbox) {
      const textBox = new fabric.Textbox(textbox?.text, {
        left: textbox?.left,
        top: textbox?.top,
        width: textbox?.width,
        fontSize: textSize,
        fill: textColor,
        editable: true,
        selectable: true,
      });
      textBox.on("mousedown", function () {
        setShowDiv(false);
      });
      textBox.on("mousedown", function () {
        setTextDecoration(true);
      });
      fabricCanvas?.add(textBox);
      if (textColor) {
        textBox.set("fill", { textColor });
      }
      fabricCanvas?.requestRenderAll();
    }
  }, [textbox]);

  useEffect(() => {}, [textbox, textColor]);

  /* --------------------text box end---------------------------- */

  /* --------------handle text size start  -------------- */

  useEffect(() => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject instanceof fabric.Textbox) {
        activeObject.set({ fontSize: textSize });
        fabricCanvas.renderAll();
      }
    }
  }, [textSize, fabricCanvas]);

  /* --------------handle text size end -------------- */

  /* --------------------PenTool ---------------------------- */

  useEffect(() => {
    if (isPenToolClick) {
      console.log("hello PenTool " + isPenToolClick);
      if (fabricCanvas) {
        fabricCanvas.isDrawingMode = true;
      }
    } else {
      if (fabricCanvas) {
        fabricCanvas.isDrawingMode = false;
      }
    }
    // dispatch(setPenTool(false));
  }, [isPenToolClick]);

  // ------------DDelete Option --------------

  useEffect(() => {
    if (deleteElement) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        // fabricCanvas.bringToFront(layer1Object);

        fabricCanvas.remove(activeObject);
        fabricCanvas.discardActiveObject();
        fabricCanvas.requestRenderAll();
      }
    }
    setDeleteElement(false);
  }, [deleteElement]);

  //--------------Layer Options --------------

  const bringToFront = () => {
    if (fabricCanvas && fabricCanvas.getActiveObject()) {
      fabricCanvas.bringToFront(fabricCanvas.getActiveObject());
      fabricCanvas.requestRenderAll();
    }
  };
  useEffect(() => {
    if (isBringFront) {
      if (fabricCanvas && fabricCanvas.getActiveObject()) {
        fabricCanvas.bringToFront(fabricCanvas.getActiveObject());
        fabricCanvas.requestRenderAll();
        setBringFront(false);
      }
    }
  }, [isBringFront]);

  // console.log("isSentToBack = " + isSentToBack);
  useEffect(() => {
    if (isSentToBack) {
      if (fabricCanvas && fabricCanvas.getActiveObject()) {
        fabricCanvas.sendToBack(fabricCanvas.getActiveObject());
        fabricCanvas.requestRenderAll();
      }
      setSentToBack(false);
    }
  }, [isSentToBack]);

  const sendToBack = () => {
    if (fabricCanvas && fabricCanvas.getActiveObject()) {
      fabricCanvas.sendToBack(fabricCanvas.getActiveObject());
      fabricCanvas.requestRenderAll();
    }
  };

  //---------copy Paste with Ctrl + C / Ctrl+V----------

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if Ctrl (or Cmd on Mac) and 'C' are pressed
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        alert("Ctrl+C (or Cmd+C on Mac) pressed!");
        // handleCopy();

        // if (fabricCanvas) {
        //   fabricCanvas.getActiveObject().clone((cloned) => {
        //     fabricCanvas.clipboard = cloned;
        //   });
        // }
      } else if ((e.ctrlKey || e.metaKey) && e.key === "v") {
        // alert('Ctrl+V (or Cmd+V on Mac) pressed!');
        handlePaste();

        // if (fabricCanvas && fabricCanvas.clipboard) {
        //   fabricCanvas.clipboard.clone((cloned) => {
        //     fabricCanvas.discardActiveObject();
        //     cloned.set({
        //       left: 100, // Adjust the paste position as needed
        //       top: 100,
        //     });
        //     fabricCanvas.add(cloned);
        //     fabricCanvas.setActiveObject(cloned);
        //     fabricCanvas.requestRenderAll();
        //   });
        // }
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //------------Copy/Paste Using button---------

  useEffect(() => {
    if (isCopy) {
      if (fabricCanvas) {
        fabricCanvas.getActiveObject().clone((cloned) => {
          fabricCanvas.clipboard = cloned;
        });
      }
      setCopy(false);
    }
  }, [isCopy]);

  useEffect(() => {
    if (isPaste) {
      if (fabricCanvas && fabricCanvas.clipboard) {
        fabricCanvas.clipboard.clone((cloned) => {
          fabricCanvas.discardActiveObject();
          cloned.set({
            left: 100, // Adjust the paste position as needed
            top: 100,
          });
          fabricCanvas.add(cloned);
          fabricCanvas.setActiveObject(cloned);
          fabricCanvas.requestRenderAll();
        });
      }
      setPaste(false);
    }
  }, [isPaste]);

  /* ------------------Canvas bg color----------------------------- */
  useEffect(() => {
    if (fabricCanvas) {
      // Set the background color again when selectedCanvasColor changes
      fabricCanvas.setBackgroundColor(selectedCanvasColor);
      // fabricCanvas.renderAll();
      fabricCanvas.requestRenderAll();
    }
  }, [selectedCanvasColor, fabricCanvas]);
  /* -------------------Pen WIdth ---------------------- */

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = penWidth;
      // setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen WIdth");
    }
  }, [penWidth]);

  /* -------------------Pen Color ---------------------- */

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = penColor;
      // setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen Color");
    }
  }, [penColor]);

  useEffect(() => {
    if (isDownload) {
      const pngData = fabricCanvas.toDataURL("png");
      const downloadLink = document.createElement("a");
      const fileName = `${name}-${Math.random()
        .toString()
        .replace("", "")}.png`;

      downloadLink.href = pngData;
      downloadLink.download = fileName;
      downloadLink.click();
    }
    setDownload(false);
  }, [isDownload]);

  /* ----------------------resize start------------------------ */

  useEffect(() => {
    if (resize) {
      if (fabricCanvas) {
        const activeObject = fabricCanvas.getActiveObject();
        if (activeObject) {
          activeObject.scaleX *= 2;
          activeObject.scaleY *= 2;
          fabricCanvas.renderAll();
        }
      }
    }
    setResize(false);
  }, [resize]);

  /* ----------------handle color change start----------- */

  useEffect(() => {
    if (fabricCanvas) {
      const selectedObjects = fabricCanvas.getActiveObjects();
      selectedObjects.forEach((obj) => {
        obj.set("fill", selectedColor);
      });
      fabricCanvas.renderAll();
    }
  }, [selectedColor, fabricCanvas]);

  /* ----------------handle color change end----------- */

  /* ------------------------add line start---------------------- */
  const [lines, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

  useEffect(() => {
    if (selectedLine) {
      selectedLine.set({
        fill: newColor,
        stroke: newColor,
      });
      fabricCanvas.renderAll();
    }
  }, [newColor]);

  const addLineToCanvas = (line) => {
    if (!fabricCanvas) return;
    fabricCanvas.add(line);
    setLines([...lines, line]);

    line.on("selected", () => {
      setSelectedLine(line);
    });

    line.on("mousedown", function () {
      setShowDiv(false);
    });
    line.on("mousedown", function () {
      setTextDecoration(false);
    });

    fabricCanvas.renderAll();
  };

  useEffect(() => {
    AddLines.forEach((line) => {
      addLineToCanvas(line);
    });
  }, [AddLines]);

  /* ------------------------add line end---------------------- */

  return (
    <div className="container mx-auto bg-gray-200 h-[100%] text-purple-700">
      <div>
        <div className="overflow-x-hidden md:overflow-auto canvas-container flex justify-center text-center align-middle">
          <h1></h1>
          <canvas className="mt-10 mb-10 rounded" ref={canvasRef}></canvas>
        </div>

        <div className="mt-10 pt-2">
          {/* --------------------------------------------------- */}

          {/* <button onClick={rightRotate}>Right</button>
          <button onClick={leftRotate}>Left</button> */}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
