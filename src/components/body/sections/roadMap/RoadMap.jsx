import { Element } from "react-scroll";

const roadmapData = [
    {
        number: "۱",
        phase: "فاز اول",
        title: "فراخوان و ثبت ایده",
        description:
            "آغاز ثبت‌نام آنلاین و ارسال ایده‌ها در محورهای چهارگانه",
        output: "لیست ایده‌ها و تیم‌های اولیه",
        duration: "۱ فروردین - ۱۵ اردیبهشت ۱۴۰۴",
        icon: "fa-lightbulb",
    },
    {
        number: "۲",
        phase: "فاز دوم",
        title: "غربالگری و انتخاب",
        description:
            "ارزیابی ایده‌ها توسط هیئت داوران و انتخاب ایده‌های منتخب",
        output: "تیم‌های منتخب برای مرحله بعد",
        duration: "۱۶ - ۳۰ اردیبهشت",
        icon: "fa-filter",
    },
    {
        number: "۳",
        phase: "فاز سوم",
        title: "بوت‌کمپ آموزشی",
        description:
            "کارگاه‌های تخصصی در حوزه کسب‌وکار، فنی و مدیریت پروژه",
        output: "طرح MVP اولیه",
        duration: "۱ - ۱۵ خرداد",
        icon: "fa-graduation-cap",
    },
    {
        number: "۴",
        phase: "فاز چهارم",
        title: "منتورینگ توسعه MVP",
        description:
            "طراحی و توسعه نمونه اولیه تحت نظارت منتورهای تخصصی",
        output: "MVP عملیاتی اولیه",
        duration: "۱۶ خرداد - ۱۵ تیر",
        icon: "fa-rocket",
    },
    {
        number: "۵",
        phase: "فاز پنجم",
        title: "Demo Day",
        description:
            "ارائه نهایی طرح‌ها به داوران و سرمایه‌گذاران",
        output: "ارائه نهایی و ارزیابی",
        duration: "۲۰ تیر",
        icon: "fa-font-awesome",
    },
    {
        number: "۶",
        phase: "فاز ششم",
        title: "اتصال به پایلوت و مسیر مرکز",
        description:
            "ورود تیم‌های منتخب به فرآیند توسعه مرکز ملی نوآوری آب",
        output:
            "توافق‌نامه‌ها و ورود تیم‌ها به فرآیند توسعه مرکز ملی نوآوری آب",
        duration: "مرداد - شهریور",
        icon: "fa-link",
    },
];

const RoadMap = () => {
    return (
        <Element
            name="roadMap"
            className="section timeline-section"
            id="timeline"
        >
            <div className="container">

                <div className="section-header">
                    <div className="section-title-header-text">
                        <span className="section-subtitle">
                            زمان بندی کلان و فاز های اجرایی
                        </span>

                        <h2 className="section-title">
                            زمان‌بندی و مراحل اجرایی
                        </h2>
                    </div>

                    <p className="section-description">
                        رویداد برای آب در شش فاز اصلی با خروجی‌های مشخص برگزار می‌شود.
                    </p>
                </div>


                <div className="roadmap">

                    <div className="roadmap-line"></div>

                    {roadmapData.map((item, index) => (
                        <article
                            className={`roadmap-item ${
                                index % 2 === 0
                                    ? "roadmap-item-right"
                                    : "roadmap-item-left"
                            }`}
                            key={item.number}
                        >

                            <div className="roadmap-marker">
                                <span>{item.number}</span>
                            </div>


                            <div className="roadmap-card">

                                <div className="roadmap-card-top">

                                    <div className="roadmap-phase">
                                        {item.phase}
                                    </div>

                                    <div className="roadmap-icon">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>

                                </div>


                                <h3 className="roadmap-title">
                                    {item.title}
                                </h3>


                                <p className="roadmap-description">
                                    {item.description}
                                </p>


                                <div className="roadmap-meta">

                                    <div className="roadmap-meta-item roadmap-output">

                                        <div className="roadmap-meta-icon">
                                            <i className="fas fa-bullseye"></i>
                                        </div>

                                        <div className="roadmap-meta-content">
                                            <span>خروجی</span>
                                            <p>{item.output}</p>
                                        </div>

                                    </div>


                                    <div className="roadmap-meta-item roadmap-date">

                                        <div className="roadmap-meta-icon">
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>

                                        <div className="roadmap-meta-content">
                                            <span>زمان اجرا</span>
                                            <p>{item.duration}</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </Element>
    );
};

export default RoadMap;