import showError from "../../../../helpers/ShowError";
import {useState} from "react";


const SignInCheckPassword =({userLogIn ,setUserLogIn, checkLoginPassError})=>{

    const [showPassword, setShowPassword] = useState({
        password:false
    });
    const togglePassword = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handlePasswordChange = (event)=>{
        setUserLogIn({
            ...userLogIn,
                [event.target.name]: event.target.value}
        )
    }

    return (
        <>
            {showError(checkLoginPassError, "password")}
            <label className="ua-input-group">
                <i
                    className={`fa ${
                        showPassword.password
                            ? "fa-eye-slash"
                            : "fa-eye"
                    }`}
                    onClick={() => togglePassword("password")}
                    aria-hidden="true"
                ></i>

                <input
                    name="password"
                    type={
                        showPassword.password
                            ? "text"
                            : "password"
                    }
                    placeholder="رمز عبور"
                    aria-label="رمز عبور"
                    value={userLogIn.password}
                    onChange={handlePasswordChange}
                />
            </label>
        </>
    )
}
export default SignInCheckPassword