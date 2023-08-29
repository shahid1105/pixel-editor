import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import Modal from "./Modal";

const Canvas = () => {
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

  const defaultBackgroundColor = "red";
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const [fabricCanvas, setFabricCanvas] = useState();

  const height1 = 500;
  const width2 = 800;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: defaultBackgroundColor,

      width: `${width}`,
      height: `${height}`,

      isDrawingMode: true,
    //   selection:true,
      // selectionColor: 'yellow',
      // selectionLineWidth:3,
    });

    setFabricCanvas(canvas);

    
  }, []);

  const addACircle = () =>{
    const circle = new fabric.Circle({
        radius: 50,
        fill: "yellow",
        top: 50,
        left: 50,
        
      });
      // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
      fabricCanvas.add(circle);
  }

  const changePenWidth = (width) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width;
      setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
    }
  };
  const changePenColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
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
  };

  // const clearHandler = () =>{
  //     if(fabricCanvas){
  //         fabricCanvas.clear();
  //         fabricCanvas.backgroundColor=defaultBackgroundColor;
  //         // setFabricCanvas()
  //     }
  // }

  return (
    <div className="container mx-auto bg-gray-400 h-screen text-purple-700">
      <div>
        <div className=" text-center align-middle">
          <h1></h1>
          <canvas className=" " ref={canvasRef}></canvas>
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
        
            <button className="btn" onClick={addACircle}>
                Add Circle
            </button>

          <button className="btn btn-success" onClick={() => downloadHandler()}>
            {" "}
            Download
          </button>
          {/* <button onClick={()=>clearHandler()}> Clear</button> */}
          {/* <Modal></Modal> */}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
