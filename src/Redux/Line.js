// lineReducer.js

const initialState = {
    lines: [],
};


// lineActions.js

export const addLine = (line) => ({
    type: 'ADD_LINE',
    payload: line,
});


const lineReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LINE':
            return {
                ...state,
                lines: [...state.lines, action.payload],
            };
        default:
            return state;
    }
};

export default lineReducer;
