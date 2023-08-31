import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import storeData from "../../../LinkList";

import { useLocation } from "react-router-dom";
import Icon from "../../../MainPage/IconMenu/Icon";
// import Modal from "./Modal";

const Canvas = () => {
  const selectedImage = useSelector((state) => state.selectedImage);

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
  console.log(name, height, width);

  // const canvasAllInfo = useContext(CanvasContext);

  // console.log(canvasAllInfo.canvasInfo?.height);
  // const height = parseInt(canvasAllInfo.canvasInfo?.height);
  // const width = parseInt(canvasAllInfo.canvasInfo?.width);

  console.log(typeof height, typeof width);
  console.log(height, width);

  const height1 = 1500;
  const width2 = 1200;

  const canvasRef = useRef(null);

  const defaultBackgroundColor = "red";
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const [fabricCanvas, setFabricCanvas] = useState();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: defaultBackgroundColor,

      width: `${width2}`,
      height: `${height1}`,

      isDrawingMode: true,
      // selection:true,
      // selectionColor: 'yellow',
      // selectionLineWidth:3,
    });

    setFabricCanvas(canvas);

    const circle = new fabric.Circle({
      radius: 50,
      fill: "yellow",
      top: 50,
      left: 50,
    });
    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    canvas.add(circle);

    // const ImgSrc={state.image || selectedImage};
    fabric.Image.fromURL(selectedImage, function (oImg) {
      canvas.add(oImg);

      fabric.CircleBrush;
    });
  }, []);

  const addACircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: "yellow",
      top: 50,
      left: 50,
    });
    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    fabricCanvas.add(circle);
  };

  const changePenWidth = (width) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width;
      setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
      console.log("Change Pen WIdth");
    }
  };
  const changePenColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
      console.log("Change Pen Color");
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
    console.log("Download Button");
  };

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

  return (
    <div className="container mx-auto bg-gray-400 h-screen text-purple-700">
      <div>
        <div className=" text-center align-middle">
          <h1></h1>
          <canvas className=" " ref={canvasRef}></canvas>
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

          <button className="btn" onClick={addACircle}>
            Add Circle
          </button>

          <button className="btn btn-success" onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>

          {/* <img src={state.image || selectedImage} alt="" /> */}
          {/* <button onClick={()=>clearHandler()}> Clear</button> */}
          {/* <Modal></Modal> */}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
