import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const DemoCanvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: 'white',
    });

    // Enable clipboard for the canvas
    newCanvas.clipboard = true;

    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

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
      canvas.renderAll();
    }
  };

  const handleCopy = () => {
    if (canvas) {
      canvas.getActiveObject().clone((cloned) => {
        canvas.clipboard = cloned;
      });
    }
  };

  const handlePaste = () => {
    if (canvas && canvas.clipboard) {
      canvas.clipboard.clone((cloned) => {
        canvas.discardActiveObject();
        cloned.set({
          left: 100, // Adjust the paste position as needed
          top: 100,
        });
        canvas.add(cloned);
        canvas.setActiveObject(cloned);
        canvas.requestRenderAll();
      });
    }
  };


  const handleCopy2 = () => {
    if (canvas) {
      canvas.getActiveObject().clone((cloned) => {
        canvas.clipboard = cloned;
      });
      alert('Object copied (Ctrl+C)');
    }
  };

  const handlePaste2 = () => {
    if (canvas && canvas.clipboard) {
      canvas.clipboard.clone((cloned) => {
        canvas.discardActiveObject();
        cloned.set({
          left: 100, // Adjust the paste position as needed
          top: 100,
        });
        canvas.add(cloned);
        canvas.setActiveObject(cloned);
        canvas.requestRenderAll();
      });
    }
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if Ctrl (or Cmd on Mac) and 'C' are pressed
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        alert('Ctrl+C (or Cmd+C on Mac) pressed!');
        // handleCopy();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={addRect}>Add Rectangle</button>
        <button onClick={handleCopy}>Copy (Ctrl+C)</button>
        <button onClick={handlePaste}>Paste (Ctrl+V)</button>
        <button onClick={handleCopy2}>Copy (Ctrl+C)</button>
        <button onClick={handlePaste2}>Paste (Ctrl+V)</button>
      
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DemoCanvas;
