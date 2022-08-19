import { GET_USER, GET_ALL_BOXES, POST_NEW_BOX } from "../actions";

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
        case POST_NEW_BOX:
            return {
                ...state,
                boxes: [...state.boxes, action.payload]
            }
        default:
            return { ...state };
    }
}; 
export default rootReducer;