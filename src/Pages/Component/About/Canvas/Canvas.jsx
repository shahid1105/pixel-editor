import React from "react";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
import TextTool from "./textTool";

import { setRectangleMarqueTool } from "../../../../Redux/RectangleMarqueToolReducer";
import { setCircleTool } from "../../../../Redux/CircleToolReducer";

/* -----------for commit-------------------- */

const Canvas = ({ selectedCanvasColor, setShowDiv ,deleteElement , setDeleteElement, penColor,textColor, setPenColor , penWidth}) => {
  const dispatch = useDispatch();

  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );
  //console.log(selectedImage);
  const color = useSelector((state) => state.colorReducer.color);
  console.log(color);

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
  const isPenToolClick = useSelector((state) => state.penToolReducer.isPenToolClick);
  console.log("hello"+isPenToolClick);

  //textbox reducer
  const textbox = useSelector((state) => state.textBoxReducer.textBox);
  // console.log("hello textbox");

  

  const imgCropping = useSelector((state) => state.cropReducer.isCropping);
  console.log(imgCropping);

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

  /* ---------for filter state start---------------- */

  const [brightness, setBrightness] = useState(0); // Initial brightness
  const [showRangeInput, setShowRangeInput] = useState(false);

  const handleToggleRangeInput = () => {
    setShowRangeInput(!showRangeInput);
  };

  const handleBrightnessChange = (event) => {
    const newBrightness = parseFloat(event.target.value);
    setBrightness(newBrightness);
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
  };

  const [contrast, setContrast] = useState(0); // Initial contrast
  const [showContrastInput, setShowContrastInput] = useState(false);

  const handleToggleContrastRangeInput = () => {
    setShowContrastInput(!showContrastInput);
  };

  const handleContrastChange = (event) => {
    const newContrast = parseFloat(event.target.value);
    setContrast(newContrast);
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
  };

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
  };

  const [hueRotation, setHueRotation] = useState(-0.5);
  const [showHueRotationInput, setShowHueRotationInput] = useState(false);

  const handleToggleHueRotationInput = () => {
    setShowHueRotationInput(!showHueRotationInput);
  };

  const handleHueRotationChange = (event) => {
    const newRotation = parseFloat(event.target.value);
    setHueRotation(newRotation);
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
  };

  const [saturation, setSaturation] = useState(1);
  const [showSaturationInput, setShowSaturationInput] = useState(false);

  const handleToggleSaturationInput = () => {
    setShowSaturationInput(!showSaturationInput);
  };

  const handleSaturationChange = (event) => {
    const newSaturation = parseFloat(event.target.value);
    setSaturation(newSaturation);
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
  };

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

  // -----------------Circle Start---------------

  useEffect(()=>{
    if(isCircleToolClick){
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
      fabricCanvas?.requestRenderAll();
      dispatch(setCircleTool(false));
    }
  },[isCircleToolClick]);


  /* --------------------text box ---------------------------- */

  useEffect(() => {
    if (textbox) {
      const textBox = new fabric.Textbox(textbox?.text, {
        left: textbox?.left,
        top: textbox?.top,
        width: textbox?.width,
        fontSize: textbox?.fontSize,
        fill: textColor,
        editable: true,
        selectable: true,
      });
      textBox.on("mousedown", function () {
        setShowDiv(false);
      });
      fabricCanvas?.add(textBox);
      if(textColor){
        textBox.set('fill', {textColor})

      }
      fabricCanvas?.requestRenderAll();
    }
  }, [textbox]);

  useEffect(()=>{
  },[textbox,textColor])

  /* --------------------PenTool ---------------------------- */

  useEffect(() => {
    if (isPenToolClick) {
      console.log("hello PenTool "+isPenToolClick);
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

  useEffect(()=>{
    if(deleteElement){
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        // fabricCanvas.bringToFront(layer1Object);

        fabricCanvas.remove(activeObject);
        fabricCanvas.discardActiveObject();
        fabricCanvas.requestRenderAll();
      }
    }
    setDeleteElement(false);
  },[deleteElement])

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
  /* -------------------Pen WIdth ---------------------- */

  const changePenWidth = (width) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width;
      // setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen WIdth");
    }
  };
  useEffect(()=>{
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = penWidth;
      // setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen WIdth");
    }

  },[penWidth])

  /* -------------------Pen Color ---------------------- */

  const changePenColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen Color");
    }
  };
  useEffect(()=>{
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = penColor;
      // setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
      // console.log("Change Pen Color");
    }

  },[penColor])

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

          <button className="btn btn-primary" onClick={handleToggleRangeInput}>
            Brightness Control
          </button>
          {showRangeInput && (
            <input
              type="range"
              min={-1}
              max={1}
              step={0.05}
              value={brightness}
              onChange={handleBrightnessChange}
            />
          )}

          <button
            className="btn btn-outline"
            onClick={handleToggleContrastRangeInput}>
            Contrast Control
          </button>
          {showContrastInput && (
            <input
              type="range"
              min={-1}
              max={1}
              step={0.1}
              value={contrast}
              onChange={handleContrastChange}
            />
          )}

          <button
            className="btn btn-warning"
            onClick={handleToggleColorMatrixControl}>
            ColorMatrix Control
          </button>
          {isColorMatrixControlVisible && (
            <div>
              {colorMatrix.map((value, index) => (
                <div key={index}>
                  <label>Matrix Value {index}:</label>
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

          <button
            className="btn btn-success"
            onClick={handleToggleHueRotationInput}>
            Hue Rotation Control
          </button>
          {showHueRotationInput && (
            <>
              <input
                type="range"
                min={-1}
                max={1}
                step={0.05}
                value={hueRotation}
                onChange={handleHueRotationChange}
              />
              <label htmlFor="hue-rotation">Hue Rotation: {hueRotation}</label>
            </>
          )}

          <button
            className="btn btn-secondary"
            onClick={handleToggleSaturationInput}>
            Saturation Control
          </button>
          {showSaturationInput && (
            <>
              <input
                type="range"
                min={0}
                max={2}
                step={0.05}
                value={saturation}
                onChange={handleSaturationChange}
              />
              <label htmlFor="saturation">Saturation: {saturation}</label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
