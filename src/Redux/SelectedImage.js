

// Initial state
const initialState = {
    selectedImage: '',
    // Other initial state properties...
};

// Actions
export const setSelectedImage = (imageUrl) => ({
    type: 'SET_SELECTED_IMAGE',
    payload: imageUrl,
});

// Reducer
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_IMAGE':
            return { ...state, selectedImage: action.payload };
        // Handle other cases...
        default:
            return state;
    }
};



// // Custom useDispatch hook
// export const useDispatch = () => useReduxDispatch();

// // Custom useSelector hook
// export const useSelector = (selector) => useReduxSelector(selector);

export default imageReducer;