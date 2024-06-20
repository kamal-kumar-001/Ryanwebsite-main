import "./section.css";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";

import image1 from "../components/images/1.png";
import image2 from "../components/images/2.png";
import image3 from "../components/images/3.png";
import image4 from "../components/images/4.png";
import image5 from "../components/images/5.png";
import image6 from "../components/images/6.png";
import image7 from "../components/images/7.png";
import image8 from "../components/images/8.png";
import image9 from "../components/images/9.png";
import image10 from "../components/images/10.png";
import image11 from "../components/images/11.png";
import image12 from "../components/images/12.png";
import image13 from "../components/images/13.png";
import image14 from "../components/images/14.png";
import image15 from "../components/images/15.png";
import image16 from "../components/images/16.png";
import image17 from "../components/images/17.png";
import image18 from "../components/images/18.png";
import image19 from "../components/images/19.png";
import image20 from "../components/images/20.png";
import image21 from "../components/images/21.png";
import image22 from "../components/images/22.png";
import image23 from "../components/images/23.png";
import image24 from "../components/images/24.png";
import image25 from "../components/images/25.png";
import image26 from "../components/images/26.png";
import image27 from "../components/images/27.png";
import image28 from "../components/images/28.png";
import image29 from "../components/images/29.png";
import image30 from "../components/images/30.png";
import image31 from "../components/images/31.png";
import image32 from "../components/images/32.png";
import image33 from "../components/images/33.png";
import image34 from "../components/images/34.png";
import image35 from "../components/images/35.png";
import image36 from "../components/images/36.png";
import image37 from "../components/images/37.png";
import samplevideo from "../../src/files/sample.mp4";
import { AiFillPlayCircle,AiFillPauseCircle} from "react-icons/ai";

function Section() {
  const [playing, setPlaying] = useState(true); // State to manage playing/paused
  const playerRef = useRef(null); // Ref to access the ReactPlayer component

  const togglePlay = () => {
    setPlaying((prev) => !prev); // Toggle the playing state
    console.log("Toggled playing state:", !playing); // Log the new state
  };



  

  return (
    <div >
        <section className="player-wrapper">
        <ReactPlayer
        className='react-player'
          url={samplevideo}
          width='100%'
          playing={playing}
          playerRef={playerRef}
          loop
          muted={false}
          height='100%'
        />

        <button className="player-button" onClick={togglePlay}>
        {playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>

        </section>
      <div className="logos">
        <div className="logos-slide">
          <img src={image1} alt="logo" />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
          <img src={image7} />
          <img src={image8} />
          <img src={image9} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
          <img src={image17} />
          <img src={image18} />
          <img src={image19} />
          <img src={image20} />
          <img src={image21} />
          <img src={image22} />
          <img src={image23} />
          <img src={image24} />
          <img src={image25} />
          <img src={image26} />
          <img src={image27} />
          <img src={image28} />
          <img src={image29} />
          <img src={image30} />
          <img src={image31} />
          <img src={image32} />
          <img src={image33} />
          <img src={image34} />
          <img src={image35} />
          <img src={image36} />
          <img src={image37} />

          <img src={image1} alt="logo" />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
          <img src={image7} />
          <img src={image8} />
          <img src={image9} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
          <img src={image17} />
          <img src={image18} />
          <img src={image19} />
          <img src={image20} />
          <img src={image21} />
          <img src={image22} />
          <img src={image23} />
          <img src={image24} />
          <img src={image25} />
          <img src={image26} />
          <img src={image27} />
          <img src={image28} />
          <img src={image29} />
          <img src={image30} />
          <img src={image31} />
          <img src={image32} />
          <img src={image33} />
          <img src={image34} />
          <img src={image35} />
          <img src={image36} />
          <img src={image37} />
        </div>
      </div>

      <hr style={{ width: "80%", margin: "auto" }}></hr>
    </div>
  );
}

export default Section;
