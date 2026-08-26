import {Element} from "react-scroll";
import {Link as RouterLink } from "react-router-dom";
import {useEffect, useState} from "react";

const ParticipationForm = () =>{

    const [hasToken, setHasToken] = useState(false);

    const checkToken = () => {
        const hasToken = localStorage.getItem("token") !== null;
        setHasToken(hasToken);
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <Element name="participationForm" className="section registration-section " id="registration">
            <div className="container" id="challengesContainer">
                <div className="section-header">

                    <div className="section-title-header-text">
                        <h2 className="section-subtitle">فرم مشارکت</h2>
                        <h2 className="section-title">شرایط ثبت‌نام و ارسال ایده</h2>

                    </div>
                    <p className="section-description">
                        اطلاعات لازم برای ثبت‌نام در رویداد و ارسال ایده‌های نوآورانه
                    </p>
                </div>

                <div className="registration-info" id="registrationBox">
                    <div className="info-card">
                        <h3><i className="fas fa-user-check"></i> شرایط شرکت‌کننده</h3>
                        <ul className="registration_ul">
                            <li className="registration_li"><strong>فرم فردی یا تیمی:</strong> امکان ثبت‌نام به صورت فردی و تیمی
                            </li>
                            <hr className="registration_card_hr"/>
                            <li className="registration_li"><strong>مخاطبان:</strong> دانشجویان، پژوهشگران، تیم‌های فناور و
                                شرکت‌ها</li>
                            <hr className="registration_card_hr"/>
                            <li className="registration_li"><strong>تخصص:</strong> داشتن تخصص در یکی از حوزه‌های مرتبط با آب
                            </li>
                            <hr className="registration_card_hr"/>
                            <li className="registration_li"><strong>تعهد:</strong> تعهد به مشارکت فعال در تمام مراحل رویداد</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3><i className="fas fa-file-alt"></i> مدارک لازم برای ثبت ایده</h3>
                        <ul className="registration_ul">
                            <li>عنوان ایده (حداکثر ۱۵ کلمه)</li>
                            <hr className="registration_card_hr"/>
                            <li>شرح مسئله و نیاز قابل حل (حداکثر ۳۰۰ کلمه)</li>
                            <hr className="registration_card_hr"/>
                            <li>راهکار پیشنهادی (حداکثر ۵۰۰ کلمه)</li>
                            <hr className="registration_card_hr"/>
                            <li className="resistration_li_custom">اعضای تیم و سوابق مرتبط (در صورت ثبت‌نام تیمی)</li>
                            <hr className="registration_card_hr"/>
                            <li>مرحله توسعه ایده (Concept / Prototype / Ready to Pilot)</li>
                            <hr className="registration_card_hr"/>
                            <li>تخمین هزینه‌های اولیه اجرا</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3><i className="fas fa-gavel"></i> قوانین حذف/انتخاب مرحله‌ای</h3>
                        <ul className="registration_ul_custom">
                            <li>تمامی ایده‌ها بر اساس معیارهای داوری علمی و عملی ارزیابی می‌شوند</li>
                            <hr className="registration_card_hr"/>
                            <li>تیم‌هایی که معیارها را برآورده نکنند، در مراحل بعدی حذف خواهند شد</li>
                            <hr className="registration_card_hr"/>
                            <li>نتخاب تیم های نهایی، مرحله ای و شفاف انجام می شود تا عدالت حفظ گردد.</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3><i className="fas fa-star"></i> معیارهای داوری (وزن‌ها)</h3>
                        <div className="criteria-grid">
                            <div className="criterion">
                                <div className="criterion-header">
                                    <h4>نوآوری و خلاقیت</h4>
                                    <span className="criterion-weight">۳۰٪</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: "30%"}}></div>
                                </div>
                            </div>

                            <div className="criterion">
                                <div className="criterion-header">
                                    <h4>قابلیت اجرایی و فنی</h4>
                                    <span className="criterion-weight">۳۰٪</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: "30%"}}></div>
                                </div>
                            </div>

                            <div className="criterion">
                                <div className="criterion-header">
                                    <h4>انطباق با چالش و نیاز منطقه‌ای</h4>
                                    <span className="criterion-weight">۲۰٪</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width: "20%"}}></div>
                                </div>
                            </div>

                            <div className="criterion">
                                <div className="criterion-header">
                                    <h4>تأثیر اجتماعی و اقتصادی</h4>
                                    <span className="criterion-weight">۲۰٪</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{width:" 20%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ip-info-div">
                    <div className="ip-info">
                        <h3><i className="fas fa-balance-scale"></i> مالکیت فکری و محرمانگی (IP)</h3>
                        <p>
                            حقوق مالکیت فکری ایده‌ها محفوظ است و شرکت‌کنندگان می‌توانند با رعایت قوانین IP مالکیت خود را حفظ
                            کنند.
                            <a href="#" download className="ip-link">مشاهده قوانین و مقررات کامل IP</a>
                        </p>
                    </div>
                </div>

                <div id="registration-cta-div">
                    <div className="registration-cta">
                        <div className="cta-content">
                            <h3>مهلت ثبت ایده تا ۱۵ اردیبهشت ۱۴۰۴</h3>
                            <p>فرصت شرکت در رویداد «برای آب» و تبدیل ایده‌های نوآورانه به تیم‌های عملیاتی و نمونه‌های اولیه
                                را
                                از دست ندهید.</p>

                            <div className="cta-buttons" id="cta-buttons">
                                <RouterLink  to={hasToken?"/registrationForm": "/userAccount"} className="cta-btn-primary" >
                                    <i className="fas fa-paper-plane"></i>
                                    ثبت‌نام / ثبت ایده
                                </RouterLink>

                            </div>

                            <p className="cta-note">
                                <i className="fas fa-info-circle"></i>
                                پس از ارسال ایده، منتورها و تیم پشتیبانی برای راهنمایی با شما تماس خواهند گرفت.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Element>
    )
}
export default ParticipationForm