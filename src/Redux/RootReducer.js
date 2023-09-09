// rootReducer.js
import { combineReducers } from "redux";
import imageReducer from "./SelectedImage";
import cropReducer from "./Crop";
import { textBoxReducer } from "./TextBox";



const rootReducer = combineReducers({
    selectedImage: imageReducer,
    cropReducer: cropReducer,
    textBoxReducer: textBoxReducer,
});

export default rootReducer;
