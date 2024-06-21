import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { images, stables } from "../../../constants";

const RecommendItem = (props) => {

  const recommend = props.recommend;

  return (
    <li
      className="flex flex-col text-center w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] rounded overflow-hidden shadow-xl"
    >
      <Link className="h-fit" to={`/ryan-recommends/${recommend.slug}`}>
        <img
          className="object-cover object-center w-full h-auto"
          src={recommend.photo ? stables.UPLOAD_FOLDER_BASE_URL + recommend.photo : images.samplePostImage}
          alt={recommend.title}
        />
      </Link>
      <Link className="h-fit" to={`/ryan-recommends/${recommend.slug}`}>
        <h5 className="text-palette-graniteGray font-normal mt-2">
          {recommend.title}
        </h5>
      </Link>
      <p className="text-gray-900 whitespace-no-wrap">
        {recommend.categories.length > 0
          ? recommend.categories.slice(0, 3).map((category, index) => (
            <span key={index}>
              {category.title}
              {recommend.categories.slice(0, 3).length === index + 1 ? '' : ', '}
            </span>
          ))
          : "Uncategorized"}
      </p>

    </li>
  );
};
RecommendItem.propTypes = {
  recommend: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    photo: PropTypes.string,
    categories: PropTypes.array,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default RecommendItem;
