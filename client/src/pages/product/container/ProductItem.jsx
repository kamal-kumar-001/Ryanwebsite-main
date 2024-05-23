import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductItem = (props) => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const product = props.product;

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=1`);
  };

  return (
    <li
      className="flex flex-col text-center w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] rounded overflow-hidden shadow-xl"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link className="h-fit" to={`/product/${product._id}`}>
        <img
          className="object-cover object-center w-full h-auto"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <Link className="h-fit" to={`/product/${product._id}`}>
        <h5 className="text-palette-graniteGray font-normal mt-2">
          {product.name}
        </h5>
      </Link>
      {isShown && (
        <button
          onClick={addToCartHandler}
          className="font-medium text-green-500 py-2 px-4"
        >
          ADD TO CART
        </button>
      )}
      {!isShown && (
        <span className="py-2 px-4 w-full h-full text-palette-chineseBlack font-medium">
          ${product.price}
        </span>
      )}
    </li>
  );
};
ProductItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default ProductItem;
