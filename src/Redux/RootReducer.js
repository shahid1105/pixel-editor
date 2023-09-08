// rootReducer.js
import { combineReducers } from "redux";
import imageReducer from "./SelectedImage";
import cropReducer from "./Crop";



const rootReducer = combineReducers({
    selectedImage: imageReducer,
    cropReducer: cropReducer,
});

export default rootReducer;
