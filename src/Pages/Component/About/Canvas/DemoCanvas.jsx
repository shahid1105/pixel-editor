import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const DemoCanvas = () => {
  const [canvas, setCanvas] = useState(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the Fabric.js canvas
    const newCanvas = new fabric.Canvas('canvas', {
      backgroundColor: 'red',
    });

    // Attach the canvas to the container
    canvasContainerRef.current.appendChild(newCanvas.wrapperEl);

    // Set the canvas dimensions based on the container size
    const updateCanvasSize = () => {
      const container = canvasContainerRef.current;
      newCanvas.setDimensions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    // Update the canvas size initially and when the window is resized
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Enable touch scroll on mobile and tablet devices
    newCanvas.allowTouchScrolling = true;

    // Store the canvas in state
    setCanvas(newCanvas);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Function to add objects to the canvas
  const addRect = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        left: 50,
        top: 50,
        width: 100,
        height: 100,
        fill: 'blue',
      });
      canvas.add(rect);
    }
  };

  return (
    <div>
      <div>
        <button onClick={addRect}>Add Rectangle</button>
      </div>
      <div ref={canvasContainerRef} className="canvas-container">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
};

export default DemoCanvas;
