
import { createStore } from "redux";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer);


export default store;










// import { createStore, combineReducers } from 'redux';

// // Initial state for the image reducer
// const initialImageState = {
//     selectedImage: true,
// };

// // Actions for the image reducer
// export const setSelectedImage = (imageUrl) => ({
//     type: 'SET_SELECTED_IMAGE',
//     payload: imageUrl,
// });

// // Reducer for the image
// const imageReducer = (state = initialImageState, action) => {
//     switch (action.type) {
//         case 'SET_SELECTED_IMAGE':
//             return { ...state, selectedImage: action.payload };
//         // Handle other cases for the image reducer...
//         default:
//             return state;
//     }
// };

// // Initial state for the cropping reducer
// const initialCropState = {
//     isCropping: false,
// };

// // Actions for the cropping reducer
// const SET_CROPPING = 'SET_CROPPING';

// export const setCropping = (isCropping) => ({
//     type: SET_CROPPING,
//     payload: isCropping,
// });

// // Reducer for cropping
// const cropReducer = (state = initialCropState, action) => {
//     switch (action.type) {
//         case SET_CROPPING:
//             return {
//                 ...state,
//                 isCropping: action.payload,
//             };
//         // Handle other cases for the cropping reducer...
//         default:
//             return state;
//     }
// };

// // Combine reducers
// const rootReducer = combineReducers({
//     image: imageReducer, // Use 'image' instead of 'imageReducer'
//     crop: cropReducer,   // Use 'crop' instead of 'cropReducer'
//     // Add other reducers here if needed...
// });

// // Create the Redux store
// const store = createStore(rootReducer);

// export default store;








