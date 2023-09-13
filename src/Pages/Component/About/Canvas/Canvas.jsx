import React, { Component } from "react";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import storeData from "../../../LinkList";

import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
import TextTool from "./textTool";
// import Modal from "./Modal";

/* ------------------------------- */

// import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../../../Redux/SelectedImage";
import getCroppedImg from "./getCroppedImg";
// import React from "react";
import { setCropping } from "../../../../Redux/Crop";
import { addTextBox } from "../../../../Redux/TextBox";
import { TbRuler } from "react-icons/tb";

/* -----------for commit-------------------- */

const Canvas = ({ selectedCanvasColor }) => {
  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );

  //RectangleMarqueToolClick Selector
  const isRectangleMarqueToolClick = useSelector((state) =>state.rectangleMarqueToolReducer.isRectangleMarqueToolClick);
  //console.log(isRectangleMarqueToolClick);
//textbox reducer
  const textbox = useSelector((state) => state.textBoxReducer.textBox);
  // console.log("hello textbox");

  //console.log(selectedImage);
  const imgCropping = useSelector((state) => state.cropReducer.isCropping);
  //console.log(imgCropping);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const height = queryParams.get("height");
  const width = queryParams.get("width");
  // console.log(name, height, width);

  // const canvasAllInfo = useContext(CanvasContext);

  // console.log(canvasAllInfo.canvasInfo?.height);
  // const height = parseInt(canvasAllInfo.canvasInfo?.height);
  // const width = parseInt(canvasAllInfo.canvasInfo?.width);

  // console.log(typeof height, typeof width);
  // console.log(height, width);

  const height1 = 500;
  const width2 = 800;

  

  // const defaultBackgroundColor = "white";
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);
  const [penTool,setPenTool] = useState(false);
  
  const [fabricCanvas, setFabricCanvas] = useState();

  //

  // const [isDrawing, setIsDrawing] = useState(false);
  // const [selectedShape, setSelectedShape] = useState('path'); // 'path' or 'rectangle'
  // const [drawingMode, setDrawingMode] = useState(false);

  //

  const canvasRef = useRef(null);
  var canvas;
  

  
  
  useEffect(() => {


    canvas = new fabric.Canvas(canvasRef.current, {
      
      

      backgroundColor: selectedCanvasColor,

      width: `${width || width2}`,
      height: `${height || height1}`,
      // selection:true,
      

      // isDrawingMode: true,
      selection: true,
      // selectionColor: "yellow",
      // selectionLineWidth: 3,
      // preserveObjectStacking: true,
    });
    

    setFabricCanvas(canvas);
    
    
    
    
    // console.log(isRectangleMarqueToolClick)

    // -----------------Image Start---------------


    // const ImgSrc={state.image || selectedImage};


    fabric.Image.fromURL(selectedImage, function (oImg) {
      // canvas.renderAll.bind(canvas);
      canvas.add(oImg);
      oImg.scaleToHeight(300);
      oImg.scaleToWidth(300);

      // canvas.renderAll.bind(canvas);
      canvas.requestRenderAll();



      // fabric.CircleBrush;
    });

//     let isDrawing = false;
// let ellipse;

// canvas.on('mouse:down', (event) => {
//   if (!isDrawing) {
//     const pointer = canvas.getPointer(event.e);
//     const { x, y } = pointer;
//     ellipse = new fabric.Ellipse({
//       left: x,
//       top: y,
//       originX: 'center',
//       originY: 'center',
//       width: 1,
//       height: 1,
//       fill: 'transparent',
//       stroke: 'black',
//       strokeWidth: 2,
//     });
//     canvas.add(ellipse);
//     isDrawing = true;
//   }
// });

// canvas.on('mouse:move', (event) => {
//   if (isDrawing) {
//     const pointer = canvas.getPointer(event.e);
//     const { x, y } = pointer;
//     const rx = Math.abs(x - ellipse.left) / 2;
//     const ry = Math.abs(y - ellipse.top) / 2;
//     ellipse.set({ rx, ry });
//     canvas.renderAll();
//   }
// });

// canvas.on('mouse:up', () => {
//   isDrawing = false;
// });

  return () =>{
    canvas.dispose();
  }

}, [canvasRef]);

// -----------------Rectangle Start---------------

useEffect(()=>{
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

    fabricCanvas?.add(rect);
    fabricCanvas?.setActiveObject(rect);
    fabricCanvas?.requestRenderAll();
    
  }

},[isRectangleMarqueToolClick]);


    // --------------Rectangle End---------------


    /* --------------------text box ---------------------------- */

useEffect(()=>{
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
    fabricCanvas?.add(textBox);
    fabricCanvas?.requestRenderAll();
  }
},[textbox])

    /* --------------------PenTool ---------------------------- */

    useEffect(() => {
      if (penTool) {
        console.log('hello PenTool');
        // const pencilBrush = new fabric.PencilBrush(canvas);
        // pencilBrush.color = 'blue'; // Set brush color
        // pencilBrush.width = 5;      // Set brush width
    
        // Update the isDrawingMode property correctly
        if (fabricCanvas) {
          fabricCanvas.isDrawingMode = true;
        }
        // setPenTool(false);
      } else {
        // Update the isDrawingMode property correctly
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
    selectable:true,
  });
  circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
  fabricCanvas.add(circle); 
  fabricCanvas.setActiveObject(circle);
  fabricCanvas.requestRenderAll();
  
};

// ------------DDelete Option --------------

const deleteSelectedObject = () => {
  const activeObject = fabricCanvas.getActiveObject();
  if (activeObject) {
    fabricCanvas.remove(activeObject);
    fabricCanvas.discardActiveObject();
    fabricCanvas.requestRenderAll();
  }
};



  /* ----------------------------------------------- */
  useEffect(() => {
    if (fabricCanvas) {
      // Set the background color again when selectedCanvasColor changes
      fabricCanvas.setBackgroundColor(selectedCanvasColor);
      // fabricCanvas.renderAll();
      fabricCanvas.requestRenderAll();

    }
  }, [selectedCanvasColor, fabricCanvas]);
  /* ----------------------------------------------- */

  

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
    //console.log("Download Button");

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


  

  const dispatch = useDispatch();

  dispatch(setSelectedImage(selectedImage));

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  // Reference to the image element for cropping
  const imageRef = React.createRef();

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  //console.log(fabricCanvas);

  const cropImage = (imgCropping) => {
    if (imgCropping) {
      // Get the image element
      const imageElement = imageRef.current;

      // Calculate cropping dimensions based on the original image size
      const scaleX = imageElement.naturalWidth / imageElement.width;
      const scaleY = imageElement.naturalHeight / imageElement.height;

      const croppedAreaPixels = {
        x: crop.x * scaleX,
        y: crop.y * scaleY,
        width: crop.width * scaleX,
        height: crop.height * scaleY,
      };

      // Use the getCroppedImg function to get the cropped image
      getCroppedImg(selectedImage, croppedAreaPixels).then((croppedImage) => {
        // Dispatch setCropping(false) to exit cropping mode
      dispatch(setCropping(false));

        // You can now update the Redux state with the cropped image
        // For example, you can dispatch an action like setCropImage(croppedImage)
        // to store the cropped image in your Redux store.
      });
    }
  };


  /* ---------------------------------------------- */

  

  
  return (
    <div className="container  mx-auto bg-purple-400 h-[100%] text-purple-700">
      <div>
        <div className="flex justify-center text-center align-middle">
          <h1></h1>
          <canvas className="mt-10 mb-10 rounded " ref={canvasRef}></canvas>
          {/* ------------------------------------- */}
          {/* <TextTool fabricCanvas={fabricCanvas} />{" "} */}
          
          {/* ------------------------------------- */}
        </div>
        {/* ----------------------------- */}

        {/* <div>
          <div className={`bg-slate-600 text-white`}>
            <Icon onTextToolClick={handleTextToolClick} />
          </div>
          {showTextEdit && (
            <div className="text-tool-edit">
              <form onSubmit={handleTextSubmit}>
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Enter your text..."
                />
                <button type="submit">Apply</button>
              </form>
            </div>
          )}
        </div> */}

        {/* ----------------------------- */}
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

          <button className="btn" onClick={addACircle}>
            Add Circle
          </button>

          <button className="btn" onClick={()=>setPenTool(!penTool)}>
            {penTool?'Disable':'Enable'} PenTool
          </button>
          <button className="btn" onClick={deleteSelectedObject}>
             Delete
          </button>

            {/* <button className="btn" onClick={handleDrawing}>
                Drawing
            </button> */}

          <button className="btn btn-success" onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>

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
          <button className="btn btn-success" onClick={cropImage}>
            Crop Image
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Canvas;
