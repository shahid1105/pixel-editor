// rootReducer.js
import { combineReducers } from "redux";
import imageReducer from "./SelectedImage";
import cropReducer from "./Crop";
import rectangleMarqueToolReducer from "./RectangleMarqueToolReducer";
import { textBoxReducer } from "./TextBox";
import canvasReducer from "./CanvasReducer";



const rootReducer = combineReducers({
    selectedImage: imageReducer,
    cropReducer: cropReducer,
    rectangleMarqueToolReducer: rectangleMarqueToolReducer,
    textBoxReducer: textBoxReducer,
    canvasReducer: canvasReducer,
});

export default rootReducer;
