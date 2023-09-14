// Reducer
const initialState = {
    isCropping: false,
};

const SET_CROPPING = "SET_CROPPING";

export const setCropping = (isCropping) => ({
    type: SET_CROPPING,
    payload: isCropping,
});

const cropReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CROPPING:
            return {
                ...state,
                isCropping: action.payload,
            };
        default:
            return state;
    }
};


export default cropReducer;
