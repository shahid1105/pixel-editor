// import React, { useState, useRef } from "react";
// import Cropper from "react-easy-crop";
// import { fabric } from "fabric";

// const ImageCropper = ({ imageSrc }) => {
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [canvas, setCanvas] = useState(null);
//   const [croppingComplete, setCroppingComplete] = useState(false); // Added croppingComplete state
//   const canvasRef = useRef(null);

//   const onCropComplete = async (_, croppedAreaPixels) => {
//     if (canvas && imageSrc) {
//       const croppedCanvas = document.createElement("canvas");
//       const croppedCtx = croppedCanvas.getContext("2d");

//       const img = new Image();
//       img.src = imageSrc;
//       await img.decode();

//       croppedCanvas.width = croppedAreaPixels.width;
//       croppedCanvas.height = croppedAreaPixels.height;

//       croppedCtx.drawImage(
//         img,
//         croppedAreaPixels.x,
//         croppedAreaPixels.y,
//         croppedAreaPixels.width,
//         croppedAreaPixels.height,
//         0,
//         0,
//         croppedAreaPixels.width,
//         croppedAreaPixels.height
//       );

//       canvas.clear();
//       const fabricImage = new fabric.Image(croppedCanvas, {
//         left: 0,
//         top: 0,
//       });
//       canvas.add(fabricImage);
//       canvas.renderAll();

//       // Set cropping completion to true
//       setCroppingComplete(true);
//     }
//   };

//   const finishCrop = () => {
//     // Implement any logic needed to finalize the crop
//     // For example, you can save the cropped image or perform other actions here.
//     alert("Crop finished!");
//   };

//   return (
//     <div>
//       <div style={{ position: "relative", width: "500px", height: "500px" }}>
//         <canvas ref={canvasRef}></canvas>
//         <Cropper
//           image={imageSrc}
//           crop={crop}
//           zoom={zoom}
//           aspect={1}
//           onCropChange={setCrop}
//           onZoomChange={setZoom}
//           onCropComplete={onCropComplete}
//         />
//         {croppingComplete && (
//           <button className="btn-primary" onClick={finishCrop}>
//             Finish Crop
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageCropper;
