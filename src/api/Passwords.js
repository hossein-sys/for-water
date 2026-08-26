import api from "./Interceptor"

const SERVER_URL = "https://ingreentech.ir/back/public/api/v1";

export const changePassword = (value) => {
    const url = `${SERVER_URL}/auth/change-password`
    return api.post(url, value);
}