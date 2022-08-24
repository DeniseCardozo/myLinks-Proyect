import axios from "axios";

const urlAuth = "http://localhost:3001/auth";

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