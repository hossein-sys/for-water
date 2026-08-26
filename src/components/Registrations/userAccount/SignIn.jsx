import {Link} from "react-router-dom";
import SignInCheckEmail from "./signInForms/SignInCheckEmail";
import SignInCheckPassword from "./signInForms/SignInCheckPassword";
import {Spinner} from "../../index";




const SignIn = ({toggle , loginForm, setUserLogIn , userLogIn , checkEmail ,setCheckEmail , checkLoginEmail,loading,checkLoginPass,switching , checkLoginEmailError,checkLoginPassError}) =>{


    return (
        <div className="ua-col ua-sign-in-col ua-align-items-center ua-flex-col">
            <div className="ua-form-wrapper ua-align-items-center">
                {loading && !switching? <Spinner/> :

                        <form onSubmit={loginForm?checkLoginPass:checkLoginEmail}  className="ua-form ua-sign-in" dir="rtl" noValidate>
                            {loginForm?
                                <SignInCheckPassword  userLogIn={userLogIn} setUserLogIn={setUserLogIn} checkLoginPassError={checkLoginPassError}/>:
                                <SignInCheckEmail userLogIn={userLogIn} checkEmail={checkEmail} setCheckEmail={setCheckEmail} checkLoginEmailError={checkLoginEmailError}/>}

                            <input className="submitButton" type="submit" value={loading?("لطفاصبرکنید..."):(loginForm?
                                "ورود":
                                "ثبت ایمیل")} disabled={loading}/>

                            <p>
                                <b className="ua-forgot-password">
                                    فراموشی رمز عبور
                                </b>
                            </p>

                            <p style={{ fontSize: "0.9rem" }}>
                                <span>حساب کاربری ندارید؟ </span>

                                <b onClick={toggle} className="ua-pointer">
                                    ثبت نام
                                </b>
                            </p>
                            <Link to={"/"} style={{width : "40%"}} className="link" >برگشت</Link>
                        </form>
                }

            </div>

            <div className="ua-form-wrapper"></div>
        </div>
    );
}
export default SignIn;