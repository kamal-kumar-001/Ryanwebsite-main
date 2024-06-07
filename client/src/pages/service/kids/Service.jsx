import "../service.css";
import MainLayout from "../../../components/MainLayout";
import Slideshow from "../../../components/Imageslider";
import TypingEffect from "react-typing-effect";
import Cardcarousel from "../../../components/CardCarousel"

import sportsimage from '../../../components/images/sports.jpg'
import clientimage from '../../../components/images/international.jpg'
import nutriimage from '../../../components/images/nutri.jpg'
import medicalimage from '../../../components/images/medical.jpg'
import fitnessimage from '../../../components/images/fitness.jpg'

function Service() {
  return (
    <MainLayout>
      <div className="Top-section">
        <section className="content-on-image">
          <div className="text-on-image">
            <h2 className="font-style2">
              This is a heading&nbsp;
              <span>
                <TypingEffect
                 className="font-style1"
                  text={["Sports", " Nutrition", "Something"]}
                  speed={200}
                  eraseDelay={200}
                  typingDelay={1000}
                />
              </span>
            </h2>
            <p className="font-style3">
              This is paragraph Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Hic, amet.
            </p>
            <button className="signup-btn">Schedule a Meeting </button>
          </div>
          <Slideshow />
        </section>
      </div>
      <div className="Extra-content">
        <div className="Extra-content-text">
          <h1>This is heading for child service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusamus quis incidunt et eaque ea fuga optio atque sunt id libero
            ipsa, ex error ipsum possimus assumenda necessitatibus labore
            doloremque.
          </p>
          <div className="st-line"></div>
        </div>
        <div className="Extra-content-image"></div>
      </div>
      <h1 className="Listenclass">
        Listen from&nbsp; <span style={{ color: "#c8343b" }}>Ryan</span>
      </h1>
      <hr className="hr-line" />
      <div className="video-player-section">
        <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/wIo7IJxsg3A?si=sHz0oZ3FBxFWhUXH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tazfJFY1ufQ?si=_2k_-qhKyGoIejyY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/0RNLZvIG2cU?si=XbbQ8IQMIuPzPeOZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
      </div>
      <div>
        <h1 className="Listenclass">
          Other Ser <span style={{ color: "#c8343b" }}>vices</span>
        </h1>
        <hr className="hr-line" />
      </div>
      <div className="other-services">
        <div className="other-services-container">
        <img src={sportsimage} alt="Logo" />
        <h1>Sports Nutrition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.</p>
        <button>Learn More</button>
        </div>
        <div className="other-services-container">
        <img src={clientimage} alt="" />
        <h1>International Clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti illo? sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.</p>
        <button>Learn More</button>

        </div>
        <div className="other-services-container">
        <img src={medicalimage} alt="" />
        <h1>Medical Nutrition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti illo? sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.</p>
        <button>Learn More</button>
        </div>
        <div className="other-services-container">
        <img src={fitnessimage} alt="" />
        <h1>Fitness Nutrition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti illo? sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.</p>
        <button>Learn More</button>
        </div>
        <div className="other-services-container">
        <img src={nutriimage} alt="" />
        <h1>Nutrition For Health</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti illo? sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.</p>
        <button>Learn More</button>
        </div>
        <div className="other-services-container">
        <img src={nutriimage} alt="" />
        <h1>Kids Nutrition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum dolorum quidem iure sunt quia atque quod ipsam deleniti ill sunt quia atque quod ipsam deleniti illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus.o?</p>
        <button>Learn More</button>
        </div>
      </div>
      <div className="Testimonials-heading">Testimonials
      <div className="st-line"></div>
      </div>
      <div>
        <Cardcarousel/>
      </div>

      <div style={{height:'50px'}}></div>
    </MainLayout>
  );
}

export default Service;
