import {Link} from "react-scroll"
import {Link as RouterLink} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {contactContext} from "../../contex/Context";


const Navbar = ({logoColor, navLinksColor,stickyNavbarSize,isUser , setIsUser }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const {userData} = useContext(contactContext);

    // بستن منو هنگام کلیک روی هر لینک
    const closeMenu = () => setIsMobileMenuOpen(false);
    const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

    // مدیریت قفل بدنه و نمایش نوار بالایی هنگام باز/بسته شدن منو
    useEffect(() => {
        if (isMobileMenuOpen) {
            // قفل کردن اسکرول صفحه
            document.body.style.overflow = 'hidden';
            // مخفی کردن sticky navbar (با استفاده از ref)
            if (navbarRef.current) {
                navbarRef.current.style.display = 'none';
            }
        } else {
            // بازگرداندن اسکرول
            document.body.style.overflow = '';
            if (navbarRef.current) {
                navbarRef.current.style.display = '';
            }
        }

        // Cleanup: هنگام unmount شدن کامپوننت، قفل بدنه را بردارید
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);



    return (
        <>
        <div  ref={navbarRef} className={`sticky-navbar ${stickyNavbarSize?"scrolled":""}`} id="stickyNavbar">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-logo">
                        <a href="#" className="logo-link">
                            <div className="logo-image">
                                <img className="navbar-logo" src={navLinksColor? require("../../assets/images/logo/water edition.png") : require("../../assets/images/logo/IMG_0653.PNG")} alt="logo" />
                            </div>
                            <div className="logo-text">
                                <span className={`logo-main ${navLinksColor?"":"scrolled"}`}>برای آب</span>
                            </div>
                        </a>
                    </div>

                    <nav className="main-nav">
                        <ul className="nav-menu" id="navMenu">
                            <li><Link to="home" spy={true} activeClass="active" smooth={true} duration={900}  className={`nav-link ${navLinksColor?"":"scrolled"} `}>خانه</Link></li>
                            <li><Link to="eventIntro" spy={true} activeClass="active" smooth={true} duration={900} offset={-70} className={`nav-link ${navLinksColor?"":"scrolled"}`}>رویداد</Link></li>
                            <li><Link to="specialized" spy={true} activeClass="active" smooth={true} duration={900} offset={-70} className={`nav-link ${navLinksColor?"":"scrolled"}`}>محورها</Link></li>
                            <li><Link to="roadMap" spy={true} activeClass="active" smooth={true} duration={900} offset={-70} className={`nav-link ${navLinksColor?"":"scrolled"}`}>مسیر شرکت‌کننده</Link></li>
                            <li><Link to="guidance" spy={true} activeClass="active" smooth={true} duration={900} offset={-70} className={`nav-link ${navLinksColor?"":"scrolled"}`}>سوالات متداول</Link></li>
                            {/*{userData.role === "admin"*/}
                            { userData.role?.[0] === "admin" &&
                                <li className="dropdown-parent">
                                        <RouterLink className={`nav-link ${navLinksColor?"":"scrolled"}`} to="/AllUsers">
                                            لیست کاربران
                                        </RouterLink>
                                </li>
                            }
                            <li>
                                <RouterLink to={isUser?"/userInformation": "/userAccount"}
                                            className="nav-link external-link">
                                                {isUser?
                                                <span>{`سلام ${userData?.user_name}`}</span>
                                                :<span>ثبت‌نام/ ورود</span>}
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>

                    <button  className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenuBtn" aria-label="منوی موبایل" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>


            {/*mobile menu*/}
            <div className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                          onClick={closeMenu}
                          role="presentation">

            </div>

            <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNavMenu" >
                <button className="mobile-nav-close" id="mobileNavClose" aria-label="بستن منو" onClick={closeMenu}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="mobile-nav-header">
                    <a  className="mobile-nav-logo">
                        <div className="logo-image">
                            <img src={require("../../assets/images/logo/water edition.png")} alt="لوگوی برای آب"/>
                        </div>
                        <div className="logo-text">
                            <div className="logo-main">برای آب</div>
                            <div className="logo-sub">In Green Tech</div>
                        </div>
                    </a>
                    <p className="mobile-nav-tagline">آب، زندگی، فردا</p>
                </div>

                <ul className="mobile-nav-items">
                    <li className="mobile-nav-item"><Link to="home" smooth={true} duration={900} onClick={closeMenu} className="mobile-nav-link"> <i className="fas fa-home"></i>خانه</Link></li>
                    <li className="mobile-nav-item"><Link to="eventIntro" smooth={true} duration={900} offset={-70} onClick={closeMenu} className="mobile-nav-link"> <i className="fas fa-info-circle"></i>رویداد</Link></li>
                    <li className="mobile-nav-item"><Link to="specialized" smooth={true} duration={900} offset={-70} onClick={closeMenu} className="mobile-nav-link"> <i className="fas fa-list-alt"></i>محورها</Link></li>
                    <li className="mobile-nav-item"><Link to="roadMap" smooth={true} duration={900} offset={-70} onClick={closeMenu} className="mobile-nav-link"><i className="fas fa-road"></i> مسیر شرکت‌کننده</Link></li>
                    <li className="mobile-nav-item"><Link to="guidance" smooth={true} duration={900} offset={-70} onClick={closeMenu} className="mobile-nav-link"><i className="fas fa-question-circle"></i>سوالات متداول</Link></li>
                    { userData.role?.[0] === "admin" &&
                        <li className="mobile-nav-item">
                            <RouterLink className={`mobile-nav-link`} to="/AllUsers">
                                <i className="fas fa-user-plus"></i>
                                لیست کاربران
                            </RouterLink>
                        </li>
                    }
                    <li className="mobile-nav-item"><RouterLink to={isUser?"/userInformation": "/userAccount"} onClick={closeMenu} className="mobile-nav-link external-link"><i className="fas fa-user-plus"></i>
                        {isUser?
                        <span>{`سلام ${userData?.user_name}`}</span>
                        :<span>ثبت‌نام/ ورود</span>}</RouterLink></li>
                </ul>

                <div className="mobile-nav-footer">
                    <div className="mobile-nav-contact">
                        <a href="tel:02433739142">
                            <i className="fas fa-phone"></i>
                            ۰۲۴-۳۳۷۳۹۱۴۲
                        </a>
                        <a href="mailto:info@ingreentech.ir">
                            <i className="fas fa-envelope"></i>
                            info@ingreentech.ir
                        </a>
                    </div>
                    <div className="mobile-nav-social">
                        <a href="https://t.me/InGreenTech" aria-label="تلگرام"><i className="fab fa-telegram"></i></a>
                        <a href="https://www.instagram.com/ingreentech.iran?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="اینستاگرام"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="لینکدین"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
