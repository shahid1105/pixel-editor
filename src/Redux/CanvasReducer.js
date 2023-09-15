// Redux actions (actions.js)
export const setBackgroundColor = (color) => ({
    type: "SET_BACKGROUND_COLOR",
    payload: color,
});

export const setTextColor = (color) => ({
    type: "SET_TEXT_COLOR",
    payload: color,
});

export const addTextToCanvas = (text) => ({
    type: "ADD_TEXT",
    payload: text,
});

// Redux reducers (reducers.js)
const initialState = {
    backgroundColor: "white",
    textColor: "black",
    canvasContent: [], // You can use an array to store canvas elements
};

const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BACKGROUND_COLOR":
            return { ...state, backgroundColor: action.payload };
        case "SET_TEXT_COLOR":
            return { ...state, textColor: action.payload };
        case "ADD_TEXT":
            return { ...state, canvasContent: [...state.canvasContent, action.payload] };
        // Add more cases for other canvas actions
        default:
            return state;
    }
};

export default canvasReducer;






