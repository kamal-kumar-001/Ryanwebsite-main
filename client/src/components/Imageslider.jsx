// Imageslider.js

import './Imageslider.css';
import React from 'react';
// import image1 from './image/diet.jpg';
import image2 from './images/football.png';
import image3 from './images/studying.png';

// Define the image URLs
const imageUrls = [
  // image1,
image2,
image3];
const delay = 5000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imageUrls.map((imageUrl, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Slideshow;
