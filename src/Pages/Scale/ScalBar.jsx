// import React from "react";

// const ScaleBar = ({ length, units, tickInterval, imageWidth }) => {
//   const tickCount = length / tickInterval;
//   const tickMarks = [];

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
//     position: "relative",
//     width: `${(imageWidth / length) * 100}%`,
//     marginLeft: "10px", // Gap between image and scale
//     backgroundColor: "#ff0000",
//     height: "20px",
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
//         <div style={imageIndicatorStyle}></div>
//       </div>
//       <span style={labelStyle}>{`${length} ${units}`}</span>
//     </div>
//   );
// };

// export default ScaleBar;

import React from "react";

const ScaleBar = ({ imageWidth, units }) => {
  const scaleBarStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "5px",
    boxSizing: "border-box",
  };

  const scaleBarIndicatorStyle = {
    position: "relative",
    width: "100%",
    height: "10px",
    backgroundColor: "#000",
  };

  const imageIndicatorStyle = {
    position: "absolute",
    top: "0",
    left: `${(imageWidth / 2) * 100}%`,
    transform: "translateX(-50%)",
    width: "2px",
    height: "20px",
    backgroundColor: "#ff0000",
  };

  const labelStyle = {
    fontSize: "12px",
    marginTop: "5px",
    textAlign: "center",
  };

  return (
    <div style={scaleBarStyle}>
      <div style={scaleBarIndicatorStyle}>
        <div style={imageIndicatorStyle}></div>
      </div>
      <span style={labelStyle}>{`${imageWidth} ${units}`}</span>
    </div>
  );
};

export default ScaleBar;
