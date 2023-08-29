// import React from 'react';
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const Canvas = () => {
  const defaultBackgroundColor = "white";
  const [dataFromModal, setDataFromModal] = useState();
  const [penWidth, setPenWidth] = useState(3);
  const [penColor, setPenColor] = useState(3);

  const [fabricCanvas, setFabricCanvas] = useState();

  const handleModalData = (data) => {
    setDataFromModal(data);
    console.log(data);
    console.log(dataFromModal);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: defaultBackgroundColor,
      width: `${dataFromModal?.width}`,

      height: `${dataFromModal?.height}`,

      // width: `${canvasArea.width}`,
      // height: `${canvasArea.height}`,
      isDrawingMode: true,
      // selection:true,
      // selectionColor: 'yellow',
      // selectionLineWidth:3,
    });

    setFabricCanvas(canvas);

    const circle = new fabric.Circle({
      radius: 50,
      fill: "red",
      top: 50,
      left: 50,
    });
    // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
    canvas.add(circle);
  }, [dataFromModal]);

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
    <div className="container mx-auto bg-black h-screen text-purple-700">
      <Modal sendDataToCanvas={handleModalData}></Modal>

      {dataFromModal && (
        <div>
          <div>
            <h3
              className="font-bold text-3xl text-center py-5
                    ">
              This is Canvas
            </h3>
            {/* <canvas ></canvas> */}
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

            <button
              className="btn btn-success"
              onClick={() => downloadHandler()}>
              {" "}
              Download
            </button>
            {/* <button onClick={()=>clearHandler()}> Clear</button> */}
          </div>
        </div>
      )}

      <button
        className=""
        onClick={() => window.new_project_modal2.showModal()}>
        open modal
      </button>
      <dialog id="new_project_modal2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Canvas;
