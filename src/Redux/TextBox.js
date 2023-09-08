// Redux action types
const ADD_TEXTBOX = "ADD_TEXTBOX";
const REMOVE_TEXTBOX = "REMOVE_TEXTBOX";


// state
const initialState = {
    textBox: null,
};

// Redux action creators
export const addTextBox = (textBox) => ({
    type: ADD_TEXTBOX,
    payload: textBox,
});

export const removeTextBox = () => ({
    type: REMOVE_TEXTBOX,
});

//TextBox reducer
export const textBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXTBOX:
            return {
                ...state,
                textBox: action.payload,
            };
        case REMOVE_TEXTBOX:
            return {
                ...state,
                textBox: null,
            };
        default:
            return state;
    }
};
