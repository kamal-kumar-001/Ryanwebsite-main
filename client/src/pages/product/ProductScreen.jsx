// import  { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// // import {
// //   BsFillGrid3X2GapFill,
// //   BsFillGridFill,
// //   BsGrid3X3GapFill,
// // } from "react-icons/bs";

// // import Cart from "../../components/cart/Cart";
// // import FilterProducts from "../../components/FilterProducts";
// import ProductList from "./container/ProductList";
// // import { listProducts } from "../../actions/productActions";
// import { getAllProducts } from "../../services/getAllProducts";
// import Pagination from "../../components/Pagination";
// import MainLayout from "../../components/MainLayout";

// // const viewModes = [
// //   {
// //     icon: BsFillGrid3X2GapFill,
// //     mode: "1",
// //   },
// //   {
// //     icon: BsFillGridFill,
// //     mode: "2",
// //   },
// //   {
// //     icon: BsGrid3X3GapFill,
// //     mode: "3",
// //   },
// // ];

// const ProductScreen = () => {
//   const dispatch = useDispatch();
//   const params = useParams();

//   const keyword = params.keyword;
//   const pageNumber = params.pageNumber || 1;

//   const productList = useSelector((state) => state?.productList);
//   // const { page, pages } = productList;
//   const { page, pages } = productList || { page: 1, pages: 1 };

//   // const [viewMode, setViewMode] = useState(viewModes[2].mode);

//   useEffect(() => {
//     dispatch(listProducts(keyword, pageNumber));
//   }, [dispatch, keyword, pageNumber]);

//   // const changeViewModeHandler = (viewModeValue) => {
//   //   setViewMode(viewModeValue);
//   // };

//   // let viewModeClasses = "";

//   // switch (viewMode) {
//   //   case viewModes[0].mode:
//   //     viewModeClasses = "grid grid-cols-2 gap-x-6 gap-y-10";
//   //     break;
//   //   case viewModes[1].mode:
//   //     viewModeClasses =
//   //       "grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3";
//   //     break;
//   //   default:
//   //     viewModeClasses =
//   //       "grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:grid-cols-4";
//   //     break;
//   // }

//   return (
//     <MainLayout>
//       <main className="container mx-auto px-5 py-8 md:px-14 md:py-16">
//         <ProductList/>
//         {/* <ProductList viewModeClasses={viewModeClasses} /> */}
//         <Pagination
//           pages={pages}
//           page={page}
//           keyword={keyword ? keyword : ""}
//           className="mt-10"
//           />
//       </main>
//     </MainLayout>
//   );
// };

// export default ProductScreen;

{/* <Header className="flex flex-col-reverse gap-y-2 lg:flex-row lg:items-center lg:gap-x-5 lg:justify-between">
  <div className="w-full lg:max-w-sm">
    <SearchBox />
  </div>
  <div className="flex items-center justify-between divide-x divide-gray-200 border-x border-b border-gray-200">
    <FilterProducts
      activeViewMode={viewMode}
      viewModes={viewModes}
      onChangeViewMode={changeViewModeHandler}
    />
    <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
    <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
  </div>
</Header> */}

import  { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
// import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { getAllProducts } from "../../services/index/products";
// import ProductItem from "./container/ProductItem";
import { useSearchParams } from "react-router-dom";
import ProductList from "./container/ProductList";
// import Search from "../../components/Search";

let isFirstRun = true;

const ProductScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllProducts(searchKeyword, currentPage, 12),
    queryKey: ["products"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  // console.log(data?.data?.products);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    // change the page's query string in the URL
    setSearchParams({ page, search: searchKeyword });
  };

  // const handleSearch = ({ searchKeyword }) => {
  //   setSearchParams({ page: 1, search: searchKeyword });
  // };

  return (
    <MainLayout>
      <section className="flex container mx-auto px-5 py-10 my-20">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the products data" />
          ) : data?.data?.products?.length === 0 ? (
            <p className="text-orange-500">No Products Found!</p>
          ) : (
            // data?.data?.products.map((product) => (
              <ProductList
                // key={product._id} 
                products={data?.data?.products}
                className=""
              />
            // ))
          )}
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            // totalPageCount={JSON?.parse(data?.headers?.["x-totalpagecount"])}
            totalPageCount={data?.headers?.["x-totalpagecount"] ? JSON.parse(data.headers["x-totalpagecount"]) : 0}

          />
        )}
      </section>
    </MainLayout>
  );
};

export default ProductScreen;
