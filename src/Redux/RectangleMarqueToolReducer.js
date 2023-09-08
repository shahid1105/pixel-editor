//
const initialState = {
    isRectangleMarqueToolClick: false,
};

const SET_RECTANGLE_MARQUE_TOOL  = "RECTANGLE_MARQUE_TOOL";

export const setRectangleMarqueTool = (isRectangleMarqueToolClick) =>({
    type: SET_RECTANGLE_MARQUE_TOOL,
    payload: isRectangleMarqueToolClick,
});

const rectangleMarqueToolReducer = (state = initialState , action) =>{

    switch (action.type){
        case SET_RECTANGLE_MARQUE_TOOL:
            return {
                ...state,
                isRectangleMarqueToolClick: action.payload,
            };
            default:
                return state;
    }

};

export default rectangleMarqueToolReducer;