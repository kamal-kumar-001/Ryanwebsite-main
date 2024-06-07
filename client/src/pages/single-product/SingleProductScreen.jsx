import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetail from "./container/ProductDetail";
import Alert from "../../components/Alert";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import MainLayout from "../../components/MainLayout";
import { getProduct } from "../../services/index/products";

const SingleProductScreen = () => {
  const { id: slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLogin = useSelector((state) => state.userLogin) || {};
  const { userInfo } = userLogin;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const productData = await getProduct({slug});
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return (
    <MainLayout>
      <main className="container mx-auto px-5 py-8 md:px-14 md:py-16">
        {loading ? (
          <div className="flex">
            <button className="mx-auto btn loading bg-transparent text-gray-700 border-none">
              Loading...
            </button>
          </div>
        ) : error ? (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        ) : (
          <>
            <ProductDetail product={product} />
            <div className="mt-10">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              {product?.reviews?.length === 0 && (
                <Alert className="mt-5">No Reviews</Alert>
              )}
              <ul>
                {product.reviews?.map((review) => (
                  <li key={review._id} className="flex flex-col mt-5">
                    <span className="font-semibold">{review.name}</span>
                    <Rating
                      className="flex items-center text-palette-chineseBlack"
                      initialRating={review.rating}
                      readonly={true}
                      fractions={2}
                      emptySymbol={<AiOutlineStar />}
                      fullSymbol={<AiFillStar />}
                    />
                    <p>{review.comment}</p>
                    <p className="text-xs">
                      {review.createdAt.substring(0, 10)}
                    </p>
                  </li>
                ))}
                <li className="mt-10">
                  <h2 className="text-2xl font-semibold mb-5">
                    Write a Customer Review
                  </h2>
                  {userInfo ? (
                    <form>
                      <div className="form-control">
                        <Rating
                          className="flex items-center text-palette-chineseBlack"
                          readonly={false}
                          fractions={2}
                          emptySymbol={<AiOutlineStar />}
                          fullSymbol={<AiFillStar />}
                        />
                      </div>
                      <div className="form-control mt-3">
                        <textarea
                          className="textarea textarea-bordered"
                          placeholder="comment..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn mt-3"
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <Alert variant={"warning"} className="mt-5">
                      Please{" "}
                      <Link to="/login" className="link">
                        sign in
                      </Link>{" "}
                      to write a review
                    </Alert>
                  )}
                </li>
              </ul>
            </div>
          </>
        )}
      </main>
    </MainLayout>
  );
};

export default SingleProductScreen;
