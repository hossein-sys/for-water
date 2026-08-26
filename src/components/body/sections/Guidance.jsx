import {Faq} from "../../index";
import {Element} from "react-scroll";


const Guidance = () =>{

    return(
        <Element name="guidance" className="section faq-section bg-light " id="faq">
            <div className="container">
                <div className="section-header">

                    <div className="section-title-header-text">
                        <span className="section-subtitle">راهنمایی</span>
                        <h2 className="section-title">سوالات متداول (FAQ)</h2>

                    </div>
                </div>
                    <Faq/>
            </div>
        </Element>
    )
}
export default Guidance