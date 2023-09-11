import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const NewCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor,
      width: 500,
      height: 500,
    });
    setCanvas(canvas);

    // Function to load an image onto the canvas
    const loadImage = (file) => {
      if (!file) return;
      fabric.Image.fromURL(URL.createObjectURL(file), (img) => {
        imageRef.current = img;
        canvas.add(img);
      });
    };

    // Event listener for image upload
    const fileInput = document.getElementById("image-upload");
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      loadImage(file);
    });

    // Event listener for background color change
    const backgroundColorInput = document.getElementById("background-color");
    backgroundColorInput.addEventListener("change", (e) => {
      setBackgroundColor(e.target.value);
      canvas.backgroundColor = e.target.value;
      canvas.renderAll();
    });

    // Function to add text to canvas
    const addText = () => {
      const newText = new fabric.IText("Enter text", {
        left: 50,
        top: 50,
        fontSize: 24,
        fill: textColor, // Use the current textColor state value
      });
      textRef.current = newText;
      canvas.add(newText);
      canvas.renderAll();
    };

    // Event listener for "Add Text" button
    const addTextButton = document.getElementById("add-text");
    addTextButton.addEventListener("click", () => {
      addText();
    });

    // Event listener for text color change
    const textColorInput = document.getElementById("text-color");
    textColorInput.addEventListener("change", (e) => {
      const newTextColor = e.target.value;
      setTextColor(newTextColor);
      if (textRef.current) {
        textRef.current.set({ fill: newTextColor }); // Update fill property with the new text color
        canvas.renderAll();
      }
    });
  }, [backgroundColor, textColor]);

  return (
    <div className="flex justify-center text-center align-middle">
      <input type="file" id="image-upload" accept="image/*" />
      <input
        type="color"
        id="background-color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <input
        type="color"
        id="text-color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
      <button id="add-text">Add Text</button>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default NewCanvas;
