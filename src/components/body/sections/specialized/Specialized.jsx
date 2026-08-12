import {Element} from "react-scroll";

const Specialized = () => {
    return (
        <Element name="specialized" className="section topics-section bg-light" id="topics">
            <div className="container" id="topicsContainer">
                <div className="section-header">

                    <div className="section-title-header-text">
                        <span className="section-subtitle">حوزه‌های تخصصی</span>
                        <h2 className="section-title">محورها و چالش‌های رویداد</h2>
                    </div>
                    <p className="section-description">
                        بر اساس رصد فناوری‌های نوظهور جهانی، رویداد برای آب در چهار محور اصلی برگزار می‌شود.
                    </p>
                </div>

                <div className="topics-grid">
                    <div className="topic-card">
                        <div className="topic-card-upper">
                            <div className="topic-icon-wrapper">
                                <span className="topic-number">۱</span>
                                <div className="topic-icon">
                                    <i className="fas fa-tint"></i>
                                </div>
                            </div>
                            <h3 className="topic-title">مدیریت منابع آب</h3>
                            <p className="topic-description">توسعه و به‌کارگیری روش‌های علمی و فناورانه برای مدیریت بهینه منابع
                                آب و کاهش هدررفت</p>

                            <h4>نمونه مسائل و چالش‌ها:</h4>
                            <ul className="topic-challenges">
                                <li>کاهش هدررفت آب در شبکه‌های شهری</li>
                                <li>مدیریت منابع آب زیرزمینی و ذخایر آبی</li>
                                <li>بهینه‌سازی مصرف آب در بخش کشاورزی</li>
                                <li>پیش‌بینی نیاز آب در مناطق صنعتی</li>
                                <li>بازچرخانی آب در بخش کشاورزی</li>
                                <li>مدیریت بحران کم‌آبی</li>
                                <li>ارتقای شاخص بهره‌وری منابع آب</li>
                                <li>دیجیتال‌سازی پایش منابع آب</li>
                            </ul>
                        </div>
                        <div style={{height: "auto"}}></div>
                        <div className="topic-card-lower">
                            <div className="topic-output">
                                <h4>خروجی مورد انتظار:</h4>
                                <p>MVP شامل سیستم مدیریت مصرف آب با قابلیت پیش‌بینی و گزارش‌دهی</p>
                            </div>

                            <div className="topic-stakeholders" id="topicStakeholders">
                                <h4>دستگاه‌های ذی‌نفع:</h4>
                                <p>آبفا، آب منطقه‌ای، دانشگاه‌ها، شرکت‌های فناور</p>
                            </div>
                        </div>

                    </div>

                    <div className="topic-card">
                        <div className="topic-icon-wrapper">

                            <span className="topic-number">۲</span>
                            <div className="topic-icon">
                                <i className="fas fa-filter"></i>
                            </div>
                        </div>
                        <h3 className="topic-title">تصفیه و بازچرخانی آب</h3>
                        <p className="topic-description">توسعه فناوری‌ها و روش‌های نوین برای پاک‌سازی و بازیافت آب به شکل پایدار
                        </p>

                        <h4>نمونه مسائل و چالش‌ها:</h4>
                        <ul className="topic-challenges">
                            <li>تصفیه و بهینه‌سازی پساب‌های صنعتی و شهری</li>
                            <li>توسعه فناوری‌های نوین بازیافت آب</li>
                            <li>کاهش آلاینده‌ها و ارتقای کیفیت منابع آب</li>
                            <li>حذف فلزات سنگین از آب‌های آلوده</li>
                            <li>سیستم‌های تصفیه غیرمتمرکز</li>
                            <li>استفاده از انرژی‌های تجدیدپذیر در تصفیه</li>
                            <li>تصفیه آب‌های شور و لب‌شور</li>
                            <li>بهبود کیفیت آب آشامیدنی</li>
                        </ul>
                        <div>
                            <div className="topic-output">
                                <h4>خروجی مورد انتظار:</h4>
                                <p>سیستم تصفیه مقرون به صرفه با قابلیت بازیافت آب</p>
                            </div>

                            <div className="topic-stakeholders">
                                <h4>دستگاه‌های ذی‌نفع:</h4>
                                <p>صنایع بزرگ، شهرداری‌ها، شرکت‌های آب و فاضلاب</p>
                            </div>
                        </div>

                    </div>

                    <div className="topic-card">
                        <div className="topic-icon-wrapper">

                            <span className="topic-number">۳</span>
                            <div className="topic-icon">
                                <i className="fas fa-microchip"></i>
                            </div>
                        </div>
                        <h3 className="topic-title">مرکز نوآوری مشترک آب و محیط زیست</h3>
                        <p className="topic-description">کاربرد فناوری‌های نوین، داده‌محور و دیجیتال در حوزه آب برای مدیریت
                            هوشمند</p>

                        <h4>نمونه مسائل و چالش‌ها:</h4>
                        <ul className="topic-challenges">
                            <li>سامانه‌های هوشمند پایش و مدیریت منابع آب</li>
                            <li>مدل‌سازی و پیش‌بینی کمبود و تقاضای آب</li>
                            <li>ابزارهای دیجیتال برای بهینه‌سازی مصرف</li>
                            <li>اینترنت اشیا (IoT) در مدیریت آب</li>
                            <li>هوش مصنوعی در پیش‌بینی کیفیت آب</li>
                            <li>بلاک چین در تراکنش‌های آب مجازی</li>
                            <li>سنسورهای هوشمند پایش کیفیت</li>
                            <li>پلتفرم‌های داده‌محور مدیریت آب</li>
                        </ul>

                        <div>
                            <div className="topic-output">
                                <h4>خروجی مورد انتظار:</h4>
                                <p>پلتفرم دیجیتال مدیریت هوشمند آب با قابلیت تحلیل داده</p>
                            </div>

                            <div className="topic-stakeholders">
                                <h4>دستگاه‌های ذی‌نفع:</h4>
                                <p>شرکت‌های نرم‌افزاری، استارتاپ‌های فناوری، نهادهای نظارتی</p>
                            </div>
                        </div>
                    </div>

                    <div className="topic-card">
                        <div className="topic-icon-wrapper">

                            <span className="topic-number">۴</span>
                            <div className="topic-icon">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                        </div>
                        <h3 className="topic-title">سیاست‌گذاری و حکمرانی آب</h3>
                        <p className="topic-description">طراحی سازوکارهای قانونی و نهادی برای مدیریت پایدار آب با تمرکز بر
                            هماهنگی میان‌بخشی</p>

                        <h4>نمونه مسائل و چالش‌ها:</h4>
                        <ul className="topic-challenges">
                            <li>تدوین سیاست‌های پایدار مدیریت آب شهری</li>
                            <li>ایجاد چارچوب‌های همکاری میان نهادها</li>
                            <li>طراحی راهکارهای مدیریت بحران کم‌آبی</li>
                            <li>نظام‌های قیمت‌گذاری آب</li>
                            <li>حکمرانی مشارکتی منابع آب</li>
                            <li>ارزیابی اثرات اجتماعی پروژه‌های آبی</li>
                            <li>چارچوب‌های حقوقی حفاظت از منابع آب</li>
                            <li>سیستم‌های نظارت و ارزیابی عملکرد</li>
                        </ul>
                        <div>
                            <div className="topic-output">
                                <h4>خروجی مورد انتظار:</h4>
                                <p>چارچوب سیاستی و نظام حکمرانی مشارکتی منابع آب</p>
                            </div>

                            <div className="topic-stakeholders">
                                <h4>دستگاه‌های ذی‌نفع:</h4>
                                <p>نهادهای قانون‌گذاری، سازمان‌های دولتی، مؤسسه های پژوهشی</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Element>
    )
}
export default Specialized