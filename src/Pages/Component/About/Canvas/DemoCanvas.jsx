import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const CanvasWithDeleteFunctionality = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: 'white',
    });

    // Add some objects to the canvas
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: 'blue',
    });
    canvas.add(rect);

    const circle = new fabric.Circle({
      left: 300,
      top: 100,
      radius: 50,
      fill: 'red',
    });
    canvas.add(circle);

    // Function to delete the selected object
    const deleteSelectedObject = () => {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        canvas.remove(activeObject);
        canvas.discardActiveObject();
        canvas.renderAll();
        
      }
    };
    
  

    // Add a button to trigger the delete functionality
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Selected';
    deleteButton.addEventListener('click', deleteSelectedObject);
    document.body.appendChild(deleteButton);

    return () => {
      canvas.dispose(); // Cleanup canvas when component unmounts
      document.body.removeChild(deleteButton);
    };
  }, []);

  const handleFront = () =>{
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
    canvas.bringToFront(activeObject);
    // canvas.discardActiveObject();
    canvas.renderAll();

    }
  }

  return <div>
    <canvas ref={canvasRef} />
    <button onClick={handleFront}>BEing front</button>

    </div>;
};

export default CanvasWithDeleteFunctionality;
