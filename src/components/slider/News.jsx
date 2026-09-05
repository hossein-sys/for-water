import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";


const newsItems = [
    {
        id: 1,
        image: "/news/Picture1.avif",
        date: "۲۰ فوریه ۲۰۲۶",
        category: "اخبار آب",
        title: "نیلوفر آبی؛ گیاهی که آب‌های شیرین را زنده نگه می‌دارد",
    },

    {
        id: 2,
        image: "/news/Picture2.avif",
        date: "۲۰ فوریه ۲۰۲۶",
        category: "اخبار آب",
        title: "تشدید بحران آب در تهران؛ کاهش بی‌سابقه ذخایر و هشدار درباره آینده پایتخت",
    },

    {
        id: 3,
        image: "/news/Picture3.avif",
        date: "۲۰ فوریه ۲۰۲۶",
        category: "اخبار آب",
        title: "بهره‌وری انرژی؛ حلقه مفقوده مدیریت نوین آب",
    },

    {
        id: 4,
        image: "/news/Picture4.avif",
        date: "۲۰ فوریه ۲۰۲۶",
        category: "اخبار آب",
        title: "چاه‌های آب منبع حیات‌اند؛ زمان آن رسیده که پایش آن‌ها را جدی بگیریم",
    },
];


const News = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const totalNews = newsItems.length;

    return (
        <section className="news-section">

            <div className="container">

                {/* =========================
                    HEADER
                ========================== */}

                <header className="news-section-header">

                    <div className="news-section-heading">

                        <span className="news-section-eyebrow">
                            WATER STORIES
                        </span>

                        <h2>
                            آخرین اخبار و رویدادها
                        </h2>

                    </div>




                </header>


                {/* =========================
                    SLIDER
                ========================== */}

                <div className="news-editorial">

                    <Swiper
                        className="news-editorial-swiper"

                        modules={[
                            Navigation,
                            Autoplay,
                        ]}

                        dir="rtl"

                        loop={false}

                        slidesPerView={1}

                        spaceBetween={24}

                        speed={850}

                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        navigation={{
                            nextEl: ".news-editorial-next",
                            prevEl: ".news-editorial-prev",
                        }}

                        onRealIndexChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                    >

                        {newsItems.map((news, index) => (

                            <SwiperSlide key={news.id}>

                                <Link
                                    to={`/news/${news.id}`}
                                    className="news-editorial-link"
                                >

                                    <article className="news-editorial-card">

                                        <div className="news-editorial-image">

                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                loading={
                                                    index === 0
                                                        ? "eager"
                                                        : "lazy"
                                                }
                                            />

                                            <span className="news-image-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                        </div>


                                        <div className="news-editorial-content">

                                            <div className="news-editorial-meta">

                                                <span className="news-tag">
                                                    {news.category}
                                                </span>

                                                <span className="news-date">
                                                    <i className="far fa-calendar-alt"></i>
                                                    {news.date}
                                                </span>

                                            </div>


                                            <h3>
                                                {news.title}
                                            </h3>


                                            <div className="news-editorial-bottom">

                                                <span className="news-read-label">
                                                    مطالعه خبر
                                                </span>

                                                <span className="news-read-button">
                                                    <i className="fas fa-arrow-left"></i>
                                                </span>

                                            </div>

                                        </div>

                                    </article>

                                </Link>

                            </SwiperSlide>

                        ))}

                    </Swiper>


                    {/* =========================
                        CONTROLS
                    ========================== */}

                    <div className="news-editorial-controls">

                        <div className="news-editorial-progress">

                            <span className="news-progress-current">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>

                            <span className="news-progress-track">

                                <span
                                    className="news-progress-fill"
                                    style={{
                                        width: `${((activeIndex + 1) / totalNews) * 100}%`,
                                    }}
                                ></span>

                            </span>

                            <span className="news-progress-total">
                                {String(totalNews).padStart(2, "0")}
                            </span>

                        </div>


                        <div className="news-editorial-navigation">

                            <button
                                type="button"
                                className="news-editorial-nav news-editorial-prev"
                                aria-label="خبر قبلی"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </button>


                            <button
                                type="button"
                                className="news-editorial-nav news-editorial-next"
                                aria-label="خبر بعدی"
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default News;