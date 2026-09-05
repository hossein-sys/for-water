import {Link} from "react-scroll"
import {Link as RouterLink} from "react-router-dom"

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="#" className="logo-link">
                            <div className="logo-image">
                                <img src={require("../../assets/images/logo/water edition.png")} alt="لوگوی رویداد برای آب"/>
                            </div>
                            <div className="logo-text">
                                <span className="logo-main">برای آب</span>
                                <span className="logo-sub">In Green Tech</span>
                            </div>
                        </a>
                        <p className="footer-tagline">آب، زندگی، فردا</p>
                        <p className="footer-description">
                            مسیر توسعه راهکارهای نوآورانه آب؛ از ایده‌پردازی تا طراحی نمونه اولیه و اجرای آزمایشی
                        </p>
                        <div className="footer-social">
                            <a href="https://t.me/InGreenTech" aria-label="تلگرام"><i className="fab fa-telegram"></i></a>
                            <a href="https://www.instagram.com/ingreentech.iran?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="اینستاگرام"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/%D9%85%D8%B1%DA%A9%D8%B2-%D9%86%D9%88%D8%A2%D9%88%D8%B1%DB%8C-%D9%85%D8%B4%D8%AA%D8%B1%DA%A9-%D8%A2%D8%A8-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA-7286b9425" aria-label="لینکدین"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:info@ingreentech.ir" aria-label="ایمیل"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">لینک‌های سریع</h4>
                        <ul>
                            <li><Link to="home" smooth="true" duration={900}><i className="fas fa-home"></i> خانه</Link></li>
                            <li><Link to="eventIntro" smooth="true" duration={900} offset={-70}><i className="fas fa-info-circle"></i> درباره رویداد</Link></li>
                            <li><Link to="specialized" smooth="true" duration={900} offset={-70}><i className="fas fa-list-alt"></i> محورها و چالش‌ها</Link></li>
                            <li><Link to="roadMap" smooth="true" duration={900} offset={-70} ><i className="fas fa-road"></i> مسیر شرکت‌کننده</Link></li>
                            <li><Link to="participationForm" smooth="true" duration={900} offset={-70}><i className="fas fa-user-plus"></i> ثبت‌نام</Link></li>
                            <li><Link to="guidance" smooth="true" duration={900} offset={-70} ><i className="fas fa-question-circle"></i> سوالات متداول</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">تماس با دبیرخانه</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div>
                                    <div className="footer-information-icons">
                                        <i className="fas fa-envelope"></i>
                                        <div className="contact-label">ایمیل</div>
                                    </div>

                                    <a href="mailto:info@ingreentech.ir">info@ingreentech.ir</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div>
                                    <div>
                                        <i className="fas fa-phone"></i>
                                        <div className="contact-label">تلفن</div>
                                    </div>
                                    <a href="tel:02433739142">۰۲۴-۳۳۷۳۹۱۴۲</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div>
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="contact-label">آدرس دبیرخانه</div>

                                    </div>
                                    <span>زنجان- بلوار استاد ثبوتی- دانشگاه تحصیلات تکمیلی علوم‌ پایه زنجان- جنب خوابگاه
                                    دختران- ساختمان علوم و فناوری‌های نوین- واحد ۱۱۸</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div>
                                    <div>
                                        <i className="fas fa-globe"></i>
                                        <div className="contact-label">وبسایت</div>

                                    </div>
                                    <a href="https://ingreentech.ir">ingreentech.ir</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div>
                                    <div>
                                        <i className="fas fa-mail-bulk"></i>
                                        <div className="contact-label">کدپستی</div>

                                    </div>
                                    <span>۴۵۱۳۷-۶۰۰۱۸</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    {/*<p>*/}
                    {/*    © ۱۴۰۴ کلیه حقوق برای رویداد «برای آب | In Green Tech – Water Edition» برای پارک علم و فناوری*/}
                    {/*    دانشگاه تحصیلات تکمیلی علوم پایه زنجان محفوظ است.*/}
                    {/*</p>*/}
                    {/*<div className="footer-links-bottom">*/}
                    {/*    <a href="#"><img className="footer-imag" src="/companinions/IASBSlogoFA.png" alt="iasbs logo"/></a>*/}
                    {/*</div>*/}
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap:"1rem"}}>
                        <p>
                            طراحی و توسعه توسط محمد حسین عاشوری
                        </p>
                        {/*<div className="footer-social">*/}
                        {/*    <a href="https://t.me/ghostdrawing" aria-label="تلگرام"><i className="fab fa-telegram"></i></a>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

        </footer>
    )
}
export default Footer;