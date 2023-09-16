// rootReducer.js
import { combineReducers } from "redux";
import imageReducer from "./SelectedImage";
import cropReducer from "./Crop";
import rectangleMarqueToolReducer from "./RectangleMarqueToolReducer";
import { textBoxReducer } from "./TextBox";
import lassoReducer from "./Lasso";
import canvasReducer from "./CanvasReducer";
import circleToolReducer from "./CircleToolReducer";
import penToolReducer from "./PenToolReducer";
import blurReducer from "./Blur";
import colorReducer from "./Color";





const rootReducer = combineReducers({
    selectedImage: imageReducer,
    cropReducer: cropReducer,
    rectangleMarqueToolReducer: rectangleMarqueToolReducer,
    circleToolReducer: circleToolReducer,
    textBoxReducer: textBoxReducer,
    penToolReducer: penToolReducer,
    magneticLasso: lassoReducer,
    colorReducer: colorReducer,
    canvasReducer: canvasReducer,
    blurReducer: blurReducer,

});

export default rootReducer;
