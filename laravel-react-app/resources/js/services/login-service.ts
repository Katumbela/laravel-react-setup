import axios from "axios";
import { handleErrorResponse } from "../domain/errors/handle-errors";

const loginAndStoreToken = async (url, credentials) => {
    try {
        const response = await axios.post(url, credentials);
        const token = response.data.token;
        // Armazenar o token no armazenamento (localStorage, sessionStorage, etc.)

        handleErrorResponse(response);
        if (!token) {
            return;
        } else {
            localStorage.setItem("token", token);
            return token;
        }
    } catch (error) {
        handleErrorResponse(error.response);
        throw error;
    }
};

export default loginAndStoreToken;
