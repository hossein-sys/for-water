import { Element } from "react-scroll";
import {useEffect, useState} from "react";
import {Link as RouterLink} from "react-router-dom";


const participationData = {
    conditions: [
        {
            title: "فرم فردی یا تیمی",
            text: "امکان ثبت‌نام به صورت فردی و تیمی",
        },
        {
            title: "مخاطبان",
            text: "دانشجویان، پژوهشگران، تیم‌های فناور و شرکت‌ها",
        },
        {
            title: "تخصص",
            text: "داشتن تخصص در یکی از حوزه‌های مرتبط با آب",
        },
        {
            title: "تعهد",
            text: "تعهد به مشارکت فعال در تمام مراحل رویداد",
        },
    ],

    requiredDocuments: [
        "عنوان ایده (حداکثر ۱۵ کلمه)",
        "شرح مسئله و نیاز قابل حل (حداکثر ۳۰۰ کلمه)",
        "راهکار پیشنهادی (حداکثر ۵۰۰ کلمه)",
        "اعضای تیم و سوابق مرتبط (در صورت ثبت‌نام تیمی)",
        "مرحله توسعه ایده (Concept / Prototype / Ready to Pilot)",
        "تخمین هزینه‌های اولیه اجرا",
    ],

    selectionRules: [
        "تمامی ایده‌ها بر اساس معیارهای داوری علمی و عملی ارزیابی می‌شوند",
        "تیم‌هایی که معیارها را برآورده نکنند، در مراحل بعدی حذف خواهند شد",
        "انتخاب تیم های نهایی، مرحله ای و شفاف انجام می شود تا عدالت حفظ گردد.",
    ],

    criteria: [
        {
            title: "نوآوری و خلاقیت",
            weight: 30,
        },
        {
            title: "قابلیت اجرایی و فنی",
            weight: 30,
        },
        {
            title: "انطباق با چالش و نیاز منطقه‌ای",
            weight: 20,
        },
        {
            title: "تأثیر اجتماعی و اقتصادی",
            weight: 20,
        },
    ],
};

const ParticipationForm = () => {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        setHasToken(localStorage.getItem("token") !== null);
    }, []);
    return (
        <Element
            name="participationForm"
            className="section registration-section"
            id="registration"
        >
            <div className="container">

                {/* ================= SECTION HEADER ================= */}

                <div className="section-header">

                    <div className="section-title-header-text">

                        <span className="section-subtitle">
                            فرم مشارکت
                        </span>

                        <h2 className="section-title">
                            شرایط ثبت‌نام و ارسال ایده
                        </h2>

                    </div>

                    <p className="section-description">
                        اطلاعات لازم برای ثبت‌نام در رویداد و ارسال ایده‌های نوآورانه
                    </p>

                </div>


                {/* ================= INFORMATION GRID ================= */}

                <div className="registration-grid">

                    {/* =====================================
        CONDITIONS
    ====================================== */}

                    <div className="info-card info-card-featured">

                        <div className="info-card-header">

                            <div className="info-icon">
                                <i className="fas fa-user-check"></i>
                            </div>

                            <div>
                <span className="info-card-eyebrow">
                    PARTICIPATION
                </span>

                                <h3>شرایط شرکت‌کننده</h3>
                            </div>

                        </div>

                        <div className="condition-list">

                            {participationData.conditions.map((item, index) => (
                                <div className="condition-item" key={index}>

                                    <div className="condition-number">
                                        {index + 1}
                                    </div>

                                    <div className="condition-content">
                                        <strong>{item.title}</strong>
                                        <p>{item.text}</p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =====================================
        DOCUMENTS
    ====================================== */}

                    <div className="info-card documents-card">

                        <div className="info-card-header">

                            <div className="info-icon">
                                <i className="fas fa-file-alt"></i>
                            </div>

                            <div>
                <span className="info-card-eyebrow">
                    REQUIREMENTS
                </span>

                                <h3>مدارک لازم برای ثبت ایده</h3>
                            </div>

                        </div>


                        <div className="documents-list">

                            {participationData.requiredDocuments.map((item, index) => (
                                <div className="document-item" key={index}>

                                    <div className="document-icon">
                                        <i className="fas fa-check"></i>
                                    </div>

                                    <div className="document-text">
                        <span className="document-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                                        <p>{item}</p>
                                    </div>

                                    <i className="fas fa-arrow-left document-arrow"></i>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =====================================
        RULES
    ====================================== */}

                    <div className="info-card rules-card">

                        <div className="info-card-header">

                            <div className="info-icon">
                                <i className="fas fa-gavel"></i>
                            </div>

                            <div>
                <span className="info-card-eyebrow">
                    SELECTION
                </span>

                                <h3>قوانین حذف/انتخاب مرحله‌ای</h3>
                            </div>

                        </div>


                        <div className="selection-flow">

                            {participationData.selectionRules.map((item, index) => (
                                <div className="selection-step" key={index}>

                                    <div className="selection-node">
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    {index < participationData.selectionRules.length - 1 && (
                                        <div className="selection-connector"></div>
                                    )}

                                    <div className="selection-content">
                        <span>
                            {index === 0
                                ? "ارزیابی"
                                : index === 1
                                    ? "غربالگری"
                                    : "انتخاب نهایی"}
                        </span>

                                        <p>{item}</p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =====================================
        CRITERIA
    ====================================== */}

                    <div className="info-card criteria-card">

                        <div className="info-card-header">

                            <div className="info-icon">
                                <i className="fas fa-star"></i>
                            </div>

                            <div>
                <span className="info-card-eyebrow">
                    JUDGING
                </span>

                                <h3>معیارهای داوری</h3>
                            </div>

                        </div>


                        <div className="criteria-list">

                            {participationData.criteria.map((item, index) => (
                                <div className="criterion" key={index}>

                                    <div className="criterion-top">

                                        <div className="criterion-title-wrap">

                            <span className="criterion-index">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                                            <h4>{item.title}</h4>

                                        </div>

                                        <span className="criterion-weight">
                            {item.weight}٪
                        </span>

                                    </div>


                                    <div className="criterion-bar">

                        <span
                            style={{
                                width: `${item.weight}%`,
                            }}
                        ></span>

                                    </div>

                                </div>
                            ))}

                        </div>


                        <div className="criteria-footer">

                            <div className="criteria-footer-label">
                                <i className="fas fa-chart-pie"></i>
                                وزن کل معیارها
                            </div>

                            <strong>۱۰۰٪</strong>

                        </div>

                    </div>

                </div>
                {/* =====================================================
    IP / CONFIDENTIALITY
===================================================== */}

                <div className="ip-info">

                    <div className="ip-info-pattern"></div>

                    <div className="ip-info-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>

                    <div className="ip-info-content">

                        <div className="ip-info-heading">

                            <div>
                <span className="ip-eyebrow">
                    INTELLECTUAL PROPERTY
                </span>

                                <h3>
                                    مالکیت فکری و محرمانگی (IP)
                                </h3>
                            </div>

                            <span className="ip-status">
                <i className="fas fa-lock"></i>
                محفوظ
            </span>

                        </div>

                        <p>
                            حقوق مالکیت فکری ایده‌ها محفوظ است و شرکت‌کنندگان می‌توانند
                            با رعایت قوانین IP مالکیت خود را حفظ کنند.
                        </p>

                        <a
                            href="/mf/قوانین%20مالکیت%20فکری.docx"
                            download
                            className="ip-link"
                        >
            <span>
                مشاهده قوانین و مقررات کامل IP
            </span>

                            <i className="fas fa-arrow-left"></i>
                        </a>

                    </div>

                </div>


                {/* =====================================================
    REGISTRATION CTA
===================================================== */}

                <div className="registration-cta">

                    <div className="cta-background"></div>

                    <div className="cta-glow cta-glow-one"></div>
                    <div className="cta-glow cta-glow-two"></div>


                    <div className="cta-content">

        <span className="cta-eyebrow">
            رویداد «برای آب»
        </span>

                        <h3>
                            ایده‌ات را به یک راهکار واقعی تبدیل کن
                        </h3>

                        <p>
                            مهلت ثبت ایده تا ۱۵ اردیبهشت ۱۴۰۴
                        </p>

                        <span className="cta-description">
            فرصت شرکت در رویداد «برای آب» و تبدیل ایده‌های نوآورانه
            به تیم‌های عملیاتی و نمونه‌های اولیه را از دست ندهید.
        </span>

                    </div>


                    <div className="cta-action">

                        <RouterLink
                            to={hasToken ? "/registrationForm" : "/userAccount"}
                            className="cta-btn-primary"
                        >
            <span>
                <i className="fas fa-paper-plane"></i>
                ثبت‌نام / ثبت ایده
            </span>

                            <i className="fas fa-arrow-left cta-btn-arrow"></i>

                        </RouterLink>

                        <div className="cta-note">
                            <i className="fas fa-info-circle"></i>

                            <span>
                پس از ارسال ایده، منتورها و تیم پشتیبانی برای راهنمایی
                با شما تماس خواهند گرفت.
            </span>
                        </div>

                    </div>

                </div>

            </div>
        </Element>
    );
};

export default ParticipationForm;