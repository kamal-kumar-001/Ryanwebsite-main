import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Rating = ({ totalStars, initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    if (onRate) {
      onRate(starIndex + 1);
    }
  };

  return (
    <div className='flex '>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? '#ffc107' : '#e4e5e9'}
          size={30}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  totalStars: PropTypes.number.isRequired,
  initialRating: PropTypes.number,
  onRate: PropTypes.func
};

Rating.defaultProps = {
  initialRating: 0,
  onRate: null
};

export default Rating;
