import {useEffect, useState} from 'react'

import {contactContext} from "./contex/Context";

import {Header, Body,ParticipantRegistration,Footer} from './components/index'

import {Routes , Route} from "react-router-dom";

import "../src/css/style.css";
import "../src/css/mineStyle.css";
import "./css/userInformationStyle.css"

import UserAccount from "./components/Registrations/userAccount/UserAccount";

import {ToastContainer, toast, Slide} from "react-toastify";

import News from "./components/slider/News";
import SupportersSlider from "./components/slider/SupportersSlide";
import NewsInfo from "./components/NewsInfo";
import AllUsers from "./components/users/AllUsers";


import UserInformation from "./userInformation/UserInformation";
import {userAllInfo, userInfo} from "./api/AuthenticationServices";
import ChangePassword from "./userInformation/changePassword/ChangePassword";
import EditProfile from "./userInformation/editProfile/EditProfile";
import AdminLayout from "./admin-ui/admin-ui/src/components/AdminLayout";
import {confirmAlert} from "react-confirm-alert";
import {deleteRegister} from "./api/ParticipantsServices";
import {newsContent, newsInformation} from "./components/slider/NewsContent";



const App = () => {

    const [userRegisterData, setUserRegisterData] = useState([]);
    const [logoPassed, setLogoPassed] = useState(true);
    const [navLinksColor,setNavLinksColor ] = useState(true);
    const [stickyNavbarSize,setStickyNavbarSize ] = useState(true);
    const [Active, setActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isUser , setIsUser] = useState({});
    const [userData, setUserData] = useState({});
    const [isHeaderVideoLoaded, setIsHeaderVideoLoaded] = useState(false);
    const [forceRender, setForceRender] = useState(false);

    useEffect(() => {
        const handleMenu = () => {
            if(window.innerWidth >= 375 && !isMobileMenuOpen) setIsMobileMenuOpen(true)
            else if (window.innerWidth < 375 && isMobileMenuOpen) setIsMobileMenuOpen(false)
        }
        window.addEventListener('resize', handleMenu)
        return () => window.removeEventListener('resize', handleMenu)
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 1650 ) {
                setLogoPassed(false)
                setNavLinksColor(false)

            }
            else {
                setLogoPassed(true)
                setNavLinksColor(true)
            };
        }

        window.addEventListener("scroll", handleScroll );

        return () => window.removeEventListener("scroll", handleScroll);
    }, [logoPassed]);

    useEffect(() => {
        const handleStickyNavbarSize = ()=>{
            if(window.scrollY >= 80){
                setStickyNavbarSize(true)
            }else{
                setStickyNavbarSize(false)
            }
        }
        window.addEventListener('scroll', handleStickyNavbarSize);
        return () => window.removeEventListener('scroll', handleStickyNavbarSize);
    },[stickyNavbarSize]);

    useEffect(()=>{

        const token = localStorage.getItem("token");

        if (!token) {
            setIsUser(false)
            return
        }
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data:userDataInfo} = await userAllInfo();
                setUserData(userDataInfo.data);
                setUserRegisterData(userDataInfo.data.registers);
                setIsUser(true)
                setLoading(false);

            }catch(e){
                console.log(e.response)
                setLoading(false);
            }
        }
        fetchData();
    },[forceRender])

    const confirm = (key, name) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div
                        style={{
                            background: '#ffffff',
                            borderRadius: '20px',
                            padding: '28px 26px',
                            maxWidth: '360px',
                            textAlign: 'center',
                            fontFamily: "'Vazirmatn', 'Segoe UI', Tahoma, sans-serif",
                            boxShadow: '0 20px 50px rgba(11, 25, 36, 0.35)',
                            direction: 'rtl',
                        }}
                    >
                        <div
                            style={{
                                width: '54px',
                                height: '54px',
                                borderRadius: '50%',
                                background: 'rgba(102, 0, 0, 0.08)',
                                color: '#660000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '26px',
                                fontWeight: 800,
                                margin: '0 auto 16px',
                            }}
                        >
                            !
                        </div>

                        <h1
                            style={{
                                fontSize: '18px',
                                fontWeight: 800,
                                color: '#090979',
                                margin: '0 0 8px',
                            }}
                        >
                            آیا مطمئن هستی؟
                        </h1>

                        <p
                            style={{
                                fontSize: '14px',
                                color: '#5d6d7e',
                                margin: '0 0 22px',
                                lineHeight: 1.7,
                            }}
                        >
                            که مخاطب <strong style={{ color: '#090979' }}>{name}</strong> را
                            پاک کنی؟ این عملیات قابل بازگشت نیست.
                        </p>

                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <button
                                onClick={onClose}
                                style={{
                                    flex: 1,
                                    border: '1px solid #e6f2ff',
                                    background: '#ffffff',
                                    color: '#5d6d7e',
                                    padding: '11px 0',
                                    borderRadius: '12px',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f8ff')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
                            >
                                خیر
                            </button>

                            <button
                                onClick={() => {
                                    handleDelete(key);
                                    onClose();
                                }}
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #660000, #bd0202)',
                                    color: '#ffffff',
                                    padding: '11px 0',
                                    borderRadius: '12px',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 25px rgba(102, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                بله، پاک کن
                            </button>
                        </div>
                    </div>
                );
            },
        });
    };
    const handleDelete = async (key) => {
        try {
            setLoading(true);
            const {status} = await deleteRegister(key);
            if(status === 200) {
                toast.success('کاربر با موفقیت حذف شد!', {
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
            console.log(error);
            setLoading(false);
        }finally {
            setForceRender(prev => !prev);
        }

    };


  return (

      <contactContext.Provider value={{
          userData,
          loading,
          setLoading ,
          logoPassed,
          setLogoPassed ,
          navLinksColor,
          setNavLinksColor,
          stickyNavbarSize,
          setStickyNavbarSize,
          isMobileMenuOpen,
          setIsMobileMenuOpen,
          isHeaderVideoLoaded,
          setIsHeaderVideoLoaded,
          Active,
           setActive,
          forceRender,
          setForceRender
      }}>
          <ToastContainer position="top-right"
                          autoClose={4000}
                          limit={3}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                          transition={Slide}
                          toastClassName="my-toast"/>

          <div className="App">
              {/*<FileBole/>*/}
              <Routes>
                  <Route path="/" element={
                      <>
                          <Header isUser={isUser} setIsUser={setIsUser} />
                          <div className="section-divider">
                              <img src="/svg/ocean%20waves.svg" alt="waaaaves....." />
                          </div>
                          <News/>
                          <Body/>
                          <SupportersSlider/>
                          <Footer/>
                      </>
                  }/>
                  <Route path="/registrationForm" element={<ParticipantRegistration userRegisterData={userRegisterData}/>} />
                  <Route path="/news/:slideId" element={<NewsInfo newsContent={newsContent}/>}/>
                  <Route path="/userAccount" element={<UserAccount/>}/>
                  <Route path="/AllUsers" element={<AdminLayout confirmDelete={confirm} />}/>
                  <Route path="/userInformation" element={<UserInformation confirmDelete={confirm} setIsUser={setIsUser} setUserRegisterData={setUserRegisterData} userRegisterData={userRegisterData}/>}/>
                  <Route path="/userInformation/change-password" element={<ChangePassword/>}/>
                  <Route path="/userInformation/edit-profile/:userId" element={<EditProfile/>}/>
              </Routes>
          </div>
      </contactContext.Provider>
  );
}

export default App;
