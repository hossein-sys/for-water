import {contactContext} from "../../../../contex/Context";
import {useContext, useState} from "react";

const Faq = () => {
    let FaqInfo = [
        {
            id: 1,
            question: "چه کسانی می‌توانند شرکت کنند؟",
            answer: "دانشجویان، پژوهشگران، تیم‌های فناور و شرکت‌های فعال در حوزه آب می‌توانند در رویداد حضور داشته باشند. ثبت‌نام هم به صورت فردی و هم به صورت تیمی امکان‌پذیر است و راهنمایی برای تشکیل تیم‌های مسئله‌محور ارائه می‌شود",
        },
        {
            id: 2,
            question: "هزینه شرکت در رویداد چقدر است؟",
            answer: "شرکت در رویداد کاملاً رایگان است و هیچ هزینه‌ای برای ثبت‌نام یا شرکت در کارگاه‌ها دریافت نمی‌شود. تنها تعهد شرکت‌کنندگان، مشارکت فعال در تمام مراحل رویداد است",
        },
        {
            id: 3,
            question: "خروجی نهایی رویداد چیست؟",
            answer: "تشکیل تیم‌های مسئله‌محور، توسعه نمونه اولیه (MVP) و معرفی طرح‌های منتخب به مرحله اجرای آزمایشی در چارچوب مرکز ملی نوآوری آب",
        },
        {
            id: 4,
            question: "مالکیت ایده چگونه است؟",
            answer: "تمامی حقوق مالکیت فکری ایده‌ها محفوظ است و شرکت‌کنندگان می‌توانند بر اساس قوانین IP مالکیت خود را حفظ کنند. جزئیات کامل در فایل قوانین IP قابل مشاهده است",
        },
        {
            id: 5,
            question: "بعد از رویداد چه می‌شود؟",
            answer: "تیم‌های منتخب مسیر ادامه‌دار خود را در چارچوب مرکز ملی نوآوری آب دنبال می‌کنند که شامل منتورینگ تخصصی، آموزش‌های تکمیلی و دسترسی به شبکه علمی و صنعتی برای توسعه بیشتر ایده ها است",
        },
        {
            id: 6,
            question: "آیا امکان حمایت مالی وجود دارد؟",
            answer: "بله، سازمان‌ها و شرکت‌هایی که تمایل به حمایت مالی از رویداد دارند می‌توانند از طریق بخش «حمایت از رویداد» با دبیرخانه تماس بگیرند",
        },
    ];

    const [activeId, setActiveId] = useState(null);

    const Activation = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return(
        <div className="faq-content">
            {FaqInfo.map((item) => (
                <div
                    key={item.id}
                    onClick={() => Activation(item.id)}
                    className={`faq-item ${
                        activeId === item.id ? "active" : ""
                    }`}
                >
                    <div className="faq-question">
                        <h3>{item.question}</h3>
                        <i className="fas fa-chevron-down"></i>
                    </div>

                    <div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Faq;