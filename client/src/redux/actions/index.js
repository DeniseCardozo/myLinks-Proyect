import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_ALL_BOXES = "GET_ALL_BOXES";
export const POST_NEW_BOX = "POST_NEW_BOX";
export const PUT_NAME_BOX = "PUT_NAME_BOX";

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

export const postNewBox = (id_User, inputValue) => async (dispatch) => {
    try {
        const input = {
            name: inputValue.name
        }

        return await axios
        .post(`${urlBox}/${id_User}`, input)
        .then((response) => 
            dispatch({
                type: POST_NEW_BOX,
                payload: response.data
            })
        )
    } catch (error) {
        console.log(error)
    }
};

export const putNameBox = (id_box, inputValue) => async () => {
    try {
        const input = {
            name: inputValue.name
        }

        return await axios
        .put(`${urlBox}/${id_box}`, input)
    } catch (error) {
        console.log(error)
    }
};