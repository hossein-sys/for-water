import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";
import "../../css/swiper.css";
import {Link} from "react-router-dom";

const News = () => {
    const swiperRef = useRef(null);


    const updateNavButtons = (swiper) => {
        const prevBtn = document.querySelector(".swiper-button-prev");
        const nextBtn = document.querySelector(".swiper-button-next");
        if (!prevBtn || !nextBtn) return;

        if (swiper.isBeginning) {
            // prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "flex";
        }

        if (swiper.isEnd) {
            // nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "flex";
        }
    };

    useEffect(() => {

        if (swiperRef.current && swiperRef.current.swiper) {
            updateNavButtons(swiperRef.current.swiper);
        }
    }, []);

    const slidesData = [
        {id: 1, img: "/news/Picture1.avif", date: "20 Feb 2026", title: "نیلوفر آبی؛ گیاهی که آب‌های شیرین را زنده نگه می‌دارد" },
        {id: 2, img: "/news/Picture2.avif", date: "20 Feb 2026", title: "تشدید بحران آب در تهران؛ کاهش بی‌سابقه ذخایر و هشدار درباره آینده پایتخت" },
        {id: 3, img: "/news/Picture3.avif", date: "20 Feb 2026", title: "بهره‌وری انرژی؛ حلقه مفقوده مدیریت نوین آب" },
        {id: 4, img: "/news/Picture4.avif", date: "20 Feb 2026", title: "چاه‌های آب منبع حیات‌اند؛ زمان آن رسیده که پایش آن‌ها را جدی بگیریم" },
    ];

    return (
        <section className="header-slider">

            <div className="news-slider">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    direction="horizontal"
                    rtl={true}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    onSwiper={(swiper) => {

                        updateNavButtons(swiper);

                        swiper.on("slideChange", () => updateNavButtons(swiper));
                        swiper.on("reachBeginning", () => updateNavButtons(swiper));
                        swiper.on("reachEnd", () => updateNavButtons(swiper));
                    }}
                >
                    {slidesData.map((slide) => (

                        <SwiperSlide key={slide.id}>
                            <Link
                                to={`/news/${slide.id}`}
                                className="news-card-link"
                            >
                                <div className="news-card">
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="slider-image"
                                    />
                                    <div className="news-overlay"></div>
                                    <div className="news-content">
                                        <span className="news-date">
                                            {slide.date}
                                        </span>
                                        <h3>
                                            {slide.title}
                                        </h3>
                                        <div className="news-read-more">
                                            <span>مطالعه خبر</span>

                                            <i
                                                className="fa fa-arrow-left news-read-arrow"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                    ))}
                </Swiper>



                <div className="swiper-button-next">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>

        </section>
    );
};

export default News;
