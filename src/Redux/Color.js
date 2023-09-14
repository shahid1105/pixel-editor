// reducers/colorReducer.js


const initialState = {
    color: 'black', // Initial color value
};

// actions/colorActions.js

export const SET_COLOR = 'SET_COLOR';

export const setColor = (color) => ({
    type: SET_COLOR,
    payload: color,
});


const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return {
                ...state,
                color: action.payload, // Update the color with the selected color
            };
        default:
            return state;
    }
};

export default colorReducer;
