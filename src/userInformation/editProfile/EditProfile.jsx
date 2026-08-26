import {Link, useNavigate, useParams} from "react-router-dom";
import "./editProfile.css";
import {useContext, useEffect, useState} from "react";
import {downLoadFile, getOneRegisterInformation, uploadFile} from "../../api/ParticipantsServices";
import {editEntourage, editMentor, editParticipant} from "../../api/EditRegisteration";
import {Slide, toast} from "react-toastify";
import {contactContext} from "../../contex/Context";



const EditProfile = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const {loading,setLoading} = useContext(contactContext)

    const[fileData, setFileData] = useState({});
    const [userdata, setUserdata] = useState({
        type:"",
        first_name: "",
        last_name: "",
        national_code: "",
        idea_file:null
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileRemoved, setFileRemoved] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await getOneRegisterInformation(userId)
                setUserdata(
                    {
                        type: data.data.type,
                        first_name: data.data.first_name||"",
                        last_name: data.data.last_name||"",
                        national_code: data.data.national_code||"",
                        idea_file: data.data.idea_file,
                    }
                )

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        }, []);

    const handleSubmitForm= async (event)=> {
        event.preventDefault();
       try {
           setLoading(true)
           let finalData = {
               ...userdata
           };
           if(selectedFile){
               const {status:uploadStatus , data:uploadData} = await uploadFile(selectedFile, "profile_image")
               if(uploadStatus === 200){
                   finalData.idea_file = uploadData.data.data.id;
                   setUserdata({
                       ...userdata,
                       idea_file: uploadData.data.data.id,
                   })
               }
           }
           const {type , ...editData} = finalData
           if(type === "Participant"){
               const response = await editParticipant(userId ,editData);
               if(response.status === 200){
                   toast.success('تغییرات با موفقیت انجام شد!', {
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
                   navigate("/")
               }
           }
           if(type === "Referee_Mentor"){
               const response = await editMentor(userId , editData);
               if(response.status === 200){
                   toast.success('تغییرات با موفقیت انجام شد!', {
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
                   navigate("/")
               }

           }
           if(type === "Entourage"){
               const response = await editEntourage(userId , editData);
               if(response.status === 200){
                   toast.success('تغییرات با موفقیت انجام شد!', {
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
                   navigate("/")
               }
           }
       }catch (error) {
           toast.error('خطا در ارتباط با سرور! ', {
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
           console.log(error.response);
       }finally {
           setLoading(false)
       }
    }

    const setUserInfo = (e) => {
        setUserdata(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    const handleDeleteFile = () => {
        setFileRemoved(true);
        setSelectedFile(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleCancelFile = () => {
        setSelectedFile(null);
        setFileRemoved(false);
    };

    const fields = [
        {
            icon: "fa-user",
            label: "نام",
            name: "first_name"
        },
        {
            icon: "fa-user-tag",
            label: "نام خانوادگی",
            name: "last_name"
        },
        {
            icon: "fa-id-card",
            label: "کد ملی",
            name: "national_code"
        }
    ];

    const hasStoredFile = userdata.idea_file && !fileRemoved;

    return (
        <div className="edit-profile-page">
            <div className="edit-profile-container">
                <div className="edit-profile-card">
                    <div className="edit-profile-top">
                        <Link to="/userInformation" className="edit-back-btn">
                            <i className="fa-solid fa-arrow-right"></i>
                            برگشت
                        </Link>
                    </div>
                </div>
                <section className="edit-profile-card">
                    <div className="edit-profile-header">
                        <h2>
                            <i className="fa-solid fa-pen"></i>
                            ویرایش اطلاعات ثبت نام رویداد
                        </h2>
                    </div>
                    <form className="edit-profile-grid" onSubmit={handleSubmitForm}>

                        {userdata.type !=="Entourage"&& fields.map((field) => (
                            <div className="edit-profile-item" key={field.name}>
                                <div className="edit-profile-icon">
                                    <i className={`fa-solid ${field.icon}`}></i>
                                </div>
                                <div className="edit-profile-content">
                                    <label>
                                        {field.label}
                                    </label>
                                    <input
                                        type="text"
                                        name={field.name}
                                        value={userdata[field.name]}
                                        onChange={setUserInfo}
                                    />
                                </div>
                            </div>
                        ))}

                        <div className="edit-profile-file-card">
                            <div className="edit-profile-icon">
                                <i className="fa-solid fa-file"></i>
                            </div>
                            <div className="edit-profile-file-content">
                                <label>
                                    فایل ارسالی
                                </label>

                                {selectedFile ? (
                                        <span>
                                            فایل انتخاب شده:
                                            {" "}
                                            {selectedFile.name}
                                        </span>
                                    ) : hasStoredFile ? (
                                        <span>
فایل ثبت شده است(حداکثر حجم فایل 2Mb است)
                                        </span>
                                    ) : (
                                        <span>
                                            فایلی ثبت نشده است
                                        </span>
                                    )
                                }

                            </div>
                            <div className="edit-profile-file-actions">
                                {hasStoredFile && !selectedFile && (
                                        <button
                                            type="button"
                                            className="delete-file-btn"
                                            onClick={handleDeleteFile}>
                                            <i className="fa-solid fa-trash"></i>
                                            حذف فایل
                                        </button>
                                    )}
                                {(!hasStoredFile || fileRemoved) &&
                                    !selectedFile && (
                                        <label className="upload-file-btn">
                                            <i className="fa-solid fa-upload"></i>
                                            آپلود فایل
                                            <input
                                                type="file"
                                                hidden
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    )}
                                {selectedFile && (
                                        <button
                                            type="button"
                                            className="cancel-file-btn"
                                            onClick={handleCancelFile}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                            انصراف
                                        </button>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="save-changes-btn"
                            disabled={loading}
                        >
                            <i className="fa-solid fa-floppy-disk"></i>
                            {loading?"درحال ثبت ...":"ذخیره تغییرات"}
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default EditProfile;