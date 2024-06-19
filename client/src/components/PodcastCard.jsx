import PropTypes from 'prop-types';
import { images, stables } from "../constants";
import { Link } from "react-router-dom";
import './podcastcard.css'


const PodcastCard = ({ post, className }) => {
  return (
    <div className={`podcast-card ${className}`}>
      <Link to={`/podcast/${post.slug}`}>
        <div className="image-container">
          <img
            src={post.photo ? stables.UPLOAD_FOLDER_BASE_URL + post.photo : images.samplePostImage}
            alt="title"
          />
        </div>
      </Link>
      <div className="podcast-content">
        <Link to={`/podcast/${post.slug}`}>
          <h2 className="podcast-title">
            {post.title}
          </h2>
          <h4 style={{color:'black'}}>June 04,2024</h4>
          <div className="divider" />
          <p className="podcast-caption">
            {post.caption.slice(0, 100)}...
          </p>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

PodcastCard.defaultProps = {
  className: '',
};

export default PodcastCard;
