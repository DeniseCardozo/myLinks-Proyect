import { GET_USER, GET_ALL_BOXES } from "../actions";

const initialState = {
    user: {},
    boxes: [],
 //   links: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case GET_ALL_BOXES:
            return {
                ...state,
                boxes: action.payload,
            }
        default:
            return { ...state };
    }
}; 
export default rootReducer;