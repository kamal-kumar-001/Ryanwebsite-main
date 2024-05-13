import { images, stables } from "../../../../constants";
import { deleteProduct, getAllProducts } from "../../../../services/index/products";
import Pagination from "../../../../components/Pagination";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";

const ManageProducts = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: productsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllProducts(searchKeyword, currentPage),
    dataQueryKey: "products",
    deleteDataMessage: "Product is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deleteProduct({
        slug,
        token,
      });
    },
  });

  return (
    <DataTable
      pageTitle="Manage Products"
      dataListName="Products"
      searchInputPlaceHolder="Product title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Title", "Category", "Created At", "Tags", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={productsData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={productsData?.headers}
      userState={userState}
    >
      {productsData?.data.map((product) => (
        <tr>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="relative block">
                  <img
                    src={
                      product?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + product?.photo
                        : images.sampleProductImage
                    }
                    alt={product.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{product.title}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {product.categories.length > 0
                ? product.categories
                    .slice(0, 3)
                    .map(
                      (category, index) =>
                        `${category.title}${
                          product.categories.slice(0, 3).length === index + 1
                            ? ""
                            : ", "
                        }`
                    )
                : "Uncategorized"}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(product.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex gap-x-2">
              {product.tags.length > 0
                ? product.tags.map((tag, index) => (
                    <p>
                      {tag}
                      {product.tags.length - 1 !== index && ","}
                    </p>
                  ))
                : "No tags"}
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
            <button
              disabled={isLoadingDeleteData}
              type="button"
              className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() => {
                deleteDataHandler({
                  slug: product?.slug,
                  token: userState.userInfo.token,
                });
              }}
            >
              Delete
            </button>
            <Link
              to={`/admin/products/manage/edit/${product?.slug}`}
              className="text-green-600 hover:text-green-900"
            >
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default ManageProducts;
