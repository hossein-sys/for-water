import {Link} from "react-router-dom";
import {Spinner} from "../../index";
import showError from "../../../helpers/ShowError";
import ShowError from "../../../helpers/ShowError";
import {useState} from "react";

const SignUp = ({toggle ,createUserSubmit ,userSignUp,setUserSignUp, loading, switching,createUserSubmitError}) => {

    const [showPassword, setShowPassword] = useState({
        password: false,
        password_confirmation: false,
    });

    const togglePassword = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };


    const signUpInfo = (event) => {
        setUserSignUp({
                ...userSignUp,
                [event.target.name]: event.target.value
            }
        )
    }

    return (

                <div className="ua-col ua-sign-up-col ua-align-items-center ua-flex-col">
                    <div className="ua-form-wrapper ua-align-items-center">
                        {loading && switching ? <Spinner/> :
                            <form onSubmit={createUserSubmit} className="ua-form ua-sign-up" dir="rtl" noValidate>

                                <div className="user-account-validation"> {ShowError(createUserSubmitError,"user_name")}</div>
                                <label className="ua-input-group">
                                    {/*<i className="fa fa-user"></i>*/}
                                        <input
                                            name="user_name"
                                            type="text"
                                            placeholder="نام کاربری"
                                            value={userSignUp.user_name}
                                            onChange={signUpInfo}
                                        />
                                </label>

                                <div className="user-account-validation">{ShowError(createUserSubmitError,"email")}</div>
                                <label className="ua-input-group">
                                    {/*<i className="fa fa-envelope"></i>*/}

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="ایمیل"
                                        value={userSignUp.email}
                                        onChange={signUpInfo}
                                    />
                                </label>

                                <div className="user-account-validation">
                                    {ShowError(createUserSubmitError,"password")}
                                </div>
                                <label className="ua-input-group">
                                    <i
                                        className={`fa ${
                                            showPassword.password ? "fa-eye-slash" : "fa-eye"
                                        }`}
                                        onClick={() => togglePassword("password")}
                                    ></i>

                                    <input
                                        name="password"
                                        type={showPassword.password ? "text" : "password"}
                                        placeholder="رمز عبور(شامل حروف بزرگ و کوچک و اعداد و سیمبل)"
                                        value={userSignUp.password}
                                        onChange={signUpInfo}
                                    />
                                </label>

                                <div className="user-account-validation">{ShowError(createUserSubmitError,"password_confirmation")}</div>
                                <label className="ua-input-group">
                                    <i
                                        className={`fa ${
                                            showPassword.password_confirmation
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        }`}
                                        onClick={() => togglePassword("password_confirmation")}
                                    ></i>

                                    <input
                                        name="password_confirmation"
                                        type={
                                            showPassword.password_confirmation
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="تکرار رمز عبور"
                                        value={userSignUp.password_confirmation}
                                        onChange={signUpInfo}
                                    />
                                </label>
                                <input type="submit" className="submitButton" value={loading ? "..." : "ساخت حساب کاربری"} disabled={loading} />
                                <p style={{ fontSize: "0.9rem" }}>
                                    <span>حساب کاربری داشته اید؟ </span>
                                    <b onClick={toggle} className="ua-pointer">
                                        ورود
                                    </b>
                                </p>
                                <Link to={"/"} style={{width : "40%"}} className="link" >برگشت</Link>
                            </form>}
                    </div>
                </div>
            )
}
export default SignUp;