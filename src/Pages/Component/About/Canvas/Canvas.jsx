import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import storeData from "../../../LinkList";

import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
import TextTool from "./textTool";
// import Modal from "./Modal";

/* ------------------------------- */

import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../../../Redux/SelectedImage";
import getCroppedImg from "./getCroppedImg";
import React from "react";
import { setCropping } from "../../../../Redux/Crop";

/* ------------------------------- */

const Canvas = ({ selectedCanvasColor }) => {
  const selectedImage = useSelector(
    (state) => state.selectedImage.selectedImage
  );
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

  const canvasRef = useRef(null);

  // const defaultBackgroundColor = "white";
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const [fabricCanvas, setFabricCanvas] = useState();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: selectedCanvasColor,

      width: `${width || width2}`,
      height: `${height || height1}`,
      selection:true,

      // isDrawingMode: true,
      // selection:true,
      // selectionColor: 'yellow',
      // selectionLineWidth:3,
    });

  //   const ruler = new LightRuler({
  //     mode: "infinite",
  //     mountRef: rulerRef.current,
  //     scrollElement: document.getElementById("canvasId"),
  //     rulerId: "ruler",
  //     width: 30000,
  //     height: 30000,
  //     onScroll: (x, y) => {
  //         console.log(x, y);
  //     },
  // });

    setFabricCanvas(canvas);
    /* 
    // const circle = new fabric.Circle({
    //   radius: 50,
    //   fill: "yellow",
    //   top: 50,
    //   left: 50,
    // });
    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    // canvas.add(circle); */

    // const ImgSrc={state.image || selectedImage};
    fabric.Image.fromURL(selectedImage, function (oImg) {
      canvas.renderAll.bind(canvas);

      canvas.add(oImg);

      fabric.CircleBrush;
    });
  }, []);

  const rulerHandeler = () =>{
    // fabricCanvas.selection = false,
    // fabricCanvas.freeDrawingBrush = true;

    // ruler.hide();
    // if(ruler){
    //   ruler.hide();
    // }
    // else{
    //   ruler.show();
    // }
  }

  const addACircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: "yellow",
      top: 50,
      left: 50,
    });
    fabricCanvas.renderAll.bind(fabricCanvas);

    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    fabricCanvas.add(circle);


  };
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

  const addAText = () => {
    const text = new fabric.Text("I'm text ", {
      fontSize: 40,
      
    });
    fabricCanvas.renderAll.bind(fabricCanvas);


    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    fabricCanvas.add(text);


  };

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

  /* -------------------------------------------------------------------- */

  // const [showTextEdit, setShowTextEdit] = useState(false);
  // const [text, setText] = useState("");

  // const handleTextToolClick = () => {
  //   setShowTextEdit(true);
  // };

  // const handleTextChange = (event) => {
  //   setText(event.target.value);
  // };

  // const handleTextSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the entered text
  //   setShowTextEdit(false);
  // };

  /* ------------------------------------------------------------------ */

  /* ---------------------------------------------- */

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
        <div className="flex justify-end text-center align-middle">
          <h1></h1>
          <div id="root">
            <div id="box">
                <div id="wrap">

                </div>
                {/* <div id="ruler" ref={rulerRef}>

                  

                </div> */}
            </div>
            <canvas id="canvasId" className="ml-6 mt-1 rounded-lg canvas custom-scrollbar " ref={canvasRef}>
              
                  </canvas>
          </div> 

          {/* <canvas id="canvasId" className="canvas custom-scrollbar " ref={canvasRef}>
            
          </canvas> */}

          {/* <div id="ruler" ref={rulerRef}>

          </div> */}

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
          {/* ------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
