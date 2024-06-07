import image1 from "../components/images/man.jpg";
import image2 from '../components/images/max1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardcarousel.css";
import  { useEffect, useState } from 'react'; // Import React hooks
const data = [
  {
    name: "Praveen",
    img: image1,
    review:
      "Lorem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, natus! ",
  },
  {
    name: "Kabir",
    img: image2,
    review:
      "Lorem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, natus!",
  },
  {
    name: "Rohan",
    img: image1,
    review:
      "Lorem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, natus!",
  },
  {
    name: "Mr x",
    img: image2,
    review:
      "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, natus! ",
  },
];

function CardCarousel() {

  const [slidesToShow, setSlidesToShow] = useState(2); // State for slidesToShow

  useEffect(() => {
    // Function to update slidesToShow based on window width
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set initial state
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slideToScroll: 1,
  };
  if (window.innerWidth <= 500) {
    settings.slidesToShow = 1;
  }
  return (
    <div className="card-container-full m-auto">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="card-container">
              <div className="card-container-text">
                <img src={d.img} alt="" className="card-container-image" />
                <div style={{paddingLeft:'10px'}}>
                  <p className="card-container-font1">
                    {d.name}
                  </p>
                  <p>{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardCarousel;
