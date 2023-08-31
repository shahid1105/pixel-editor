import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Scale.css";
import ScaleBar from "./ScalBar";

const Scale = () => {
  const selectedImage = useSelector((state) => state.selectedImage);

  const imageWidth = 300; // Set image width

  return (
    <div className="App">
      <h1>Scale Bar Example</h1>
      <img
        src={selectedImage}
        alt="Your Image"
        style={{ width: `${imageWidth}px`, height: "auto" }}
      />
      <ScaleBar imageWidth={imageWidth} units="px" />
    </div>
  );
};
//   const [scaleLength, setScaleLength] = useState(200); // Initial scale bar length
//   const [imageDimensions, setImageDimensions] = useState({
//     width: 0,
//     height: 0,
//   });

//   const handleLengthChange = (event) => {
//     const newLength = parseInt(event.target.value, 10);
//     setScaleLength(newLength);
//   };

//   const handleImageLoad = (event) => {
//     const { naturalWidth, naturalHeight } = event.target;
//     setImageDimensions({ width: naturalWidth, height: naturalHeight });
//   };

//   return (
//     <div className="App">
//       <h1>Scale Bar Example</h1>
//       <input type="number" value={scaleLength} onChange={handleLengthChange} />
//       <ScaleBar
//         length={scaleLength}
//         units="px"
//         tickInterval={20}
//         imageWidth={imageDimensions.width}
//       />
//       <div className="mx-96">
//         <img src={selectedImage} alt="Your Image" onLoad={handleImageLoad} />
//         {imageDimensions.width && <p>Image Width: {imageDimensions.width}px</p>}
//       </div>
//     </div>
//   );
// };

//   const [scaleLength, setScaleLength] = useState(2100); // Initial scale bar length
//   const [imageDimensions, setImageDimensions] = useState({
//     width: 0,
//     height: 0,
//   });

//   const handleLengthChange = (event) => {
//     const newLength = parseInt(event.target.value, 10);
//     setScaleLength(newLength);
//   };

//   const handleImageLoad = (event) => {
//     const { naturalWidth, naturalHeight } = event.target;
//     setImageDimensions({ width: naturalWidth, height: naturalHeight });
//   };

//   const calculateScaleFactor = () => {
//     if (imageDimensions.width === 0 || scaleLength === 0) {
//       return 0;
//     }
//     return imageDimensions.width / scaleLength;
//   };

//   return (
//     <div className="App">
//       <h1>Scale Bar Example</h1>
//       <input type="number" value={scaleLength} onChange={handleLengthChange} />
//       <ScaleBar length={scaleLength} units="px" tickInterval={20} />
//       <div>
//         <img src={selectedImage} alt="Your Image" onLoad={handleImageLoad} />
//         {imageDimensions.width && imageDimensions.height && (
//           <p>
//             Image Dimensions: {imageDimensions.width}px x{" "}
//             {imageDimensions.height}px
//           </p>
//         )}
//       </div>
//       {imageDimensions.width && (
//         <p>Scale Factor: {calculateScaleFactor().toFixed(2)}</p>
//       )}
//     </div>
//   );
// };

//   const [scaleLength, setScaleLength] = useState(100); // Initial scale bar length

//   const handleLengthChange = (event) => {
//     const newLength = parseInt(event.target.value, 10);
//     setScaleLength(newLength);
//   };

//   return (
//     <div className="">
//       <h1>Scale Bar Example</h1>
//       <input type="number" value={scaleLength} onChange={handleLengthChange} />
//       <ScaleBar length={scaleLength} units="px" tickInterval={20} />
//     </div>
//   );
// };
// const canvasRef = useRef(null);
// const [imageWidth, setImageWidth] = useState(200);
// const [imageHeight, setImageHeight] = useState(200);
// const [isDrawing, setIsDrawing] = useState(false);
// const [startX, setStartX] = useState(0);
// const [startY, setStartY] = useState(0);

// const handleMouseDown = (e) => {
//   setIsDrawing(true);
//   setStartX(e.nativeEvent.offsetX);
//   setStartY(e.nativeEvent.offsetY);
// };

// const handleMouseMove = (e) => {
//   if (!isDrawing) return;

//   const canvas = canvasRef.current;
//   const context = canvas.getContext("2d");
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   const currentX = e.nativeEvent.offsetX;
//   const currentY = e.nativeEvent.offsetY;

//   context.beginPath();
//   context.moveTo(startX, startY);
//   context.lineTo(currentX, currentY);
//   context.stroke();
// };

// const handleMouseUp = (e) => {
//   setIsDrawing(false);
// };
//   const canvasRef = useRef(null);

//   const [imageWidth, setImageWidth] = useState(200);
//   const [imageHeight, setImageHeight] = useState(200);

//   const handleDraw = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     context.beginPath();
//     context.moveTo(10, 10); // Starting point
//     context.lineTo(100, 100); // Ending point
//     context.stroke();

//     // Draw scale lines using context.lineTo(), context.stroke(), etc.
//     // Remember to map the canvas coordinates to image coordinates.
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Width:
//           <input
//             type="number"
//             value={imageWidth}
//             onChange={(e) => setImageWidth(parseInt(e.target.value))}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Height:
//           <input
//             type="number"
//             value={imageHeight}
//             onChange={(e) => setImageHeight(parseInt(e.target.value))}
//           />
//         </label>
//       </div>
//       <img
//         src={selectedImage}
//         alt="Image"
//         width={imageWidth}
//         height={imageHeight}
//       />
//       <canvas
//         ref={canvasRef}
//         width={imageWidth}
//         height={imageHeight}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       />
//       {/* <button onClick={handleDraw}>Draw Scale</button> */}
//       {/* <button onClick={handleFixImage}>Fix Image Size</button> */}
//     </div>
//   );
// };

//   const [width, setWidth] = useState(200);
//   const [height, setHeight] = useState(200);

//   const handleWidthChange = (event) => {
//     const newWidth = parseInt(event.target.value);
//     setWidth(newWidth);
//     setHeight((newWidth / width) * height);
//   };

//   const handleHeightChange = (event) => {
//     const newHeight = parseInt(event.target.value);
//     setHeight(newHeight);
//     setWidth((newHeight / height) * width);
//   };

//   return (
//     <div className="flex flex-col items-center mt-4">
//       <div className="mb-2">
//         <label className="block mb-1">Width:</label>
//         <input
//           type="number"
//           value={width}
//           onChange={handleWidthChange}
//           className="w-24 px-2 py-1 border rounded"
//         />
//       </div>
//       <div className="mb-2">
//         <label className="block mb-1">Height:</label>
//         <input
//           type="number"
//           value={height}
//           onChange={handleHeightChange}
//           className="w-24 px-2 py-1 border rounded"
//         />
//       </div>
//       <div className="w-48 h-48 border overflow-hidden">
//         <img
//           src={selectedImage}
//           alt="Scaled Object"
//           style={{ width: `${width}px`, height: `${height}px` }}
//         />
//       </div>
//     </div>
//   );
// };

export default Scale;
