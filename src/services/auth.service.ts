import axios from "axios";
const API_URL = "http://localhost:3000/api/auth/"

export const register = (username: string, email: string, password: string) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    })
}