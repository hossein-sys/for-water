import {useContext, useEffect, useState} from "react";
import { contactContext } from "../contex/Context";
import "../css/userInformationStyle.css";
import {Link, useNavigate} from "react-router-dom";

import {Spinner} from "../components";
import {downLoadFile} from "../api/ParticipantsServices";
import styles from "../admin-ui/admin-ui/src/components/RegistrationsList.module.css";


const UserInformation = ({setIsUser,userRegisterData,setUserRegisterData,confirmDelete}) => {
    const { userData,setLoading,loading,setForceRender } = useContext(contactContext);
    const navigate = useNavigate();


    const getFileHandler = async (fileId) => {
        try {
            const {data} = await downLoadFile(fileId)
            const url = window.URL.createObjectURL(data);

            window.open(url, "_blank");
        }catch(err) {
            console.log(err);
        }
    }




    if (!userData) {
        return <h3>در حال دریافت اطلاعات...</h3>;
    }

    const accountItems = [
        {
            title: "نام کاربری",
            value: userData.user_name,
            icon: "fa-solid fa-user"
        },
        {
            title: "ایمیل",
            value: userData.email,
            icon: "fa-solid fa-envelope"
        },
        {
            title: "نقش",
            value: userData.role,
            icon: "fa-solid fa-user-shield"
        },
        {
            title: "تاریخ عضویت",
            value: new Date(userData.created_at).toLocaleDateString("fa-IR"),
            icon: "fa-solid fa-calendar-days"
        }
    ];

    const eventItems = [
        {
            title: "نام رویداد",
            value: "React Bootcamp",
            icon: "fa-solid fa-ticket"
        },
        {
            title: "تاریخ",
            value: "1405/04/20",
            icon: "fa-solid fa-calendar-days"
        },
        {
            title: "وضعیت",
            value: "تایید شده",
            icon: "fa-solid fa-circle-check",
            success: true
        },
        {
            title: "کد ثبت نام",
            value: "#12548",
            icon: "fa-solid fa-hashtag"
        }
    ];


    const handleLogout = () => {
            localStorage.removeItem("token");
            setForceRender(prev => !prev);
            navigate("/");
    }

    return (

        <div className="user-information-page">
            <div className="profile-info-container">
                <div className="profile-info-card">
                    <div className="buttons">
                        <div className="logout-box">
                            <Link to={"/"} className="back-button">
                                برگشت
                            </Link>
                        </div>

                        <div className="logout-box">
                            <Link to={"/"} className="logout-btn" onClick={handleLogout}>
                                خروج از حساب کاربری
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </Link>
                        </div>

                    </div>

                </div>

                {/* تغییر رمز */}
                <section className="profile-info-card">
                    <div className="profile-decoration profile-decoration-1"></div>
                    <div className="profile-decoration profile-decoration-2"></div>


                    <div className="change-password-grid">
                        <Link
                            to="/userInformation/change-password"
                            className="change-password-item"
                        >
                            <div className="profile-info-icon">
                                <i className="fa fa-key"></i>
                            </div>

                            <div className="profile-info-content">
                                <h3>تغییر گذرواژه</h3>
                            </div>
                        </Link>
                    </div>

                </section>

                <section className="profile-info-card">
                    <div className="profile-decoration profile-decoration-1"></div>
                    <div className="profile-decoration profile-decoration-2"></div>
                    <div className="profile-info-header">

                        <h2>
                            <i className="fa-solid fa-user"></i>
                            اطلاعات حساب کاربری
                        </h2>

                    </div>

                    <div className="profile-info-grid">

                        {accountItems.map((item, index) => (

                            <div className="profile-info-item" key={index}>

                                <div className="profile-info-icon">
                                    <i className={item.icon}></i>
                                </div>

                                <div className="profile-info-content">

                                    <span>{item.title}</span>

                                    <h3 className={item.success ? "profile-info-success" : ""}>
                                        {item.value}
                                    </h3>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

                {/* اطلاعات رویداد */}
                {loading?
                    <Spinner/>
                    :userRegisterData.map((item) => (
                            <section className="profile-info-card"  key={item.id}>

                                <div className="profile-info-header">

                                    <h2>
                                        <i className="fa-solid fa-ticket"></i>
                                        اطلاعات ثبت نام رویداد
                                    </h2>
                                    <div className="profile-info-buttons">
                                        <Link to={`/userInformation/edit-profile/${item.id}`}
                                            className="profile-info-edit-profile"
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                            ویرایش اطلاعات
                                        </Link>
                                        <button
                                            className="profile-info-delete"
                                            onClick={()=>(confirmDelete(item.id , item.first_name))}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                            حذف ثبت نام
                                        </button>

                                    </div>
                                </div>

                                <div className="profile-info-grid">
                                    {item.first_name?(<div className="profile-info-item" >
                                        <div className="profile-info-icon">
                                            <i className="fa-solid fa-signature"></i>
                                        </div>
                                        <div className="profile-info-content">
                                            <span>نام</span>
                                            <h3 className={item.success ? "profile-info-success" : ""}>
                                                {item.first_name}
                                            </h3>
                                        </div>
                                    </div>):null}

                                    {item.last_name?(<div className="profile-info-item" >
                                        <div className="profile-info-icon">
                                            <i className="fa-solid fa-user-tag"></i>
                                        </div>
                                        <div className="profile-info-content">
                                            <span>نام خانوادگی</span>
                                            <h3 className={item.success ? "profile-info-success" : ""}>
                                                {item.last_name}
                                            </h3>
                                        </div>
                                    </div>):null}
                                    {item.national_code?(<div className="profile-info-item">
                                        <div className="profile-info-icon">
                                            <i className="fa-solid fa-id-card"></i>
                                        </div>
                                        <div className="profile-info-content">
                                            <span>کد ملی</span>
                                            <h3 className={item.success ? "profile-info-success" : ""}>
                                                {item.national_code}
                                            </h3>
                                        </div>
                                    </div>):null}
                                    <div className="profile-info-item">
                                        <div className="profile-info-icon">
                                            <i className="fa-solid fa-user-shield"></i>
                                        </div>
                                        <div className="profile-info-content">
                                            <span>ثبت نام</span>
                                            <h3 className={item.success ? "profile-info-success" : ""}>
                                                {item.type}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="profile-info-item">
                                        <div className="profile-info-icon">
                                            <i className="fa-solid fa-file"></i>
                                        </div>
                                        <div className="profile-info-content">
                                            <span>فایل</span>
                                            <button className="downloadFile" onClick={()=>getFileHandler(item.idea_file)}>دریافت فایل <i className="fa fa-download"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        )


                    )
                    }


                </div>
        </div>
    );
};

export default UserInformation;