import React from "react";

const ScaleBar = ({ length, units, tickInterval, imageWidth }) => {
  const tickCount = length / tickInterval;
  const tickMarks = [];

  const tickStyle = {
    width: "1px",
    height: "10px",
    backgroundColor: "#000",
  };

  const labelStyle = {
    fontSize: "12px",
    marginTop: "5px",
    textAlign: "center",
  };

  for (let i = 0; i < tickCount; i++) {
    tickMarks.push(<span style={tickStyle} key={i}></span>);
  }

  const imageIndicatorStyle = {
    position: "relative",
    width: `${(imageWidth / length) * 100}%`,
    marginLeft: "10px", // Gap between image and scale
    backgroundColor: "#ff0000",
    height: "20px",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
      }}>
      {tickMarks}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <div style={imageIndicatorStyle}></div>
      </div>
      <span style={labelStyle}>{`${length} ${units}`}</span>
    </div>
  );
};

export default ScaleBar;

// import React from "react";

// const ScaleBar = ({ length, units, tickInterval, imageWidth }) => {
//   const tickCount = length / tickInterval;
//   const tickMarks = [];
//   const scaleFactor = length / imageWidth; // Calculate scale factor

//   const tickStyle = {
//     width: "1px",
//     height: "10px",
//     backgroundColor: "#000",
//   };

//   const labelStyle = {
//     fontSize: "12px",
//     marginTop: "5px",
//     textAlign: "center",
//   };

//   for (let i = 0; i < tickCount; i++) {
//     tickMarks.push(<span style={tickStyle} key={i}></span>);
//   }

//   const imageIndicatorStyle = {
//     width: `${imageWidth}px`,
//     height: "20px",
//     backgroundColor: "#ff0000",
//     marginTop: "10px", // Gap between scale and image indicator
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         width: "100%",
//         backgroundColor: "#f0f0f0",
//         border: "1px solid #ccc",
//       }}>
//       {tickMarks}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//         }}>
//         <div
//           style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//           <div style={imageIndicatorStyle}></div>
//         </div>
//       </div>
//       <span style={labelStyle}>{`${length * scaleFactor} ${units}`}</span>
//     </div>
//   );
// };

// export default ScaleBar;
