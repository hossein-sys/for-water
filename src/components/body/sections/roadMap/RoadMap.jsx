import {Element} from "react-scroll";

const RoadMap = () => {
    return (
        <Element name="roadMap" className="section timeline-section " id="timeline">
            <div className="container">
                <div className="section-header">

                    <div className="section-title-header-text">
                        <span className="section-subtitle">زمان بندی کلان و و فاز های اجرایی</span>
                        <h2 className="section-title">زمان‌بندی و مراحل اجرایی</h2>
                    </div>
                    <p className="section-description">
                        رویداد برای آب در شش فاز اصلی با خروجی‌های مشخص برگزار می‌شود.
                    </p>
                </div>

                <div className="timeline-detailed">
                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۱</div>
                            <h3>فراخوان و ثبت ایده</h3>
                        </div>
                        <div className="phase-content">
                            <p>آغاز ثبت‌نام آنلاین و ارسال ایده‌ها در محورهای چهارگانه</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> لیست ایده‌ها و تیم‌های اولیه
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> ۱ فروردین - ۱۵ اردیبهشت ۱۴۰۴
                            </div>
                        </div>
                    </div>

                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۲</div>
                            <h3>غربالگری و انتخاب</h3>
                        </div>
                        <div className="phase-content">
                            <p>ارزیابی ایده‌ها توسط هیئت داوران و انتخاب ایده‌های منتخب</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> تیم‌های منتخب برای مرحله بعد
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> ۱۶ - ۳۰ اردیبهشت
                            </div>
                        </div>
                    </div>

                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۳</div>
                            <h3>بوت‌کمپ آموزشی</h3>
                        </div>
                        <div className="phase-content">
                            <p>کارگاه‌های تخصصی در حوزه کسب‌وکار، فنی و مدیریت پروژه</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> طرح MVP اولیه
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> ۱ - ۱۵ خرداد
                            </div>
                        </div>
                    </div>

                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۴</div>
                            <h3>منتورینگ توسعه MVP</h3>
                        </div>
                        <div className="phase-content">
                            <p>طراحی و توسعه نمونه اولیه تحت نظارت منتورهای تخصصی</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> MVP عملیاتی اولیه
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> ۱۶ خرداد - ۱۵ تیر
                            </div>
                        </div>
                    </div>

                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۵</div>
                            <h3>Demo Day</h3>
                        </div>
                        <div className="phase-content">
                            <p>ارائه نهایی طرح‌ها به داوران و سرمایه‌گذاران</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> ارائه نهایی و ارزیابی
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> ۲۰ تیر
                            </div>
                        </div>
                    </div>

                    <div className="timeline-phase">
                        <div className="phase-header">
                            <div className="phase-number">فاز ۶</div>
                            <h3>اتصال به پایلوت و مسیر مرکز</h3>
                        </div>
                        <div className="phase-content">
                            <p>ورود تیم‌های منتخب به فرآیند توسعه مرکز ملی نوآوری آب</p>
                            <div className="phase-output">
                                <strong>خروجی:</strong> توافق‌نامه‌ها و ورود تیم‌ها به فرآیند توسعه مرکز ملی نوآوری آب
                            </div>
                            <div className="phase-duration">
                                <i className="fas fa-calendar"></i> مرداد - شهریور
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default RoadMap;