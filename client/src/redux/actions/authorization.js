import axios from "axios";

const urlAuth = "http://localhost:3001/auth";

export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";


export const setToken = (token) => {
    return localStorage.setItem("token", token);
};
  
export const getToken = () => {
    return localStorage.getItem("token");
};
  
export const deleteToken = () => {
    return localStorage.removeItem("token");
};

///////////////////

export const postNewUser = (inputValue) => async () => {
    try {
        const input = {
            name: inputValue.name,
            e_mail: inputValue.e_mail,
            password: inputValue.password
        }

        return await axios
        .post(`${urlAuth}/register`, input)
    } catch (error) {
        console.log(error)
    }
};

export const postLogin = (inputValue) => async (dispatch) => {
    try {
        const input = {
            e_mail: inputValue.e_mail,
            password: inputValue.password
        };
        const response = await axios
        .post(`${urlAuth}/login`, input);
        const token = response.data.token;
        setToken(token);
        dispatch({
            type: AUTHENTICATED,
            payload: response.data.user
        })
    } catch (error) {
        console.log(error)
    }
};

export const logoutUser = () => {
    deleteToken();
    return {
        type: NOT_AUTHENTICATED
    }
};