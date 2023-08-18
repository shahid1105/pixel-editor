// src/redux/index.js
import { createStore } from 'redux';
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch } from 'react-redux';

// Initial state
const initialState = {
    selectedImage: '',
    // Other initial state properties...
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_IMAGE':
            return { ...state, selectedImage: action.payload };
        // Handle other cases...
        default:
            return state;
    }
};

// Store
const store = createStore(rootReducer);

// Actions
export const setSelectedImage = (imageUrl) => ({
    type: 'SET_SELECTED_IMAGE',
    payload: imageUrl,
});

// Custom useDispatch hook
export const useDispatch = () => useReduxDispatch();

// Custom useSelector hook
export const useSelector = (selector) => useReduxSelector(selector);

export default store;
