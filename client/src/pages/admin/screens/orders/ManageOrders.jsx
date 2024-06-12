// import { images, stables } from "../../../../constants";
import { deleteOrder, getAllOrders } from "../../../../services/index/orders";
// import Pagination from "../../../../components/Pagination";
// import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";

const ManageOrders = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: ordersData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    // queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllOrders(userState.userInfo.token, searchKeyword, currentPage),
    dataQueryKey: "orders",
    deleteDataMessage: "Order is deleted",
    mutateDeleteFn: ({ id, token }) => {
      return deleteOrder({
        id,
        token,
      });
    },
  });

  return (
    <DataTable
      pageTitle="Manage Orders"
      dataListName="Orders"
      searchInputPlaceHolder="order details..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["ID", "User", "Date", "Payment Status", "Shipment Status", "Action"]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={ordersData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={ordersData?.headers}
      userState={userState}
    >
      {ordersData?.data.map((post,index) => (
        <tr key={index}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0">
                <a href="/" className="relative block">
                  <img
                    src={
                      post?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + post?.photo
                        : images.samplePostImage
                    }
                    alt={post.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div> */}
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{post._id}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {post.user.name}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {post.isPaid ? "Paid" : "Not Paid" }
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {post.isDelivered ? "Delivered" : "Not Delivered" }
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
            <button
              disabled={isLoadingDeleteData}
              type="button"
              className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() => {
                deleteDataHandler({
                  id: post._id,
                  token: userState.userInfo.token,
                });
              }}
            >
              Delete
            </button>
            <Link
              to={`/admin/orders/manage/edit/${post?.slug}`}
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

export default ManageOrders;
