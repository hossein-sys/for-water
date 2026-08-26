import {Element} from "react-scroll";
import {useRef} from "react";


const EventIntro = () => {

        const videoRef = useRef(null);
        const overlayRef = useRef(null);

        const playVideo = () => {
            const video = videoRef.current;
            const overlay = overlayRef.current;
            if (!video || !overlay) return;

            const source = video.querySelector("source");
            if (source && !source.src) {
                source.src = source.dataset.src;
                video.load();
            }

            overlay.style.display = "none";
            video.play().catch(err => console.error(err));}


    return (
        <Element name="eventIntro" className="section about-section " id="about">
            <div className="container">
                <div className="section-header">

                    <div className="section-title-header-text">
                        <span className="section-subtitle"> آشنایی با رویداد</span>
                        <h2 className="section-title">رویداد برای آب چیست؟</h2>
                    </div>

                    <p className="section-description">
                        رویداد «برای آب | In Green Tech – Water Edition» یک برنامه مسئله‌محور و توسعه‌گرا در حوزه آب است که
                        با تمرکز بر چالش‌های واقعی و بومی این حوزه، بستری برای هم‌افزایی علم، فناوری و نوآوری فراهم می‌کند.
                    </p>
                </div>
                <div className="about-text-custom">
                    <h3>برای آب</h3>
                    <p>
                        رویداد «برای آب» با گردهم‌آوردن دانشجویان، پژوهشگران، تیم‌های فناور و شرکت‌ها، مسیر نظام‌مند
                        تبدیل ایده‌های نوآورانه به راهکارهای قابل اجرا در حوزه آب را دنبال می‌کند. هدف نهایی رویداد،
                        حمایت از شکل‌گیری تیم‌های توانمند و هدایت آن‌ها از مرحله ایده‌پردازی تا طراحی نمونه اولیه و
                        اجرای آزمایشی، در چارچوب فرآیندهای مرتبط با مرکز نوآوری مشترک آب و محیط زیست است.
                    </p>
                </div>
                <div className="about-content">
                    <div className="about-video">
                        <div className="video-container">

                            {/* <!-- کاور --> */}
                            <div className="video-overlay" ref={overlayRef} id="videoOverlay" >
                                <i className="fas fa-play-circle" onClick={playVideo}></i>
                                <h3>ویدیوی معرفی رویداد</h3>
                                <p>برای مشاهده ویدیو کلیک کن</p>
                            </div>

                            {/* <!-- ویدیو --> */}
                            <video className="about-video-player" id="aboutVideo" ref={videoRef} controls preload="none"
                                   poster="#">
                                <source data-src={require("../../../../assets/videos/intro_u67yPV22.mp4")} type="video/mp4"/>
                                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                            </video>

                        </div>
                    </div>
                    <div className="about-text">


                        <div className="about-features">
                            <div className="feature-item">
                                <i className="fas fa-bullseye"></i>
                                <h4>خروجی رویداد</h4>
                                <p>تشکیل تیم‌های مسئله‌محور، توسعه نمونه اولیه (MVP) و معرفی طرح‌های منتخب به مرحله اجرای
                                    آزمایشی</p>
                            </div>

                            <div className="feature-item">
                                <i className="fas fa-hands-helping"></i>
                                <h4>حمایت و توانمندسازی</h4>
                                <p>ارائه منتورینگ تخصصی، آموزش‌های هدفمند و دسترسی به شبکه‌ای از فعالان دانشگاه، صنعت و
                                    نهادهای حاکمیتی</p>
                            </div>

                            <div className="feature-item">
                                <i className="fas fa-road"></i>
                                <h4>ادامه مسیر توسعه</h4>
                                <p>اتصال طرح‌ها و تیم‌های برگزیده به فرآیندها و سازوکارهای تعریف‌شده در مرکز ملی نوآوری آب
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default EventIntro;