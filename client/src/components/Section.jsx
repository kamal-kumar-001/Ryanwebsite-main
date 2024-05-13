
import "./section.css";
import image1 from "../components/images/3m.svg"
import image2 from "../components/images/barstool-store.svg"
import image3 from "../components/images/buzzfeed.svg"
import image4 from "../components/images/forbes.svg"
import image5 from "../components/images/macys.svg"
import image6 from "../components/images/mrbeast.svg"
import image7 from "../components/images/3m.svg"



function Section() {
    return (
        <div>
            <div className="section">
                <div className="content">
                    <div className="para-image">
                        <span className="span1">Father of</span>
                        <span className="span2">BIOHACKING</span>
                        <span className="span3">The Science of Longevity and Human </span>
                    </div>
                    <div className="achv">
                        <ul className="achv-inside">
                            <div className="flex1">
                            <li className="text"><span style={{ fontSize: '12px' }}>This is </span> <h4 style={{ color: 'Red', fontSize: '16px' }}>Good</h4></li>
                            <li className="text"><span style={{ fontSize: '12px' }}>Achicements <h4 style={{ color: 'Blue', fontSize: '16px' }}>No.1 Lorem, ipsum.</h4></span></li>
                            </div>
                            <div className="flex1">
                            <li className="text"><span style={{ fontSize: '12px' }}>Achicements <h4 style={{ color: 'Green', fontSize: '16px' }}>No.1 Lorem, ipsum.</h4></span></li>
                            <li className="text"><span style={{ fontSize: '12px' }}>Achicements <h4 style={{ color: 'Yellow', fontSize: '16px' }}>No.1 Lorem, ipsum.</h4></span></li>

                            </div>
                           
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="logos">      
          <div className="logos-slide">
    <img src={image1} alt="logo" />
    <img src={image3}/>
    <img src={image2} />
    <img src={image4}/>
    <img src={image5}/>
    <img src={image6}/>
    <img src={image7}/>
    <img src={image1}/>
  </div>

</div>
     <hr style={{width:"80%", margin:'auto'}}></hr>
        </div>
    );
}

export default Section;