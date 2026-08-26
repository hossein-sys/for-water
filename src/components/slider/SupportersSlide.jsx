import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/autoplay';


import '../../css/swiper.css';

const SupportersSlider = () => {

    const supporters = [
        { id: 1, src: "/componies/p1.png", alt: "" },
        { id: 2, src: "/componies/p2.png", alt: "سازمان آب منطقه‌ای زنجان" },
        { id: 3, src: "/componies/p3.png", alt: "اداره کل محیط زیست استان زنجان" },
        { id: 4, src: "/componies/p4.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 5, src: "/componies/p5.PNG", alt: "حامی" },
        { id: 6, src: "/componies/p6.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 7, src: "/componies/p7.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 8, src: "/componies/p8.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 9, src: "/componies/p9.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 10, src: "/componies/p10.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 11, src: "/componies/p11.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 12, src: "/componies/p12.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 13, src: "/componies/p13.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 14, src: "/componies/p14.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 15, src: "/componies/p15.PNG", alt: "پارک علم و فناوری زنجان" },
        { id: 16, src: "/componies/p16.png", alt: "پارک علم و فناوری زنجان" },
        { id: 17, src: "/componies/p17.png", alt: "پارک علم و فناوری زنجان" },
        { id: 18, src: "/componies/p18.png", alt: "پارک علم و فناوری زنجان" },
        { id: 19, src: "/componies/p19.png", alt: "پارک علم و فناوری زنجان" },
        { id: 20, src: "/componies/p20.png", alt: "پارک علم و فناوری زنجان" },

    ];

    return (
        <section className="my-section">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={2800}
                allowTouchMove={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                freeMode={false}
                grabCursor={true}
                className="mySwiper"

            >
                {supporters.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide-bottom">
                        <div className="organizer-logo">
                            <img src={item.src} alt={item.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default SupportersSlider;