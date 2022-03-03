/* eslint-disable prettier/prettier */
import axios from "axios";

export default () => {
    return axios.create({
        baseURL: "https://localhost:3000/api",
        withCredentials: false,
        headers: {
            Accept: "aplication/json",
            "Content-Type": "aplication/json",
        },
    });
};
