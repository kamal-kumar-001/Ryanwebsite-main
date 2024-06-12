// import { BsCheckLg } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';
import { images, stables } from "../constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`relative shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} transition-transform duration-300 transform hover:scale-103`}
    >
      <div className="absolute cursor-pointer text-gray-700 hover:text-white left-[-9px] top-7 z-10 bg-white px-2 py-1 border-2 hover:bg-orange-500  border-orange-500 transition-transform duration-300">
        <div className="leading-[.75] px-2 ">
        <span className="text-base  font-semibold ">04</span><br/>
        <span className=" text-xs  font-semibold ">Apr</span>
        </div>
      </div>
      <Link to={`/blog/${post.slug}`}>
      <div className="relative overflow-hidden">
          <img
            src={post.photo ? stables.UPLOAD_FOLDER_BASE_URL + post.photo : images.samplePostImage}
            alt="title"
            className="w-full overflow-hidden object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto text-center font-bold text-xl text-dark-soft hover:text-orange-500 md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <div className="h-[2px] mt-3 w-7 mx-auto  bg-slate-400" />

          {/* </div> */}
          <p className="text-dark-light text-center mt-3 text-sm md:text-lg">
            {post.caption.slice(0,100)}...
          </p>
        </Link>
      </div>
    </div>
  );
};
ArticleCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
export default ArticleCard;
