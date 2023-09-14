import React from "react";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
import TextTool from "./textTool";

import { setRectangleMarqueTool } from "../../../../Redux/RectangleMarqueToolReducer";

/* -----------for commit-------------------- */

const Canvas = ({
  selectedCanvasColor,
  setShowDiv,
  contras,
  brightness,
  colorMatrix,
  hueRotation,
  saturation,
}) => {
  const dispatch = useDispatch();

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
  //console.log(isRectangleMarqueToolClick);
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
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const canvasRef = useRef(null);

  const [fabricCanvas, setFabricCanvas] = useState();

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
        activeObject.applyFilters();
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
        activeObject.applyFilters();
        fabricCanvas.requestRenderAll();
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
        activeObject.applyFilters();
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
        activeObject.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [hueRotation]);

  useEffect(() => {
    const newSaturation = parseFloat(saturation);
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        const saturationFilter = new fabric.Image.filters.Saturation({
          saturation: newSaturation,
        });
        activeObject.filters = [saturationFilter];
        activeObject.applyFilters();
        fabricCanvas.requestRenderAll();
      }
    }
  }, [saturation]);

  /* ---------for filter state end---------------- */

  /* -----------------rotate------------------------ */
  const rightRotateImage = () => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();

      if (activeObject) {
        activeObject.set({
          originX: "center",
          originY: "center",
          angle: activeObject.angle + 90,
        });
        fabricCanvas.requestRenderAll();
      }
    }
  };

  const leftRotateImage = () => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();

      if (activeObject) {
        activeObject.set({
          originX: "center",
          originY: "center",
          angle: activeObject.angle - 90,
        });
        fabricCanvas.requestRenderAll();
      }
    }
  };
  /* ----------------------------------------- */
  const [penTool, setPenTool] = useState(false);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: selectedCanvasColor,

      width: width || width2,
      height: height || height1,
      // selection:true,

      // isDrawingMode: true,
      selection: true,
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

  // -----------------Rectangle Start---------------

  useEffect(() => {
    if (isRectangleMarqueToolClick) {
      console.log("hello rect----");
      const rect = new fabric.Rect({
        height: 200,
        width: 100,
        fill: "#f0f",
        top: 50,
        left: 50,
      });

      fabricCanvas?.add(rect);
      fabricCanvas?.setActiveObject(rect);
      fabricCanvas?.requestRenderAll();
      dispatch(setRectangleMarqueTool(false));
    }
  }, [isRectangleMarqueToolClick]);

  // --------------Rectangle End---------------

  /* --------------------text box ---------------------------- */

  useEffect(() => {
    if (textbox) {
      const textBox = new fabric.Textbox(textbox?.text, {
        left: textbox?.left,
        top: textbox?.top,
        width: textbox?.width,
        fontSize: textbox?.fontSize,
        fill: textbox?.fill,
        editable: true,
        selectable: true,
      });
      textBox.on("mousedown", function () {
        setShowDiv(false);
      });
      fabricCanvas?.add(textBox);
      fabricCanvas?.requestRenderAll();
    }
  }, [textbox]);

  /* --------------------PenTool ---------------------------- */

  useEffect(() => {
    if (penTool) {
      console.log("hello PenTool");
      if (fabricCanvas) {
        fabricCanvas.isDrawingMode = true;
      }
    } else {
      if (fabricCanvas) {
        fabricCanvas.isDrawingMode = false;
      }
    }
  }, [penTool]);

  // -----------------Circle Start---------------

  const addACircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: "yellow",
      top: 50,
      left: 50,
      selectable: true,
    });
    circle.set({ radius: 50, fill: "#f00", opacity: 0.7 });
    fabricCanvas.add(circle);
    fabricCanvas.setActiveObject(circle);
    fabricCanvas.requestRenderAll();
  };

  // ------------DDelete Option --------------

  const deleteSelectedObject = () => {
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      // fabricCanvas.bringToFront(layer1Object);

      fabricCanvas.remove(activeObject);
      fabricCanvas.discardActiveObject();
      fabricCanvas.requestRenderAll();
    }
  };

  //--------------Layer Options --------------

  const bringToFront = () => {
    if (fabricCanvas && fabricCanvas.getActiveObject()) {
      fabricCanvas.bringToFront(fabricCanvas.getActiveObject());
      fabricCanvas.requestRenderAll();
    }
  };

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

  const handleCopy = () => {
    if (fabricCanvas) {
      fabricCanvas.getActiveObject().clone((cloned) => {
        fabricCanvas.clipboard = cloned;
      });
    }
  };

  const handlePaste = () => {
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
  };

  /* ------------------Canvas bg color----------------------------- */
  useEffect(() => {
    if (fabricCanvas) {
      // Set the background color again when selectedCanvasColor changes
      fabricCanvas.setBackgroundColor(selectedCanvasColor);
      // fabricCanvas.renderAll();
      fabricCanvas.requestRenderAll();
    }
  }, [selectedCanvasColor, fabricCanvas]);
  /* ------------------------------------------------------------------- */

  const changePenWidth = (width) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width;
      setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen WIdth");
    }
  };

  const changePenColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen Color");
    }
  };

  const downloadHandler = () => {
    //console.log("Download Button");

    const pngData = fabricCanvas.toDataURL("png");
    const downloadLink = document.createElement("a");
    const fileName = `${name}-${Math.random().toString().replace("", "")}.png`;

    downloadLink.href = pngData;
    downloadLink.download = fileName;
    downloadLink.click();
    // console.log("Download Button");
  };

  /* ---------------------------------------------- */

  const resizeObject = () => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        // Adjust the size here, for example, doubling the width and height
        activeObject.scaleX *= 2;
        activeObject.scaleY *= 2;
        fabricCanvas.renderAll();
      }
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 h-[100%] text-purple-700">
      <div>
        <div className="flex justify-center text-center align-middle">
          <h1></h1>
          <canvas className="mt-10 mb-10 rounded " ref={canvasRef}></canvas>
        </div>

        <div className="mt-10 pt-2">
          <label className="mx-2 py-1" htmlFor="">
            Pen WIdth - {penWidth}
          </label>
          <input
            className="mx-2 py-1 "
            type="range"
            onChange={(e) => changePenWidth(e.target.value)}
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
            onChange={(e) => changePenColor(e.target.value)}
            value={penColor}
          />

          <button className="btn btn-sm" onClick={addACircle}>
            Add Circle
          </button>

          <button className="btn" onClick={() => setPenTool(!penTool)}>
            {penTool ? "Disable" : "Enable"} PenTool
          </button>
          <button className="btn" onClick={deleteSelectedObject}>
            Delete
          </button>
          <button className="btn" onClick={bringToFront}>
            Being Front
          </button>
          <button className="btn" onClick={sendToBack}>
            Beint Back
          </button>
          <button className="btn" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn" onClick={handlePaste}>
            Paste
          </button>

          <button
            className="btn btn-sm btn-success mb-2 md:mb-0"
            onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>
          {/* --------------------------------------------------- */}

          <button className="btn btn-secondary" onClick={resizeObject}>
            Resize Object
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
