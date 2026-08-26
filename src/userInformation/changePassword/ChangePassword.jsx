import {useState,useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../css/userInformationStyle.css"
import {changePassword} from "../../api/Passwords";
import {contactContext} from "../../contex/Context";
import VisiblePassword from "../../helpers/VisiblePassword";
import {Slide, toast} from "react-toastify";

const ChangePassword = () => {

    const navigate = useNavigate();
    const {loading , setLoading} = useContext(contactContext)
    const [password, setPassword] = useState({
        current_password: "",
        new_password: "",
        new_password_confirmation: ""
    });
    const [visible, setVisible] = useState({
        current_password: false,
        new_password: false,
        new_password_confirmation: false
    });

    const handleChange = (event) => {
        setPassword({
                ...password,
                [event.target.name]: event.target.value
            }
        );
    }



    const handleSubmit = async (event) =>{
        event.preventDefault()

        try {
            setLoading(true);

            const { status } = await changePassword(password);

            if (status === 200) {
                toast.success('تغییر رمز با موفقیت انجام شد', {
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
                setPassword({
                    current_password: "",
                    new_password: "",
                    new_password_confirmation: ""
                });
                navigate("/");
            }

        } catch (error) {
            toast.error('تغییر رمز ناموفق بود!', {
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
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    const passwordFields = [
        {
            name: "current_password",
            label: "گذرواژه فعلی",
            icon: "fa-lock"
        },
        {
            name: "new_password",
            label: "گذرواژه جدید",
            icon: "fa-key"
        },
        {
            name: "new_password_confirmation",
            label: "تکرار گذرواژه جدید",
            icon: "fa-repeat"
        }
    ];

    return (
        <div className="user-information-page">
            <div className="profile-info-container">

                <section className="profile-info-card">

                    <div className="profile-decoration profile-decoration-1"></div>
                    <div className="profile-decoration profile-decoration-2"></div>

                    <div className="profile-info-header">

                        <h2>
                            <i className="fa-solid fa-key"></i>
                            تغییر گذرواژه
                        </h2>
                        <Link to={"/userInformation"} className="back-button">
                            برگشت
                        </Link>

                    </div>

                    <form className="change-password-form" onSubmit={handleSubmit}>

                        {passwordFields.map(field => (

                            <div className="change-password-field" key={field.name}>

                                <label>{field.label}</label>

                                <div className="change-password-input">

                                    <div className="profile-info-icon">
                                        <i className={`fa-solid ${field.icon}`}></i>
                                    </div>

                                    <input
                                        type={visible[field.name] ? "text" : "password"}
                                        name={field.name}
                                        value={password[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.label}
                                    />

                                    <VisiblePassword visible={visible} setVisible={setVisible} field={field.name} />

                                </div>

                            </div>

                        ))}

                        <button className="change-password-submit" type="submit" disabled={loading} >

                            <i className="fa-solid fa-floppy-disk"></i>

                            ذخیره تغییرات

                        </button>

                    </form>

                </section>
            </div>
        </div>
    )
}
export default ChangePassword