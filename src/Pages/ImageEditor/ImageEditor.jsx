import {
  LuFlipHorizontal2,
  LuFlipVertical2,
  LuImagePlus,
  LuRedo2,
  LuRotateCcw,
  LuRotateCw,
  LuUndo2,
} from "react-icons/Lu";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import storeData from "../LinkList.js";
import { useSelector } from "react-redux";

const ImageEditor = () => {
  const selectedImage = useSelector((state) => state.selectedImage);

  const [details, setDetails] = useState("");
  const [crop, setCrop] = useState("");
  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vertical: 1,
    horizontal: 1,
  });

  const [property, setProperty] = useState({
    name: "brightness",
    maxValue: 200,
  });

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });
        const stateData = {
          image: reader.result,
          brightness: 100,
          grayscale: 0,
          sepia: 0,
          saturate: 100,
          contrast: 100,
          hueRotate: 0,
          rotate: 0,
          vertical: 1,
          horizontal: 1,
        };
        storeData.insert(stateData);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const leftRotate = () => {
    setState({
      ...state,
      rotate: state.rotate - 90,
    });
    const stateData = state;
    stateData.rotate = state.rotate - 90;
    storeData.insert(stateData);
  };

  const rightRotate = () => {
    setState({
      ...state,
      rotate: state.rotate + 90,
    });
    const stateData = state;
    stateData.rotate = state.rotate + 90;
    storeData.insert(stateData);
  };

  const verticalFlip = () => {
    setState({
      ...state,
      vertical: state.vertical === 1 ? -1 : 1,
    });
    const stateData = state;
    stateData.vertical = state.vertical === 1 ? -1 : 1;
    storeData.insert(stateData);
  };

  const horizontalFlip = () => {
    setState({
      ...state,
      horizontal: state.horizontal === 1 ? -1 : 1,
    });
    const stateData = state;
    stateData.horizontal = state.horizontal === 1 ? -1 : 1;
    storeData.insert(stateData);
  };

  const redo = () => {
    const data = storeData.redoEdit();
    if (data) {
      setState(data);
    }
  };
  const undo = () => {
    const data = storeData.undoEdit();
    if (data) {
      setState(data);
    }
  };

  const cropImage = () => {
    const canvas = document.createElement("canvas");
    const scaleX = details.naturalWidth / details.width;
    const scaleY = details.naturalHeight / details.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      details,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Url = canvas.toDataURL("image/jpg");
    setState({
      ...state,
      image: base64Url,
    });
  };

  const saveImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = details.naturalWidth;
    canvas.height = details.naturalHeight;
    const ctx = canvas.getContext("2d");

    ctx.filter = `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}deg)`;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((state.rotate * Math.PI) / 180);
    ctx.scale(state.vertical, state.horizontal);

    ctx.drawImage(
      details,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "image_edit.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };

  const filterElement = [
    {
      name: "brightness",
      maxValue: 200,
    },
    {
      name: "grayscale",
      maxValue: 200,
    },
    {
      name: "sepia",
      maxValue: 200,
    },
    {
      name: "saturate",
      maxValue: 200,
    },
    {
      name: "contrast",
      maxValue: 200,
    },
    {
      name: "hueRotate",
    },
  ];

  return (
    <div className="bg-slate-300 p-6 text-black w-full h-full bg-black">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-md mt-5 w-auto md:w-[500px]">
          <div>
            <div className="border-solid border-black border-2 p-2">
              <h3>Filters</h3>
              <div className="grid gap-2 md:grid-cols-2">
                {filterElement.map((v, i) => (
                  <button
                    onClick={() => setProperty(v)}
                    className={`btn btn-outline btn-primary ${
                      property.name === v.name ? "active bg-violet-500" : ""
                    }`}
                    key={i}>
                    {v.name}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Range</span>
                  <span>100%</span>
                </div>
                <div>
                  <input
                    name={property.name}
                    onChange={handleInput}
                    type="range"
                    value={state[property.name]}
                    max={property.maxValue}
                    className="range range-xs range-primary"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="">Rotate & Flip</label>
                  <div className="flex gap-3 mt-1 justify-between">
                    <div
                      onClick={leftRotate}
                      className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuRotateCcw></LuRotateCcw>
                    </div>
                    <div
                      onClick={rightRotate}
                      className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuRotateCw></LuRotateCw>
                    </div>
                    <div
                      onClick={verticalFlip}
                      className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuFlipHorizontal2></LuFlipHorizontal2>
                    </div>
                    <div
                      onClick={horizontalFlip}
                      className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuFlipVertical2></LuFlipVertical2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
              <button className="btn btn-secondary btn-sm">Reset</button>
              <button onClick={saveImage} className="btn btn-primary btn-sm">
                Save Image
              </button>
            </div>
          </div>

          <div className="w-auto mt-3 md:mt-0 md:w-[480px] h-auto md:h-[355px] ml-2">
            <div className="w-full h-full flex flex-col justify-center items-center bg-slate-100 mb-3 border-dotted border-blue-500 border-2 cursor-pointer overflow-hidden ">
              {state.image || selectedImage ? (
                <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                  <img
                    onLoad={(e) => setDetails(e.currentTarget)}
                    style={{
                      filter: `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}deg)`,
                      transform: `rotate(${state.rotate}deg) scale(${state.vertical}, ${state.horizontal})`,
                    }}
                    className="w-[100%] h-[100%] transition-all"
                    src={state.image || selectedImage}
                    alt=""
                  />
                </ReactCrop>
              ) : (
                <label htmlFor="choose">
                  <LuImagePlus className="text-4xl mx-auto">choose image</LuImagePlus>
                  {/* <LuImagePlus className="text-4xl mx-auto"></LuImagePlus> */}

                  <span>Choose Image</span>
                </label>
              )}
            </div>
            <div className="md:mb-0 image_select md:flex gap-1 justify-center items-center mt-5 px-6 mb-10">
              <div
                onClick={undo}
                className="text-xl btn btn-outline btn-primary btn-sm">
                <LuUndo2></LuUndo2>
              </div>
              <div
                onClick={redo}
                className="text-xl btn btn-outline btn-primary btn-sm">
                <LuRedo2></LuRedo2>
              </div>
              {crop && (
                <h3
                  onClick={cropImage}
                  className="btn btn-outline btn-secondary btn-sm">
                  Crop Image
                </h3>
              )}
              {/* <label htmlFor="choose">Choose Image</label> */}
              <input
                onChange={handleImage}
                className="w-[80%] md:w-[50%] btn btn-outline btn-primary btn-sm"
                type="file"
                id="choose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
