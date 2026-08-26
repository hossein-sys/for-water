import { useState, useRef, useEffect, useContext } from 'react';
import styles from '../../../css/participantRegistration.module.css';
import {Link , useNavigate} from "react-router-dom";
import UploadBox from "../../fileBox/UploadBox";
import DownloadBox from "../../fileBox/DownloadBox";
import {contactContext} from "../../../contex/Context";
import {participantSignIn, mentorsSignIn, entouragesSignIn, uploadFile} from "../../../api/ParticipantsServices";
import {Spinner} from "../../index";
import {
    entourageRegistrationValidationSchema,
    mentorRegistrationValidationSchema,
    participantRegistrationValidationSchema
} from "../../../validations/RegistrationValidation";
import showError from "../../../helpers/ShowError";
import {Slide, toast} from "react-toastify";

const ParticipantRegistration = ({userRegisterData}) => {

    const navigate = useNavigate();
    const {setLoading , loading} = useContext(contactContext);
    const [activeTab, setActiveTab] = useState(0);
    const [showIdeaSection, setShowIdeaSection] = useState(false);
    const [participantError, setParticipantError] = useState([]);
    const [mentorError, setMentorError] = useState([]);
    const [entourageError, setEntourageError] = useState([]);


    const [participants, setParticipants] = useState({
        first_name: "",
        last_name: "",
        national_code: "",
        idea_file: null

    });
    const [mentors, setMentors] = useState({
        first_name:"",
        last_name:"",
        national_code:"",
        idea_file:null

    });
    const [entourages, setEntourage] = useState({
        entouragesFile:null
    });
    const [prevTab, setPrevTab] = useState(0);
    const [exitDirection, setExitDirection] = useState('');



    const createParticipant =async (event, type, data)=>{
        event.preventDefault();
        try {
            console.log("type" , type);
            setLoading(true);
            if (type === "participantRegistration") {
                const {status:uploadStatus , data:uploadData} = await uploadFile(data.idea_file, "profile_image")
                if (uploadStatus ===200) {
                    const participantData = {
                        ...data,
                        idea_file: uploadData.data.data.id
                    }
                    await participantRegistrationValidationSchema.validate(participantData , {abortEarly: false});
                    const {status, data:responsData} = await participantSignIn(participantData)
                    console.log("participant data :",responsData)
                    if(status === 200){
                        toast.success('ثبت نام با موفقیت انجام شد!', {
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
                        setParticipants({})
                        setParticipantError([]);
                        navigate("/")
                    }
                }
            }
            if (type === "mentorsSignIn") {
                    console.log("mentors:" , mentors)
                const {status:uploadStatus , data:uploadData} = await uploadFile(data.idea_file, "profile_image")
                if (uploadStatus ===200){
                    const mentorsData = {
                        ...data,
                        idea_file: uploadData.data.data.id
                    }
                    await mentorRegistrationValidationSchema.validate(mentorsData,{abortEarly: false})
                    const {status} = await mentorsSignIn(mentorsData)
                    if(status === 200){
                        toast.success('ثبت نام با موفقیت انجام شد!', {
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
                        setMentors({})
                        setMentorError([]);
                        navigate("/")
                    }
                }
            }
            if (type === "entouragesSignIn") {
                const {status:uploadStatus , data:uploadData} = await uploadFile(data.idea_file, "profile_image")
                if (uploadStatus ===200){
                    const entourageData = {
                        ...data,
                        idea_file: uploadData.data.data.id
                    }
                    await entourageRegistrationValidationSchema.validate(entourageData , {abortEarly:false})
                    const {status} = await entouragesSignIn(entourageData)
                    if(status === 200){
                        toast.success('ثبت نام با موفقیت انجام شد!', {
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
                        setEntourage({})
                        setEntourageError([]);
                        navigate("/")
                    }
                }
            }
        setLoading(false);
        }catch(err){
            toast.error('ثبت نام ناموفق بود! ', {
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
            setLoading(false);

            if(type === "participantRegistration"){
                setParticipantError(err.inner || []);
            }

            if(type === "mentorsSignIn"){
                setMentorError(err.inner || []);
            }

            if(type === "entouragesSignIn"){
                setEntourageError(err.inner || []);
            }


        }

    }

    const participantsInfo = (event) => {
        setParticipants({
                ...participants,
                [event.target.name]: event.target.value
            }
        )
    }
    const mentorsInfo = (event) => {
        setMentors({
                ...mentors,
                [event.target.name]: event.target.value
            }
        )
    }


    const handleTabClick = (index) => {
        if (index === activeTab) return;
        setPrevTab(activeTab);
        setExitDirection(index > activeTab ? 'exit-up' : 'exit-down'); // پایین یا بالا
        setActiveTab(index);

        setTimeout(() => setExitDirection(''), 600);
    };

    return (

                <div className={styles.participantRegistrationWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.tabs}>
                            <button className={activeTab === 0 ? styles.active : ''} onClick={() => handleTabClick(0)}>
                                شرکت کننده
                            </button>
                            <button className={activeTab === 1 ? styles.active : ''} onClick={() => handleTabClick(1)}>
                                داور ها و منتور ها
                            </button>
                            <button className={activeTab === 2 ? styles.active : ''} onClick={() => handleTabClick(2)}>
                                همراهان
                            </button>
                            <Link className={styles.link} to={"/"}>برگشت</Link>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.forms}>
                                {/* فرم شرکت کننده */}
                                {activeTab === 0 && (
                                    userRegisterData.type ==="Participant"?
                                        <p>شما قبلا به عنوان شرکت کننده ثبت نام کرده‌اید.</p>:
                                    <form
                                        className={`${styles.form} ${styles.active}`}
                                        onSubmit={
                                        (event)=> createParticipant(event,"participantRegistration",participants)
                                    }>



                                        <label>
                                            <span className="label-title">
                                            نام *
                                            {showError(participantError,"first_name")}
                                            </span>
                                            <input name="first_name" type="text"
                                                   placeholder="نام" onChange={participantsInfo}
                                                   value={participants.first_name} />
                                        </label>

                                        <label>
                                            <span className="label-title">نام خوانوادگی *
                                                {showError(participantError,"last_name")}
                                            </span>
                                            <input name="last_name" type="text"
                                                   placeholder="نام خوانوادگی" onChange={participantsInfo}
                                                   value={participants.last_name} />
                                        </label>

                                        <label>
                                            <span className="label-title">کد ملی *
                                                {showError(participantError,"national_code")}
                                            </span>
                                            <input name="national_code" type="number"
                                                   placeholder="کدملی" onChange={participantsInfo}
                                                   value={participants.national_code} />
                                        </label>





                                        <div className={`${styles.ideaSection} ${showIdeaSection ? styles.active : ''}`}>

                                            <DownloadBox formId={activeTab} />
                                            {showError(participantError,"idea_file")}
                                            <UploadBox setFile={(file)=>{
                                                setParticipants(
                                                    {
                                                    ...participants,
                                                        idea_file:file
                                                    })
                                            }
                                            } />
                                            <div className={styles.submitDiv}>
                                                <input className={`${styles.submitButton}`} type="submit" value={loading ? "در حال ثبت نام..." : "ثبت نام"} disabled={loading}/>
                                            </div>
                                        </div>
                                    </form>)}

                                {/* فرم داور/منتور */}
                                {activeTab === 1 && (
                                    userRegisterData.type ==="Referee_Mentor"?
                                        <p>شما قبلا به عنوان منتور ثبت نام کرده‌اید.</p>:
                                        <form className={`${styles.form} ${styles.active}`} onSubmit={(event)=>createParticipant(event,"mentorsSignIn",mentors)}>

                                        <label><span className="label-title">
                                            نام *
                                            {showError(mentorError,"first_name")}
                                        </span>
                                            <input name="first_name" type="text" placeholder="نام"
                                                   onChange={mentorsInfo} value={mentors.first_name} />
                                        </label>

                                        <label><span className="label-title">
                                            نام خوانوادگی *
                                            {showError(mentorError,"last_name")}
                                        </span>
                                            <input name="last_name" type="text" placeholder="نام خوانوادگی"
                                                   onChange={mentorsInfo} value={mentors.last_name} />
                                        </label>

                                        <label><span className="label-title">
                                            کد ملی *
                                            {showError(mentorError,"national_code")}
                                        </span>
                                            <input name="national_code" type="number" placeholder="کدملی"
                                                   onChange={mentorsInfo} value={mentors.national_code} />
                                        </label>

                                        <DownloadBox formId={activeTab}  />
                                        {showError(mentorError,"idea_file")}
                                        <UploadBox setFile={(file)=>{
                                            setMentors(
                                                {
                                                    ...mentors,
                                                    idea_file:file
                                                })}
                                        } />
                                        <div className={styles.submitDiv}>
                                            <input className={`${styles.submitButton}`} type="submit" value={loading ? "در حال ثبت نام..." : "ثبت نام"} disabled={loading}/>
                                        </div>
                                    </form>
                                )}


                                {activeTab === 2 && (
                                    userRegisterData.type==="Entourage"?

                                        <p>شما قبلا به عنوان همراه ثبت نام کرده‌اید.</p>:
                                    <form className={`${styles.form} ${styles.active}`} onSubmit={(event)=>createParticipant(event,"entouragesSignIn",entourages)}>

                                        <DownloadBox formId={activeTab} />
                                        {showError(entourageError,"idea_file")}
                                        <UploadBox setFile={(file)=>{
                                            setEntourage(
                                                {
                                                    ...entourages,
                                                    idea_file:file
                                                })}
                                        }/>
                                        <div className={styles.submitDiv}>
                                            {showError(entourageError,"idea_file")}
                                            <input className={`${styles.submitButton}`}
                                                   type="submit"
                                                   value={loading ? "در حال ثبت نام..." : "ثبت نام"}
                                                   disabled={loading}/>

                                        </div>
                                    </form>
                                )}
                            </div>

                            <div className={styles.info}>

                                <div className={`${styles['info-slide']} ${activeTab === 0 ? styles.active : ''} ${activeTab !== 0 && prevTab === 0 ? styles[exitDirection] : ''}`}>
                                    <div className={styles.introducing}>
                                        <h2>ثبت نام</h2>
                                        <span>(بخش ابتدایی ثبت نام برای افرادی هست که صرفا قصد شرکت در رویداد دارند اما برای ثبت ایده و شرکت به عنوان شرکت کننده در رویداد باید تیک مربوط به ثبت ایده را بزنید)</span>
                                    </div>
                                </div>
                                <div className={`${styles['info-slide']} ${activeTab === 1 ? styles.active : ''} ${activeTab !== 1 && prevTab === 1 ? styles[exitDirection] : ''}`}>
                                    <h2>داور ها و منتور ها</h2>
                                    <p>اگر قبلاً ثبت نام کرده‌اید، از این بخش وارد حساب کاربری خود شوید.</p>
                                </div>
                                <div className={`${styles['info-slide']} ${activeTab === 2 ? styles.active : ''} ${activeTab !== 2 && prevTab === 2 ? styles[exitDirection] : ''}`}>
                                    <h2>تکمیل پروفایل</h2>
                                    <p>اطلاعات تکمیلی باعث بهبود تجربه کاربری شما خواهد شد.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    );
};

export default ParticipantRegistration;