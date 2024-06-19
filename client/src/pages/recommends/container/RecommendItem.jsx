import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RecommendItem = (props) => {

  const recommend = props.recommend;
  // console.log(recommend);

  return (
    <li
      className="flex flex-col text-center w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] rounded overflow-hidden shadow-xl"
    >
      <Link className="h-fit" to={`/ryan-recommends/${recommend.slug}`}>
        <img
          className="object-cover object-center w-full h-auto"
          src={recommend.image}
          alt={recommend.title}
        />
      </Link>
      <Link className="h-fit" to={`/ryan-recommends/${recommend.slug}`}>
        <h5 className="text-palette-graniteGray font-normal mt-2">
          {recommend.title}
        </h5>
      </Link>
        <span className="py-2 px-4 w-full h-full text-palette-chineseBlack font-medium">
          {/* ${recommend.price} */}
        </span>
    </li>
  );
};
RecommendItem.propTypes = {
  recommend: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default RecommendItem;
