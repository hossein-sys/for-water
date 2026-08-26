import api from "./Interceptor";
const SERVER_URL = "https://ingreentech.ir/back/public/api/v1";

//@desc ویرایش اطلاعات شرکت کننده
//@rout PUT https://ingreentech.ir/back/public/api/v1/register/participant/${register-id}
export const editParticipant = ( id,userData) =>{
    const url = `${SERVER_URL}/register/participant/${id}`;
    return api.put(url, userData)
}

//@desc ویرایش اطلاعات داور و منتور
//@rout PUT https://ingreentech.ir/back/public/api/v1/register/referee-mentor/${register-id}
export const editMentor = (id,userData) =>{
    const url = `${SERVER_URL}/register/referee-mentor/${id}`;
    return api.put(url, userData)
}

//@desc ویرایش اطلاعات همراهان
//@rout PUT https://ingreentech.ir/back/public/api/v1/register/entourage/${register-id}
export const editEntourage = (id,userData) =>{
    const url = `${SERVER_URL}/register/entourage/${id}`;
    return api.put(url, userData)
}