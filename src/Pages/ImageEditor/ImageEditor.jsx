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

const ImageEditor = () => {
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

const [property, setProperty] = useState(
    {
        name: "brightness",
        maxValue: 200,
    },
)

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  console.log(state);

  const handleInput = (e) =>{
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
  }

  const leftRotate = () =>{
setState({
    ...state,
    rotate:state.rotate -90
})
  }

  const rightRotate = () =>{
setState({
    ...state,
    rotate:state.rotate +90
})
  }

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
console.log(property)

  return (
    <div className="bg-slate-300 p-6 text-black md:w-[70%] md:h-[85%]">
      <div>
        <h3 className="text-center uppercase font-bold text-purple-600 text-3xl">
          ~~~~~~~Image Editor~~~~~~~
        </h3>
        <div className="grid md:grid-cols-2 rounded-md mt-5 w-auto md:w-[500px]">
          <div>
            <div className="border-solid border-black border-2 p-2">
              <h3>Filters</h3>
              <div className="grid md:grid-cols-2 mx-auto justify-center gap-2">
                {filterElement.map((v, i) => (
                  <button onClick={()=> setProperty(v)} className={`btn btn-outline btn-primary ${property.name === v.name? 'active bg-violet-500' : ''}`} key={i}>
                    {v.name}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Rotate</span>
                  <span>100%</span>
                </div>
                <div>
                {/* <input className="w-[100%]" type="range" /> */}
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
                    <div onClick={leftRotate} className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuRotateCcw></LuRotateCcw>
                    </div>
                    <div onClick={rightRotate} className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuRotateCw></LuRotateCw>
                    </div>
                    <div className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuFlipHorizontal2></LuFlipHorizontal2>
                    </div>
                    <div className="flex gap-3 mt-2 border-solid border-purple-600 border-2 py-2 px-2 text-2xl">
                      <LuFlipVertical2></LuFlipVertical2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
              <button className="btn btn-secondary btn-sm">Reset</button>
              <button className="btn btn-primary btn-sm">Save Image</button>
            </div>
          </div>

          <div className="w-auto md:w-[480px] h-auto md:h-[355px] ml-2">
            <div className="w-full h-full flex flex-col justify-center items-center bg-slate-100 mb-3 border-dotted border-blue-500 border-2 cursor-pointer overflow-hidden ">
              {state.image ? (
                <img style={{filter: `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}deg)`, transform: `rotate(${state.rotate}deg) scale(${state.vertical}, ${state.horizontal})`}} className="w-[100%] h-[100%] transition-all" src={state.image} alt="" />
              ) : (
                <label htmlFor="choose">
                  <LuImagePlus className="text-4xl mx-auto"></LuImagePlus>
                  <span>Choose Image</span>
                </label>
              )}
            </div>
            <div className="image_select flex gap-1 justify-between items-center mt-5 px-6 mb-10">
              <div className="text-xl btn btn-outline btn-primary btn-sm">
                <LuUndo2></LuUndo2>
              </div>
              <div className="text-xl btn btn-outline btn-primary btn-sm">
                <LuRedo2></LuRedo2>
              </div>
              <h3 className="btn btn-outline btn-secondary btn-sm">
                Crop Image
              </h3>
              {/* <label htmlFor="choose">Choose Image</label> */}
              <input
                onChange={handleImage}
                className="md:w-[50%] btn btn-outline btn-primary btn-sm"
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

