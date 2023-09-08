import React, { Component } from "react";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import storeData from "../../../LinkList";

=======
import { useSelector } from "react-redux";
// import storeData from "../../../LinkList";
>>>>>>> d43270ea8c4864aa07064f2cc1d5799c9c5c6f1d
import { useLocation } from "react-router-dom";
/* ------------------------------- */

// import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../../../Redux/SelectedImage";
import getCroppedImg from "./getCroppedImg";
// import React from "react";
import { setCropping } from "../../../../Redux/Crop";
import { addTextBox, removeTextBox } from "../../../../Redux/TextBox";

/* ------------------------------- */

const Canvas = ({ selectedCanvasColor }) => {
  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );
<<<<<<< HEAD

  //RectangleMarqueToolClick Selector
  const isRectangleMarqueToolClick = useSelector((state) =>state.rectangleMarqueToolReducer.isRectangleMarqueToolClick);
  console.log(isRectangleMarqueToolClick);



  console.log(selectedImage);
  const imgCropping = useSelector((state) => state.cropReducer.isCropping);
  console.log(imgCropping);

  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vertical: 1,
    horizontal: 1,
  });
=======
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
>>>>>>> d43270ea8c4864aa07064f2cc1d5799c9c5c6f1d

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

<<<<<<< HEAD
      width: `${width || width2}`,
      height: `${height || height1}`,
      selection:true,
=======
      width: width || width2,
      height: height || height1,
>>>>>>> d43270ea8c4864aa07064f2cc1d5799c9c5c6f1d

      isDrawingMode: true,
      // selection: true,
      // selectionColor: "yellow",
      // selectionLineWidth: 3,
      preserveObjectStacking: true,
    });

    /* 
    const circle = new fabric.Circle({
      radius: 50,
      fill: "yellow",
      top: 50,
      left: 50,
    });
    circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    canvas.add(circle); 
    */
    
    console.log(isRectangleMarqueToolClick)

<<<<<<< HEAD
    // const ImgSrc={state.image || selectedImage};
    fabric.Image.fromURL(selectedImage, function (oImg) {
      canvas.renderAll.bind(canvas);

      canvas.add(oImg);

      fabric.CircleBrush;
    });


    // -----------------Rectangle---------------

    // var rect = new fabric.Rect({
    //   height:20,
    //   width: 10,
    //   fill: '#f0f',
    // });
    // canvas.renderAll.bind(canvas);

    // canvas.add(rect);
    if(isRectangleMarqueToolClick){
      console.log('hello rect----')
      const rect = new fabric.Rect({
        height:200,
        width: 100,
        fill: '#f0f',
        top: 50,
        left: 50,
      });
      // canvas.renderAll.bind(canvas);
  
      canvas.add(rect);
      
    }


    // --------------Rectangle End---------------

    // if (typeof selectedImage === "string" && selectedImage.trim() !== "") {
    //   fabric.Image.fromURL(
    //     selectedImage,
    //     (oImg) => {
    //       // Image loaded successfully
    //       canvas.add(oImg);
    //     },
    //     (error) => {
    //       // Handle the error here
    //       console.error("Error loading image:", error);
    //     }
    //   );
    // }
  // }, [selectedCanvasColor]);
}, []);

=======
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
>>>>>>> d43270ea8c4864aa07064f2cc1d5799c9c5c6f1d

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

  // const text = new fabric.Text("I'm text ", {
  //   fontSize: 40,
  // });
  // fabricCanvas.add(text);


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
    console.log("Download Button");

    const pngData = fabricCanvas.toDataURL("png");
    const downloadLink = document.createElement("a");
    const fileName = `${name}-${Math.random()
      .toString()
      .replace("", "")}.png`;

    downloadLink.href = pngData;
    downloadLink.download = fileName;
    downloadLink.click();
    // console.log("Download Button");
  };


  
  // const handleDrawing = () =>{
  //   if (fabricCanvas) {
  //     fabricCanvas.selection= false;
  //     fabricCanvas.freeDrawingBrush = true;
  //     // fabricCanvas.freeDrawingBrush = new fabric.PencilBrush('canvas');

  //     // fabricCanvas.freeDrawingBrush.width = 5;
  //     // fabricCanvas.freeDrawingBrush.color = color;
  //     // setPenColor(color);
  //     // fabricCanvas.renderAll.bind(fabricCanvas);
  //     console.log("Change Pen Color");

  //   }
  // }
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
    <div className="container  mx-auto bg-purple-400 h-[100%] text-purple-700">
      <div>
        <div className="flex justify-center text-center align-middle">
          <h1></h1>
          <canvas className=" " ref={canvasRef}></canvas>
          {/* ------------------------------------- */}
        </div>

        <div className="pt-2">
          <label className="mx-2 py-1" htmlFor="">
            Pen WIdth - {penWidth}
          </label>
          <input
            className="mx-2 py-1"
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

            {/* <button className="btn" onClick={handleDrawing}>
                Drawing
            </button> */}

          <button className="btn btn-success" onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>
<<<<<<< HEAD

          {/* <button className="btn" onClick={rulerHandeler}>ruler btn</button> */}

          {/* <img src={state.image || selectedImage} alt="" /> */}
          {/* <button onClick={()=>clearHandler()}> Clear</button> */}
          {/* <Modal></Modal> */}
          {/* ------------------------------------------------- */}
          {imgCropping ? (
            <>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(setCropping(false))}>
                Cancel Crop
              </button>
              <button className="btn btn-success" onClick={cropImage}>
                Apply Crop
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(setCropping(true))}>
              Start Crop
            </button>
          )}
=======
          {/* -------------------- */}
          <button
            className={`btn btn-${isCropping ? "danger" : "primary"}`}
            onClick={isCropping ? cancelCrop : startCrop}>
            {isCropping ? "Cancel Crop" : "Start Crop"}
          </button>
>>>>>>> d43270ea8c4864aa07064f2cc1d5799c9c5c6f1d
          <button className="btn btn-success" onClick={cropImage}>
            Apply Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
