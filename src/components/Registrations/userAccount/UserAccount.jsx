import { useState,useContext } from "react";
import "../../../css/userAccount.css";
import {contactContext} from "../../../contex/Context";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {authSignUp, checkEmailAPI, LoginPassword} from "../../../api/AuthenticationServices";
import {useNavigate} from "react-router-dom";
import {Slide, toast} from "react-toastify";
import {
    UserAccountLogInCheckEmailSchema,
    UserAccountLogInCheckPasswordSchema,
    UserAccountSignUpSchema
} from "../../../validations/UserAccountValidation";


const UserAccount = () => {

    const [userSignUp , setUserSignUp] = useState({
        user_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [checkEmail, setCheckEmail] = useState({
        email:"",
        loginBySms: false,
        forget_password: false
    });
    const [userLogIn , setUserLogIn] = useState({
        email:"",
        password:""
    });
    const [loginForm , setLoginForm] = useState(false)
    const [switching, setSwitching] = useState(false);
    const [createUserSubmitError, setCreateUserSubmitError] = useState([]);
    const [checkLoginEmailError, setCheckLoginEmailError] = useState([]);
    const [checkLoginPassError, setCheckLoginPassError] = useState([]);
    const{setLoading , loading,forceRender,setForceRender} = useContext(contactContext)
    const navigate = useNavigate();



    const createUserSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);

            await UserAccountSignUpSchema.validate(userSignUp, {
                abortEarly: false
            });

            const { status } = await authSignUp(userSignUp);
            if (status === 200) {
                const emailData = {
                    email: userSignUp.email,
                    loginBySms: false,
                    forget_password: false
                };
                const { status: emailStatus } = await checkEmailAPI(emailData);
                if (emailStatus === 200) {
                    const loginData = {
                        email: userSignUp.email,
                        password: userSignUp.password
                    };
                    const { status: loginStatus, data } = await LoginPassword(loginData);
                    if (loginStatus === 200) {
                        localStorage.setItem(
                            "token",
                            data.data.token
                        );
                        setUserLogIn({});
                        setCheckEmail({});
                        setLoginForm(false);
                        setUserSignUp({});
                        setForceRender(!forceRender);
                        navigate("/");
                    }
                }else{
                    toast.error("حساب با موفقیت ساخته شد.ورود کنید!", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                        transition: Slide,
                    });
                }
            }
            setLoading(false);
        } catch (err) {
            toast.error("ثبت نام ناموفق بود!", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide,
            });

            setCreateUserSubmitError(err.inner || []);
            setLoading(false);
        }
    };

    const checkLoginEmail = async (event)=>{
        event.preventDefault();
        try {
            setLoading(true);
            await UserAccountLogInCheckEmailSchema.validate(checkEmail , {abortEarly: false});
            const {status} = await checkEmailAPI(checkEmail);

            if(status === 200){
               setUserLogIn({
                    email: checkEmail.email,
                    password: ""
                })
                setLoginForm(true)
                setLoading(false);
            }
        }catch(err){
            toast.error('ایمیل ثبت نشده است', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            setCheckLoginEmailError(err.inner || [])
            setLoading(false);
        }

    }
    const checkLoginPass = async (event)=>{
        event.preventDefault();
        try{
            setLoading(true);
            await UserAccountLogInCheckPasswordSchema.validate(userLogIn)
            const {status , data} = await LoginPassword(userLogIn);
            if(status === 200){
                toast.success('ورود با موفقیت انجام شد', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                localStorage.setItem("token" , data.data.token);
                setUserLogIn({})
                setCheckEmail({})
                setLoginForm(false)

                navigate("/")
                setLoading(false);
                setForceRender(!forceRender)
            }
        }catch(err){
            toast.error('رمز اشتباه است!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            setCheckLoginPassError(err.inner || [])
            setLoading(false);
        }
    }

    const toggle = () => {
        setSwitching((prev) => !prev);
    };

    return (
        <div
            id="container"
            className={`ua-container ${
                switching ? "ua-sign-up" :  "ua-sign-in"
            }`}
        >
            {/* FORM SECTION */}
            <div className="ua-row">
                {/* SIGN IN */}
                <SignIn toggle={toggle} switching={switching} loginForm={loginForm} userLogIn={userLogIn}  setUserLogIn={setUserLogIn}
                        checkEmail={checkEmail} setCheckEmail={setCheckEmail} setLoginForm={setLoginForm}
                        checkLoginEmail={checkLoginEmail} loading={loading} checkLoginPass={checkLoginPass} checkLoginEmailError={checkLoginEmailError} checkLoginPassError={checkLoginPassError} />
                {/* SIGN UP */}
                <SignUp toggle={toggle} switching={switching} createUserSubmit={createUserSubmit} userSignUp={userSignUp}
                        setUserSignUp={setUserSignUp} loading={loading} createUserSubmitError={createUserSubmitError}  />
            </div>

            {/* CONTENT SECTION */}
            <div className="ua-row ua-content-row">


                {/* SIGN UP CONTENT */}
                <div className="ua-col ua-sign-in-content ua-align-items-center ua-flex-col">
                    <div className="ua-img ua-sign-up"></div>

                    <div className="ua-text ua-sign-up">
                        <h2>به ما بپیوندید</h2>
                    </div>
                </div>
                {/* SIGN IN CONTENT */}
                <div className="ua-col ua-sign-up-content ua-align-items-center ua-flex-col">
                    <div className="ua-text ua-sign-in">
                        <h2>خوش آمدید</h2>
                    </div>

                    <div className="ua-img ua-sign-in"></div>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;