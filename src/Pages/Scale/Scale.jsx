import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Scale.css";
import ScaleBar from "./ScalBar";

const Scale = () => {
  const selectedImage = useSelector((state) => state.selectedImage);

  const [scaleLength, setScaleLength] = useState(200); // Initial scale bar length
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleLengthChange = (event) => {
    const newLength = parseInt(event.target.value, 10);
    setScaleLength(newLength);
  };

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageDimensions({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <div className="App">
      <h1>Scale Bar Example</h1>
      <input type="number" value={scaleLength} onChange={handleLengthChange} />
      <ScaleBar
        length={scaleLength}
        units="px"
        tickInterval={20}
        imageWidth={imageDimensions.width}
      />
      <div>
        <img src={selectedImage} alt="Your Image" onLoad={handleImageLoad} />
        {imageDimensions.width && <p>Image Width: {imageDimensions.width}px</p>}
      </div>
    </div>
  );
};

export default Scale;
