// rootReducer.js
import { combineReducers } from "redux";
import imageReducer from "./SelectedImage";
import cropReducer from "./Crop";
import rectangleMarqueToolReducer from "./RectangleMarqueToolReducer";
import { textBoxReducer } from "./TextBox";
import lassoReducer from "./Lasso";




const rootReducer = combineReducers({
    selectedImage: imageReducer,
    cropReducer: cropReducer,
    rectangleMarqueToolReducer: rectangleMarqueToolReducer,
    textBoxReducer: textBoxReducer,
    magneticLasso : lassoReducer,
});

export default rootReducer;
