import axios from "axios";
import api from "./Interceptor";

const SERVER_URL = "https://ingreentech.ir/back/public/api/v1";

//@desc ثبت نام کاربر مرحله اول
//@route POST https://ingreentech.ir/back/public/api/v1/auth/signin
export const authSignUp = (info) => {
    const url = `${SERVER_URL}/auth/signin`;
    return axios.post(url, info);
}

//@desc بررسی ایمیل برای ورود
//@route POST https://ingreentech.ir/back/public/api/v1/auth/check-email
export const checkEmailAPI = (email) => {
    const url = `${SERVER_URL}/auth/check-email`;
    return axios.post(url, email);
}

//@desc ورود با گذرواژه و گرفتن token
//@route POST https://ingreentech.ir/back/public/api/v1/auth/login-password
export const LoginPassword = (password) => {
    const url = `${SERVER_URL}/auth/login-password`;
    return axios.post(url, password);
}

//@desc گرفتن اطلاعات کاربر مرحله ثبت نام در سایت که یکسری اطلاعات ثبت نام اولیه رو میده
//@route GET https://ingreentech.ir/back/public/api/v1/auth/me/${token}
// export const userInfo = () => {
//     const url = `${SERVER_URL}/auth/me`;
//     return api.get(url);
// }

//desc گرفتن کل اطلاعات کاربر ثبت نام در فرم های منتور و شرکت کننده و همراه به علاوه اطلاعات ثبت نام مرحله اول
//@route GET https://ingreentech.ir/back/public/api/v1/auth/register-info/${token}
export const userAllInfo = () => {
    const url = `${SERVER_URL}/auth/register-info`;
    return api.get(url);
}

//@desc تغییر گذرواژه
//@route POST https://ingreentech.ir/back/public/api/v1/auth/change-password
export const changePassword = (info) => {
    const url = `${SERVER_URL}/auth/change-password`;
    return api.post(url, info);
}


//==================== GET List of Users ====================//
export const authenticationsList = () => {
    const url = `${SERVER_URL}/auth/users`;
    return api.post(url,null);
}

