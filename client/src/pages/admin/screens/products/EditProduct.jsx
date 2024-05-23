import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
// import CreatableSelect from "react-select/creatable";
import { getProduct, updateProduct } from "../../../../services/index/products";
import { useParams, useNavigate } from "react-router-dom";
// import { Link, useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../articleDetail/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
// import Editor from "../../../../components/editor/Editor";
// import MultiSelectTagDropdown from "../../components/select-dropdown/MultiSelectTagDropdown";
// import { getAllCategories } from "../../../../services/index/postCategories";
// import {
//   categoryToOption,
//   filterCategories,
// } from "../../../../utils/multiSelectTagUtils";

// const promiseOptions = async (inputValue) => {
//   const { data: categoriesData } = await getAllCategories();
//   return filterCategories(inputValue, categoriesData);
// };

const EditProduct = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [productSlug, setProductSlug] = useState(slug); // Assuming you're setting this elsewhere
  const [price, setPrice] = useState(0); // Default price
  const [countInStock, setCountInStock] = useState(0); // Default countInStock
  const [rating, setRating] = useState(0); // Default rating
  const [reviews, setReviews] = useState([]); // Initialize with an empty array
  // const [image, setImage] = useState(null); // You can set initial photo here if available
  // const [brand, setBrand] = useState("");
  // const [categories, setCategories] = useState("");
  // const [description, setDescription] = useState("");
  // const [numReviews, setNumReviews] = useState(0); // Default numReviews

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getProduct({ slug }),
    queryKey: ["product", slug],
    onSuccess: (data) => {
      setInitialPhoto(data?.photo);
      setName(data.name);
      setPrice(data.price);
      setCountInStock(data.countInStock);
      setRating(data.rating);
      setReviews(data.reviews);
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: mutateUpdateProductDetail,
    isLoading: isLoadingUpdateProductDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updateProduct({
        updatedData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["product", slug]);
      toast.success("Product is updated");
      navigate(`/admin/products/manage/edit/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleUpdateProduct = async () => {
    let updatedData = new FormData();
    if (!initialPhoto && photo) {
      updatedData.append("productPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );

      updatedData.append("productPicture", picture);
    }
    updatedData.append(
      "document",
      JSON.stringify({ name, slug: productSlug, user: userState.userInfo, image: photo, countInStock, price, rating, reviews })
    );
    mutateUpdateProductDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };
  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Product picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  // let isProductDataLoaded = !isLoading && !isError;

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the product detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="productPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.name}
                  className="rounded-xl w-full"
                />
              ) : initialPhoto ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                  alt={data?.name}
                  className="rounded-xl w-full"
                />
              ) : (
                <div className="w-full min-h-[200px] bg-blue-50/50 flex justify-center items-center">
                  <HiOutlineCamera className="w-7 h-auto text-primary" />
                </div>
              )}
            </label>
            <input
              type="file"
              className="sr-only"
              id="productPicture"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5"
            >
              Delete Image
            </button>
            {/* <div className="mt-4 flex gap-2">
              {data?.categories?.map((category,index) => (
                <Link
                key={index}
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div> */}
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="name">
                <span className="d-label-text">Name</span>
              </label>
              <input
                id="name"
                value={name}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="slug">
                <span className="d-label-text">slug</span>
              </label>
              <input
                id="slug"
                value={productSlug}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setProductSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())
                }
                placeholder="product slug"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="reviews">
                <span className="d-label-text">Reviews</span>
              </label>
              <input
                id="reviews"
                value={reviews}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setReviews(e.target.value)}
                placeholder="reviews"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="rating">
                <span className="d-label-text">Rating</span>
              </label>
              <input
                id="rating"
                value={rating}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setRating(e.target.value)}
                placeholder="rating"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="price">
                <span className="d-label-text">Price</span>
              </label>
              <input
                id="price"
                value={price}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="countInStock">
                <span className="d-label-text">Count In Stock</span>
              </label>
              <input
                id="countInStock"
                value={countInStock}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setCountInStock(e.target.value)}
                placeholder="countInStock"
              />
            </div>

            {/* <div className="mb-5 mt-2">
              <label className="d-label">
                <span className="d-label-text">categories</span>
              </label>
              {isProductDataLoaded && (
                <MultiSelectTagDropdown
                  loadOptions={promiseOptions}
                  defaultValue={data?.categories?.map(categoryToOption)}
                  onChange={(newValue) =>
                    setCategories(newValue.map((item) => item.value))
                  }
                />
              )}
            </div> */}
            {/* <div className="w-full">
              {isProductDataLoaded && (
                <Editor
                  content={data?.body}
                  editable={true}
                  onDataChange={(data) => {
                    setBody(data);
                  }}
                />
              )}
            </div> */}
            <button
              disabled={isLoadingUpdateProductDetail}
              type="button"
              onClick={handleUpdateProduct}
              className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Update Product
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditProduct;
