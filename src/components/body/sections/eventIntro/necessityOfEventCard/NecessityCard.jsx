const NecessityCard = () =>{

    return(
        <div className="problems-content">
            <div className="problem-card">
                <div className="problem-icon">
                    <i className="fas fa-globe-asia"></i>
                </div>
                <h3>ضرورت ملی</h3>
                <p>
                    فشارهای ناشی از افزایش جمعیت، تغییرات اقلیمی، بهره‌برداری ناپایدار و ناکارآمدی در مدیریت منابع
                    آب، نیاز به رویکردهای نوآورانه و علمی را بیش از پیش روشن می‌کند.
                </p>
            </div>

            <div className="problem-card">
                <div className="problem-icon">
                    <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3>ضرورت منطقه‌ای (زنجان)</h3>
                <p>
                    استان زنجان با محدودیت‌های منابع آب و چالش‌های خاص منطقه‌ای، نیازمند راهکارهای کاربردی و عملی
                    برای مدیریت و بهینه‌سازی مصرف آب است. ایجاد فضایی برای گردهم‌آیی دانشجویان، پژوهشگران، تیم‌های
                    فناور و شرکت‌ها، و فراهم کردن امکان توسعه ایده‌ها از مرحله اولیه تا نمونه عملی، ضرورت برگزاری
                    رویداد «برای آب» را مشخص می‌کند.
                </p>
            </div>

            <div className="problem-card">
                <div className="problem-icon">
                    <i className="fas fa-bullseye"></i>
                </div>
                <h3>اهداف رویداد</h3>
                <ul className="objectives-list">
                    <li className="event_goals_li"><i className="fas fa-check-circle"></i> <strong>تبدیل ایده به راهکار
                        عملی:</strong>
                        <p>ایجاد مسیر ساختاریافته از ایده‌پردازی تا توسعه نمونه اولیه و اجرای آزمایشی</p>
                    </li>
                    <li className="event_goals_li"><i className="fas fa-check-circle"></i> <strong>توانمندسازی
                        تیم‌ها:</strong>
                        <p>ارائه منتورینگ تخصصی، آموزش‌های کاربردی و دسترسی به شبکه علمی و صنعتی</p>
                    </li>
                    <li className="event_goals_li"><i className="fas fa-check-circle"></i> <strong>تقویت همکاری دانشگاه،
                        صنعت و
                        حاکمیت:</strong>
                        <p>هم‌افزایی میان ذی‌نفعان برای ارتقای نوآوری در حوزه آب</p>
                    </li>
                </ul>
            </div>

            <div className="problem-card">
                <div className="problem-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <h3>خروجی‌ها (KPI سطح بالا)</h3>
                <ul className="outputs-list">
                    <li><i className="fas fa-check-circle"></i> تشکیل حداقل ۱۰ تیم مسئله‌محور فعال</li>
                    <li><i className="fas fa-check-circle"></i> توسعه ۵–۷ نمونه اولیه عملی (MVP) قابل ارزیابی</li>
                    <li><i className="fas fa-check-circle"></i> معرفی طرح‌ها به مرحله اجرای آزمایشی در چارچوب مرکز ملی
                        نوآوری آب</li>
                    <li><i className="fas fa-check-circle"></i> ایجاد شبکه‌ای از منتورها، کارشناسان و ذی‌نفعان صنعتی و
                        حکومتی</li>
                </ul>
            </div>
        </div>
    )
}
export default NecessityCard