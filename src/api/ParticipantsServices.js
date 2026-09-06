import axios from "axios";
import api from "./Interceptor";

const SERVER_URL = "https://ingreentech.ir/back/public/api/v1";

//@desc create new participant
//@route POST https://ingreentech.ir/back/public/register/participant
export const participantSignIn = (participantSignIn) => {
    const url = `${SERVER_URL}/register/participant`
    return api.post(url , participantSignIn);
}

//@desc create new mentor
//@route POST https://ingreentech.ir/back/public/register/referee-mentor
export const mentorsSignIn = (mentorSignIn) => {
    const url = `${SERVER_URL}/register/referee-mentor`
    return api.post(url , mentorSignIn);
}

//@desc create new entourage(hamrahan)
//@route POST https://ingreentech.ir/back/public/register/referee-mentor
export const entouragesSignIn = (entourageSignIn) => {
    const url = `${SERVER_URL}/register/entourage`
    return api.post(url , entourageSignIn);
}

//@desc GET all registers
//@route POST https://ingreentech.ir/back/public/register/list
export const getAllRegisters= () => {
    const url = `${SERVER_URL}/register/list`;
    return api.post(url,null);
}

//@desc گرفتن اطلاعات یک ثبت نام
//@rout GET https://ingreentech.ir/back/public/api/v1/register/get/${id}
export const getOneRegisterInformation = (registerId) => {
    const url = `${SERVER_URL}/register/get/${registerId}`;
    return api.get(url);
}

//@desc delete account
//@route DELETE https://ingreentech.ir/back/public/register/delete/${registerId} with header Authorization
export const deleteRegister = (registerId) => {
    const url = `${SERVER_URL}/register/delete/${registerId}`
    return api.delete(url);
}


//-----------------------UPLOAD AND DOWNLOAD PDF-----------------------------

//@desc upload file
//@route POST https://ingreentech.ir/back/public/upload/file
export const uploadFile = (file,type) => {
    const url = `${SERVER_URL}/upload/file`;
    const fileData = new FormData()
    fileData.append(`file`, file);
    fileData.append(`type`,type);
    return api.post(url, fileData);
}

//@desc download file
//@route POST https://ingreentech.ir/back/public/upload/file/{fileId}
export const downLoadFile = (fileId) => {
    const url = `${SERVER_URL}/upload/file/${fileId}`;
    return api.get(url,{
        responseType: "blob"
    });
}