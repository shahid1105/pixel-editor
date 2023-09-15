// actions.js
export const setNewBlur = (blurValue) => ({
    type: 'SET_BLUR',
    payload: blurValue,
});

// reducers.js
const initialState = {
    blur: 0,
};

const blurReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLUR':
            return {
                ...state,
                blur: action.payload,
            };
        default:
            return state;
    }
};

export default blurReducer;
