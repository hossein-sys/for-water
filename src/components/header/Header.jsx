import {Navbar} from "../index";
import {Element, Link} from "react-scroll";
import {contactContext} from "../../contex/Context";
import {useContext, useEffect, useState} from "react";


const Header = ({isUser , setIsUser}) => {
    const {navLinksColor, setIsHeaderVideoLoaded,logoColor , stickyNavbarSize} = useContext(contactContext);
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setShowVideo(true);
            }, 1500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);
    return (
        <Element name="home" className="main-header-new" id="home">
            <Navbar navLinksColor={navLinksColor} logoColor={logoColor} stickyNavbarSize={stickyNavbarSize} isUser={isUser} setIsUser={setIsUser} />
            <div className="header-bg-video">

                <img
                    src={require("../../assets/videos/Screenshot 2026-06-22 165038.png")}
                    alt=""
                    className="hero-poster"
                />

                {showVideo && (
                    <video
                        src={require("../../assets/videos/Header-Video.webm")}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                    />
                )}

                <div className="video-overlay-dark"></div>

            </div>
            <div className="container" style={{marginTop: "5rem"}}>
                <div className="header-content-new">
                    <div className="header-text">
                        <br className="break"/>
                        <h1 className="header-title-large"> رویداد برای آب</h1>

                        <div className="header-tagline">
                            <span className="tagline-text">از ایده تا کسب و کار فناورانه</span>
                        </div>
                        <p className="header-description">
                            رویداد «برای آب»، فراتر از یک برنامه ایده‌محور، یک مسیر حل مسئله در حوزه آب است. در این
                            رویداد،
                            چالش‌های واقعی کشور مبنای کار قرار می‌گیرند و تیم‌ها با تکیه بر دانش، نوآوری و کار تیمی، از
                            ایده
                            اولیه تا طراحی و آزمون راهکار پیش می‌روند.
                            این رویداد با ایجاد پیوند میان دانشگاه، صنعت و زیست‌بوم نوآوری، بستری فراهم می‌کند تا
                            ایده‌ها نه
                            در حد طرح، بلکه در قالب نمونه‌های قابل اجرا و اثرگذار شکل بگیرند و مسیر توسعه خود را در
                            چارچوب
                            مرکز نوآوری مشترک آب و محیط زیست ادامه دهند.
                        </p>
                        <div className="header-buttons">
                            <Link to="participationForm" smooth="true" duration={1200} offset={-70} className="intro-btn" id="introBtn">
                                <i className="fas fa-user-plus"></i>
                                ثبت‌نام در رویداد
                            </Link>
                            <a href="#" className="outline-btn" download>
                                <i className="fas fa-download"></i>
                                دانلود کتابچه
                            </a>
                            <a href="/mf/قوانین%20مالکیت%20فکری.docx" className="outline-btn" download>
                                <i className="fas fa-file-contract"></i>
                                قوانین مالکیت فکری
                            </a>
                        </div>
                    </div>

                    {/*<div className="header-image">*/}
                    {/*    <div className="image-container" id="parallaxImage">*/}
                    {/*        <div className="header-image-real">*/}
                    {/*            <img src="#" alt="رویداد برای آب - نوآوری در مدیریت آب"*/}
                    {/*                 loading="lazy" className="header-img"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="image-glow"></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="quick-info-bar">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-item">
                            <i className="fas fa-calendar-alt"></i>
                            <div className="info-content">
                                <div className="info-title">شروع برگزاری</div>
                                <div className="info-value">اردیبهشت ۱۴۰۵</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info-content">
                                <div className="info-title">مکان</div>
                                <div className="info-value">پارک علم و فناوری دانشگاه تحصیلات تکمیلی علوم پایه استان
                                    زنجان
                                </div>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-users"></i>
                            <div className="info-content">
                                <div className="info-title">مخاطبان</div>
                                <div className="info-value">دانشجویان، پژوهشگران، تیم‌های فناور</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-trophy"></i>
                            <div className="info-content">
                                <div className="info-title">جوایز</div>
                                <div className="info-value">حمایت تا مرحله اجرای آزمایشی</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="scroll-indicator">
                <i className="fas fa-chevron-down"></i>
            </div>

        </Element>
    )
}
export default Header;