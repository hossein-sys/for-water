import NecessityCard from "./necessityOfEventCard/NecessityCard";

const NecessityOfEvent = () => {
    return(
        <div className="section problems-section bg-light ">
            <div className="container" id="problemsContainer">
                <div className="section-header">

                    <div className="section-title-header-text">

                        <h2 className="section-title">مسئله و ضرورت رویداد</h2>
                    </div>
                    <p className="section-description">
                        آب به عنوان حیاتی‌ترین منبع طبیعی کشور، نقش کلیدی در توسعه اقتصادی، اجتماعی و محیط‌زیستی دارد.
                    </p>
                </div>
                <NecessityCard/>
            </div>
        </div>
    )
}
export default NecessityOfEvent