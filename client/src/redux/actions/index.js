import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_ALL_BOXES = "GET_ALL_BOXES";

const urlUser = "http://localhost:3001/user";
const urlBox = "http://localhost:3001/box";
const urlLink = "http://localhost:3001/link";

export const getUser = (id_User) => async (dispatch) => {
    return await axios
        .get(`${urlUser}/${id_User}`)
        .then((response) => 
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        )
        .catch((error) => console.log(error));
};

export const getAllBoxes = (id_User) => async (dispatch) => {
    return await axios
        .get(`${urlBox}/${id_User}`)
        .then((response) => 
            dispatch({
                type: GET_ALL_BOXES,
                payload: response.data
            })
        )
        .catch((error) => console.log(error));
};
