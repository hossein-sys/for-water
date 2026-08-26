import "./slider/newsStyle.css";
import { useParams } from "react-router-dom";

const NewsInfo = ({ newsContent }) => {
    const { slideId } = useParams();

    const news = newsContent?.find(
        (item) => String(item.id) === String(slideId)
    );

    // اگر خبر پیدا نشد
    if (!news) {
        return (
            <section className="news-page">
                <div className="container">
                    <h2>خبر مورد نظر پیدا نشد</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="news-page">

            {/* ================= HERO ================= */}

            <header
                className="news-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0, 0, 0, 0.25),
                            rgba(0, 0, 0, 0.75)
                        ),
                        url("${news.image}")
                    `
                }}
            >

                <div className="container">

                    <div className="news-hero-content">

                        <span className="news-category">
                            {news.category}
                        </span>

                        <h1>
                            {news.title}
                        </h1>

                        <p>
                            {news.subtitle}
                        </p>

                        <div className="news-meta">

                            <span>
                                📅 {news.date}
                            </span>

                            <span>
                                ⏱️ {news.readingTime}
                            </span>

                        </div>

                    </div>

                </div>

            </header>


            {/* ================= INTRO ================= */}

            <main className="container">

                <div className="intro-card">

                    <div className="intro-line"></div>

                    <p>
                        {news.intro}
                    </p>

                </div>


                {/* ================= STATS ================= */}

                {news.stats?.length > 0 && (

                    <div className="stats-grid">

                        {news.stats.map((stat, index) => (

                            <div
                                className="stat-card"
                                key={index}
                            >

                                <div className="stat-icon">
                                    {stat.icon}
                                </div>

                                <span>
                                    {stat.value}
                                </span>

                                <p>
                                    {stat.label}
                                </p>

                            </div>

                        ))}

                    </div>

                )}


                {/* ================= ARTICLE ================= */}

                <article className="article-wrapper">

                    <div className="article-reading">

                        {news.sections?.map((section, index) => (

                            <section
                                className="article-section"
                                key={index}
                            >

                                <div className="section-heading">

                                    <span className="section-icon">
                                        {section.icon}
                                    </span>

                                    <h2>
                                        {section.title}
                                    </h2>

                                </div>

                                <div className="section-text">

                                    {section.paragraphs?.map(
                                        (paragraph, paragraphIndex) => (

                                            <p key={paragraphIndex}>
                                                {paragraph}
                                            </p>

                                        )
                                    )}

                                </div>

                                {index !== news.sections.length - 1 && (

                                    <div className="section-divider-news">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                )}

                            </section>

                        ))}

                    </div>

                </article>


                {/* ================= QUOTE ================= */}

                {news.quote && (

                    <div className="quote-box">

                        <span className="quote-mark">
                            “
                        </span>

                        <p>
                            {news.quote}
                        </p>

                    </div>

                )}


                {/* ================= CONCLUSION ================= */}

                {news.conclusion && (

                    <section className="conclusion-box">

                        <span className="conclusion-label">
                            پایان گزارش
                        </span>

                        <h2>
                            {news.conclusion.title}
                        </h2>

                        <p>
                            {news.conclusion.text}
                        </p>

                    </section>

                )}

            </main>

        </section>
    );
};

export default NewsInfo;