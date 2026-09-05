import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const necessityData = [
    {
        icon: "fas fa-globe-asia",
        title: "ضرورت ملی",
        type: "text",
        content:
            "فشارهای ناشی از افزایش جمعیت، تغییرات اقلیمی، بهره‌برداری ناپایدار و ناکارآمدی در مدیریت منابع آب، نیاز به رویکردهای نوآورانه و علمی را بیش از پیش روشن می‌کند.",
    },

    {
        icon: "fas fa-map-marked-alt",
        title: "ضرورت منطقه‌ای (زنجان)",
        type: "text",
        content:
            "استان زنجان با محدودیت‌های منابع آب و چالش‌های خاص منطقه‌ای، نیازمند راهکارهای کاربردی و عملی برای مدیریت و بهینه‌سازی مصرف آب است. ایجاد فضایی برای گردهم‌آیی دانشجویان، پژوهشگران، تیم‌های فناور و شرکت‌ها، و فراهم کردن امکان توسعه ایده‌ها از مرحله اولیه تا نمونه عملی، ضرورت برگزاری رویداد «برای آب» را مشخص می‌کند.",
    },

    {
        icon: "fas fa-bullseye",
        title: "اهداف رویداد",
        type: "objectives",
        items: [
            {
                title: "تبدیل ایده به راهکار عملی",
                text:
                    "ایجاد مسیر ساختاریافته از ایده‌پردازی تا توسعه نمونه اولیه و اجرای آزمایشی",
            },
            {
                title: "توانمندسازی تیم‌ها",
                text:
                    "ارائه منتورینگ تخصصی، آموزش‌های کاربردی و دسترسی به شبکه علمی و صنعتی",
            },
            {
                title: "تقویت همکاری دانشگاه، صنعت و حاکمیت",
                text:
                    "هم‌افزایی میان ذی‌نفعان برای ارتقای نوآوری در حوزه آب",
            },
        ],
    },

    {
        icon: "fas fa-chart-line",
        title: "خروجی‌ها (KPI سطح بالا)",
        type: "outputs",
        items: [
            "تشکیل حداقل ۱۰ تیم مسئله‌محور فعال",
            "توسعه ۵–۷ نمونه اولیه عملی (MVP) قابل ارزیابی",
            "معرفی طرح‌ها به مرحله اجرای آزمایشی در چارچوب مرکز ملی نوآوری آب",
            "ایجاد شبکه‌ای از منتورها، کارشناسان و ذی‌نفعان صنعتی و حکومتی",
        ],
    },
];

const NecessityCard = () => {
    return (
        <div className="problems-slider-wrapper">

            <Swiper
                modules={[Pagination, Autoplay]}
                className="problems-swiper"

                dir="rtl"

                centeredSlides={true}

                slidesPerView={1.08}

                spaceBetween={20}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}

                speed={700}

                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },

                    900: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 26,

                        // روی دسکتاپ معمولاً center لازم نیست
                        centeredSlides: false,
                    },
                }}
            >

                {necessityData.map((card, index) => (
                    <SwiperSlide key={index}>

                        <article className="problem-card">

                            <div className="problem-card-top">

                                <div className="problem-icon">
                                    <i className={card.icon}></i>
                                </div>

                                <span className="problem-index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            </div>


                            <h3>
                                {card.title}
                            </h3>


                            {card.type === "text" && (
                                <p>
                                    {card.content}
                                </p>
                            )}


                            {card.type === "objectives" && (
                                <div className="objectives-list">

                                    {card.items.map((item, itemIndex) => (
                                        <div
                                            className="objective-item"
                                            key={itemIndex}
                                        >

                                            <div className="objective-check">
                                                <i className="fas fa-check"></i>
                                            </div>

                                            <div className="objective-content">

                                                <strong>
                                                    {item.title}
                                                </strong>

                                                <p>
                                                    {item.text}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>
                            )}


                            {card.type === "outputs" && (
                                <div className="outputs-list">

                                    {card.items.map((item, itemIndex) => (
                                        <div
                                            className="output-item"
                                            key={itemIndex}
                                        >

                                            <div className="output-check">
                                                <i className="fas fa-check"></i>
                                            </div>

                                            <p>
                                                {item}
                                            </p>

                                        </div>
                                    ))}

                                </div>
                            )}

                        </article>

                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
};

export default NecessityCard;