import React, { useRef, useState } from 'react';
import { fabric } from 'fabric';

const CanvasWithPenTool = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedShape, setSelectedShape] = useState('path'); // 'path' or 'rectangle'
  const [drawingMode, setDrawingMode] = useState(false);

  const canvasWidth = 600;
  const canvasHeight = 400;

  const handleShapeChange = (shape) => {
    setSelectedShape(shape);
  };

  const enableDrawingMode = () => {
    setDrawingMode(true);
  };

  const disableDrawingMode = () => {
    setDrawingMode(false);
  };

  const handleCanvasMouseDown = (e) => {
    if (drawingMode) {
      setIsDrawing(true);
      const pointer = canvasRef.current.getPointer(e.e);
      const { x, y } = pointer;

      if (selectedShape === 'path') {
        const path = new fabric.Path(`M ${x} ${y}`, { stroke: 'black', strokeWidth: 2 });
        canvasRef.current.add(path);
        path.path.push(['L', x, y]);
        path.setCoords();
        canvasRef.current.renderAll();
        path.set({
          originX: 'center',
          originY: 'center',
        });
      } else if (selectedShape === 'rectangle') {
        const rect = new fabric.Rect({
          left: x,
          top: y,
          width: 0,
          height: 0,
          stroke: 'black',
          strokeWidth: 2,
          fill: 'transparent',
        });
        canvasRef.current.add(rect);
        rect.setCoords();
        canvasRef.current.renderAll();
      }
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (!isDrawing) return;

    const pointer = canvasRef.current.getPointer(e.e);
    const { x, y } = pointer;
    const objects = canvasRef.current.getObjects();

    if (selectedShape === 'path') {
      const path = objects[objects.length - 1];
      path.path.push(['L', x, y]);
      path.setCoords();
      canvasRef.current.renderAll();
    } else if (selectedShape === 'rectangle') {
      const rect = objects[objects.length - 1];
      const { left, top } = rect;
      rect.set({ width: x - left, height: y - top });
      rect.setCoords();
      canvasRef.current.renderAll();
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDrawing(false);
  };
  const handleFront = () =>{
    
  }

  return (
    <div>
      <div>
        <button onClick={() => handleShapeChange('path')}>Pen</button>
        <button onClick={() => handleShapeChange('rectangle')}>Rectangle</button>
        <button onClick={enableDrawingMode}>Enable Drawing</button>
        <button onClick={disableDrawingMode}>Disable Drawing</button>
        <button onClick={handleFront}>BEing front</button>

      </div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}
      />
    </div>
  );
};

export default CanvasWithPenTool;
