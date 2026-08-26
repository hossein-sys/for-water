import showError from "../../../../helpers/ShowError";

const SignInCheckEmail = ({checkEmail,setCheckEmail,checkLoginEmailError}) => {

    const handleCheckEmail = (event)=>{
        setCheckEmail(
            {...checkEmail,
                [event.target.name]: event.target.value}
        )
    }

    return (
        <>
            {showError(checkLoginEmailError , "email")}
            <div className="ua-input-group">
                <i className="bx bxs-user"></i>

                <input
                    name="email"
                    type="email"
                    placeholder="ایمیل"
                    aria-label="ایمیل"
                    value={checkEmail.email}
                    onChange={handleCheckEmail}/>
            </div>
        </>

    )
}
export default SignInCheckEmail;