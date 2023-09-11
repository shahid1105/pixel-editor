import React, { useRef } from "react";
import { fabric } from "fabric";

function TextTool({ fabricCanvas }) {
  const textInputRef = useRef(null);

  const handleAddText = () => {
    if (!fabricCanvas) return;

    const text = new fabric.Textbox(textInputRef.current.value, {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: "black",
      selectable: true,
      selectionColor:'red'
    });
    fabricCanvas.requestRenderAll();

    fabricCanvas.add(text); 
    // fabricCanvas.renderAll.bind(fabricCanvas);
    fabricCanvas.setActiveObject(text)
    
    
    // Add text to the fabricCanvas
  };

  return (
    <div>
      <input type="text" ref={textInputRef} placeholder="Enter text" />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
}

export default TextTool;
