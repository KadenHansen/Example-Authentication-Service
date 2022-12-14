import axios from "axios"
const API_URL = "http://localhost:3000/api/auth/"

// Register method: submits POST request with username, email and password to create new user profile
export const register = (username: string, email: string, password: string) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    })
}

// Login method: submits POST request with username, password. Save JWT token to local storage
export const login = (username: string, password: string) => {
    return axios.post(API_URL + "login", {
        username,
        password
    }).then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
    })
}

// Logout method: Deletes JWT token from local storage
export const logout = () => {
    localStorage.removeItem(("user"))
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user")
    if (userStr) return JSON.parse(userStr)
    return null
}