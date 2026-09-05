import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const topics = [
    {
        number: "۱",
        icon: "fas fa-tint",
        title: "مدیریت منابع آب",
        description:
            "توسعه و به‌کارگیری روش‌های علمی و فناورانه برای مدیریت بهینه منابع آب و کاهش هدررفت",
        challenges: [
            "کاهش هدررفت آب در شبکه‌های شهری",
            "مدیریت منابع آب زیرزمینی و ذخایر آبی",
            "بهینه‌سازی مصرف آب در بخش کشاورزی",
            "پیش‌بینی نیاز آب در مناطق صنعتی",
            "بازچرخانی آب در بخش کشاورزی",
            "مدیریت بحران کم‌آبی",
            "ارتقای شاخص بهره‌وری منابع آب",
            "دیجیتال‌سازی پایش منابع آب",
        ],
        output:
            "MVP شامل سیستم مدیریت مصرف آب با قابلیت پیش‌بینی و گزارش‌دهی",
        stakeholders:
            "آبفا، آب منطقه‌ای، دانشگاه‌ها، شرکت‌های فناور",
    },

    {
        number: "۲",
        icon: "fas fa-filter",
        title: "تصفیه و بازچرخانی آب",
        description:
            "توسعه فناوری‌ها و روش‌های نوین برای پاک‌سازی و بازیافت آب به شکل پایدار",
        challenges: [
            "تصفیه و بهینه‌سازی پساب‌های صنعتی و شهری",
            "توسعه فناوری‌های نوین بازیافت آب",
            "کاهش آلاینده‌ها و ارتقای کیفیت منابع آب",
            "حذف فلزات سنگین از آب‌های آلوده",
            "سیستم‌های تصفیه غیرمتمرکز",
            "استفاده از انرژی‌های تجدیدپذیر در تصفیه",
            "تصفیه آب‌های شور و لب‌شور",
            "بهبود کیفیت آب آشامیدنی",
        ],
        output:
            "سیستم تصفیه مقرون به صرفه با قابلیت بازیافت آب",
        stakeholders:
            "صنایع بزرگ، شهرداری‌ها، شرکت‌های آب و فاضلاب",
    },

    {
        number: "۳",
        icon: "fas fa-microchip",
        title: "مرکز نوآوری مشترک آب و محیط زیست",
        description:
            "کاربرد فناوری‌های نوین، داده‌محور و دیجیتال در حوزه آب برای مدیریت هوشمند",
        challenges: [
            "سامانه‌های هوشمند پایش و مدیریت منابع آب",
            "مدل‌سازی و پیش‌بینی کمبود و تقاضای آب",
            "ابزارهای دیجیتال برای بهینه‌سازی مصرف",
            "اینترنت اشیا (IoT) در مدیریت آب",
            "هوش مصنوعی در پیش‌بینی کیفیت آب",
            "بلاک چین در تراکنش‌های آب مجازی",
            "سنسورهای هوشمند پایش کیفیت",
            "پلتفرم‌های داده‌محور مدیریت آب",
        ],
        output:
            "پلتفرم دیجیتال مدیریت هوشمند آب با قابلیت تحلیل داده",
        stakeholders:
            "شرکت‌های نرم‌افزاری، استارتاپ‌های فناوری، نهادهای نظارتی",
    },

    {
        number: "۴",
        icon: "fas fa-balance-scale",
        title: "سیاست‌گذاری و حکمرانی آب",
        description:
            "طراحی سازوکارهای قانونی و نهادی برای مدیریت پایدار آب با تمرکز بر هماهنگی میان‌بخشی",
        challenges: [
            "تدوین سیاست‌های پایدار مدیریت آب شهری",
            "ایجاد چارچوب‌های همکاری میان نهادها",
            "طراحی راهکارهای مدیریت بحران کم‌آبی",
            "نظام‌های قیمت‌گذاری آب",
            "حکمرانی مشارکتی منابع آب",
            "ارزیابی اثرات اجتماعی پروژه‌های آبی",
            "چارچوب‌های حقوقی حفاظت از منابع آب",
            "سیستم‌های نظارت و ارزیابی عملکرد",
        ],
        output:
            "چارچوب سیاستی و نظام حکمرانی مشارکتی منابع آب",
        stakeholders:
            "نهادهای قانون‌گذاری، سازمان‌های دولتی، مؤسسه های پژوهشی",
    },
];


export default function Topics() {

    const [openCards, setOpenCards] = useState({});


    const toggleCard = (index) => {
        setOpenCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    return (
        <div className="topics-slider-wrapper">

            <Swiper
                className="topics-swiper"

                modules={[Pagination, Autoplay]}

                dir="rtl"


                centeredSlides={true}

                slidesPerView={1.08}

                spaceBetween={18}

                speed={700}

                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}

                pagination={{
                    clickable: true,
                    el: ".topics-pagination",
                    dynamicBullets: false,
                }}

                breakpoints={{

                    576: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                        centeredSlides: true,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                        centeredSlides: true,
                    },

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        centeredSlides: false,
                    },

                }}
            >

                {topics.map((topic, index) => {

                    const isOpen = openCards[index];

                    return (
                        <SwiperSlide key={topic.number}>

                            <article
                                className={`topic-card ${
                                    isOpen ? "topic-card-open" : ""
                                }`}
                            >

                                {/* =====================
                                    TOP
                                ====================== */}

                                <div className="topic-card-top">

                                    <div className="topic-icon">
                                        <i className={topic.icon}></i>
                                    </div>

                                    <span className="topic-number">
                                        {topic.number}
                                    </span>

                                </div>


                                {/* =====================
                                    TITLE
                                ====================== */}

                                <h3 className="topic-title">
                                    {topic.title}
                                </h3>


                                {/* =====================
                                    DESCRIPTION
                                ====================== */}

                                <p className="topic-description">
                                    {topic.description}
                                </p>


                                {/* =====================
                                    PREVIEW CHALLENGES
                                ====================== */}

                                <div className="topic-preview">

                                    <h4>
                                        نمونه مسائل و چالش‌ها:
                                    </h4>

                                    <ul className="topic-challenges">

                                        {topic.challenges
                                            .slice(0, 3)
                                            .map((challenge, challengeIndex) => (
                                                <li key={challengeIndex}>
                                                    {challenge}
                                                </li>
                                            ))}

                                    </ul>

                                </div>


                                {/* =====================
                                    READ MORE
                                ====================== */}

                                <button
                                    type="button"
                                    className="topic-read-more"
                                    onClick={() => toggleCard(index)}
                                >
                                    <span>
                                        {isOpen
                                            ? "بستن جزئیات"
                                            : "مشاهده ادامه"}
                                    </span>

                                    <i
                                        className={`fas fa-chevron-down ${
                                            isOpen
                                                ? "topic-read-more-open"
                                                : ""
                                        }`}
                                    ></i>
                                </button>


                                {/* =====================
                                    EXTRA CONTENT
                                ====================== */}

                                <div
                                    className={`topic-extra ${
                                        isOpen
                                            ? "topic-extra-open"
                                            : ""
                                    }`}
                                >

                                    <div className="topic-extra-inner">

                                        <h4>
                                            همه مسائل و چالش‌ها:
                                        </h4>

                                        <ul className="topic-challenges topic-challenges-extra">

                                            {topic.challenges
                                                .slice(3)
                                                .map((challenge, challengeIndex) => (
                                                    <li
                                                        key={challengeIndex}
                                                    >
                                                        {challenge}
                                                    </li>
                                                ))}

                                        </ul>


                                        <div className="topic-output">

                                            <h4>
                                                خروجی مورد انتظار:
                                            </h4>

                                            <p>
                                                {topic.output}
                                            </p>

                                        </div>


                                        <div className="topic-stakeholders">

                                            <h4>
                                                دستگاه‌های ذی‌نفع:
                                            </h4>

                                            <p>
                                                {topic.stakeholders}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </article>

                        </SwiperSlide>
                    );
                })}

            </Swiper>


            <div className="topics-pagination"></div>

        </div>
    );
}