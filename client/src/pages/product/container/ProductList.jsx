// import React from "react";
// import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
// import Loader from "../../../components/Loader";

const ProductList = (products) => {
  // console.log(products?.products);
  // const productList = useSelector((state) => state.productList);
  // const { loading, error } = productList;

  return (
    <>
        <ul className={`${products?.className} flex gap-5`}>
          {products?.products?.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))}
        </ul>
    </>
  );
};

export default ProductList;
