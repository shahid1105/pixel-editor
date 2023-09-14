// Reducer 
const initialState = {
    isLasso: false,
};

const SET_LASSO = "SET_LASSO";

export const setLasso = (isLasso) =>({
    type: SET_LASSO,
    payload: isLasso,
});

const lassoReducer = (state = initialState, action) =>{
switch (action.type) {
    case SET_LASSO:
        return{
            ...state,
            isLasso: action.payload,
        };
    default:
        return state;
}
};

export default lassoReducer;
