//
const initialState = {
    isPenToolClick: false,
};

const SET_PEN_TOOL  = "PEN_TOOL";

export const setPenTool = (isPenToolClick) =>({
    type: SET_PEN_TOOL,
    payload: isPenToolClick,
});

const penToolReducer = (state = initialState , action) =>{

    switch (action.type){
        case SET_PEN_TOOL:
            return {
                ...state,
                isPenToolClick: action.payload,
            };
            default:
                return state;
    }

};

export default penToolReducer;