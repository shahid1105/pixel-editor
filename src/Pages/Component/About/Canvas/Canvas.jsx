import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import storeData from "../../../LinkList";
import { useLocation } from "react-router-dom";
/* ------------------------------- */

import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../../../Redux/SelectedImage";
import getCroppedImg from "./getCroppedImg";
import React from "react";
import { setCropping } from "../../../../Redux/Crop";
import { addTextBox, removeTextBox } from "../../../../Redux/TextBox";

/* ------------------------------- */

const Canvas = ({ selectedCanvasColor }) => {
  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );
  // console.log(selectedImage);
  const dispatch = useDispatch();
  const isCropping = useSelector((state) => state.cropReducer.isCropping);
  // console.log(isCropping);

  const [cropRect, setCropRect] = useState(null);

  const startCrop = () => {
    dispatch(setCropping(true));
  };

  const cancelCrop = () => {
    if (cropRect) {
      fabricCanvas.remove(cropRect);
      setCropRect(null);
    }
    dispatch(setCropping(false));
  };

  const cropImage = () => {
    if (cropRect) {
      const objectsToCrop = fabricCanvas.getObjects().filter((obj) => {
        return (
          obj.left >= cropRect.left &&
          obj.top >= cropRect.top &&
          obj.left + obj.width <= cropRect.left + cropRect.width &&
          obj.top + obj.height <= cropRect.top + cropRect.height
        );
      });

      const group = new fabric.Group(objectsToCrop);

      fabricCanvas.discardActiveObject();
      fabricCanvas.setActiveObject(group);
      fabricCanvas.requestRenderAll();

      const croppedImage = group.toDataURL();

      dispatch(setSelectedImage(croppedImage));

      dispatch(setCropping(false));

      // You can now handle the cropped image as needed.
    }
  };

  const textbox = useSelector((state) => state.textBoxReducer.textBox);
  // console.log(textbox);
  // const text = textbox?.text;
  // console.log(typeof text);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const height = queryParams.get("height");
  const width = queryParams.get("width");

  const height1 = 500;
  const width2 = 800;

  const canvasRef = useRef(null);

  // const defaultBackgroundColor = "white";
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);
  const [fabricCanvas, setFabricCanvas] = useState();

  // const freeDrawing = () => {
  //   if(fabricCanvas){

  //   }
  // };

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: selectedCanvasColor,

      width: width || width2,
      height: height || height1,

      // isDrawingMode: true,
      selection: true,
      // selectionColor: "yellow",
      // selectionLineWidth: 3,
      preserveObjectStacking: true,
    });

    /* 
    // const circle = new fabric.Circle({
    //   radius: 50,
    //   fill: "yellow",
    //   top: 50,
    //   left: 50,
    // });
    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    // canvas.add(circle); */

    // fabric.Image.fromURL(selectedImage, function (oImg) {
    //   canvas.add(oImg);

    //   fabric.CircleBrush;
    // });
    if (typeof selectedImage === "string" && selectedImage.trim() !== "") {
      fabric.Image.fromURL(
        selectedImage,
        (oImg) => {
          // Image loaded successfully
          canvas.add(oImg);

          canvas.renderAll();
          if (textbox) {
            const textBox = new fabric.Textbox(textbox?.text, {
              left: textbox?.left,
              top: textbox?.top,
              width: textbox?.width,
              fontSize: textbox?.fontSize,
              fill: textbox?.fill,
            });
            textBox.set({
              editable: true,
              selectable: true,
              placeholder: true,
            });

            canvas.add(textBox);
            canvas.renderAll();
          }
        },
        (error) => {
          // Handle the error here
          console.error("Error loading image:", error);
        }
      );
    }
    /* --------------------text box---------------------------- */
    if (!selectedImage) {
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

        canvas.add(textBox);
        canvas.renderAll();
      }
    }

    // Set the Fabric.js canvas state

    // const textbox = new fabric.Textbox("Enter your text here", {
    //   left: 100,
    //   top: 50,
    //   right: 50,
    //   width: 200, // Set the width of the textbox
    //   fontSize: 20,
    //   fill: "black",
    //   editable: true,
    //   selectable: true,
    // });

    // // Add the textbox to the canvas
    // canvas.add(textbox);

    // // Render the canvas
    // canvas.renderAll();
    /* ------------------------------------------------ */
    setFabricCanvas(canvas);
  }, [textbox, selectedCanvasColor, selectedImage]);

  /* ----------------------------------------------- */
  useEffect(() => {
    if (fabricCanvas) {
      // Set the background color again when selectedCanvasColor changes
      fabricCanvas.setBackgroundColor(selectedCanvasColor);
      fabricCanvas.renderAll();
    }
  }, [selectedCanvasColor, fabricCanvas]);
  /* ----------------------------------------------- */

  // const addACircle = () => {
  //   const circle = new fabric.Circle({
  //     radius: 50,
  //     fill: "yellow",
  //     top: 50,
  //     left: 50,
  //   });
  //   // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
  //   fabricCanvas.add(circle);
  // };

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
    const pngData = fabricCanvas.toDataURL("png");
    const downloadLink = document.createElement("a");
    const fileName = `${dataFromModal.name}-${Math.random()
      .toString()
      .replace("", "")}.png`;

    downloadLink.href = pngData;
    downloadLink.download = fileName;
    downloadLink.click();
    // console.log("Download Button");
  };

  // const clearHandler = () =>{
  //     if(fabricCanvas){
  //         fabricCanvas.clear();
  //         fabricCanvas.backgroundColor=defaultBackgroundColor;
  //         // setFabricCanvas()
  //     }
  // }

  /* ---------------------------------------------- */

  /* ---------------------------------------------- */

  return (
    <div className="container  mx-auto bg-purple-400">
      <div>
        <div className="flex justify-center text-center align-middle">
          <h1></h1>
          <canvas className=" " ref={canvasRef}></canvas>
          {/* ------------------------------------- */}
        </div>

        <div className="pt-2 mb-2 grid-cols-2 items-center justify-center">
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

          {/* <button className="btn" onClick={addACircle}>
            Add Circle
          </button> */}

          <button className="btn btn-success mb-2 md:mb-0" onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>
          {/* -------------------- */}
          <button
            className={`mx-2 btn btn-${isCropping ? "danger" : "primary"}`}
            onClick={isCropping ? cancelCrop : startCrop}>
            {isCropping ? "Cancel Crop" : "Start Crop"}
          </button>
          <button className="btn btn-success" onClick={cropImage}>
            Apply Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
