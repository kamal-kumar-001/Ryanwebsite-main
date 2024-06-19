import { useState, useEffect } from 'react';
import './sliderimage.css';

import image1 from '../files/sale1.jpg';
import image2 from '../files/sale2.jpg';
import image3 from '../files/sale3.jpg';

const images = [
image1,
image2,
image3
];


const ShopImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
      <button className="navButton left" onClick={prevSlide}>&#10094;</button>
      <button className="navButton right" onClick={nextSlide}>&#10095;</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ShopImageSlider;
