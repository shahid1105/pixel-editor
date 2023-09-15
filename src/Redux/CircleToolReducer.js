//
const initialState = {
    isCircleToolClick: false,
};

const SET_CIRCLE_TOOL  = "CIRCLE_TOOL";

export const setCircleTool = (isCircleToolClick) =>({
    type: SET_CIRCLE_TOOL,
    payload: isCircleToolClick,
});

const circleToolReducer = (state = initialState , action) =>{

    switch (action.type){
        case SET_CIRCLE_TOOL:
            return {
                ...state,
                isCircleToolClick: action.payload,
            };
            default:
                return state;
    }

};

export default circleToolReducer;