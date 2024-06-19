import { images, stables } from "../../../../constants";
import { deleteRecommend, getAllRecommends } from "../../../../services/index/recommends";
// import Pagination from "../../../../components/Pagination";
// import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";

const ManageRecommends = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: recommendsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    // queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllRecommends(searchKeyword, currentPage),
    dataQueryKey: "recommends",
    deleteDataMessage: "Recommend is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deleteRecommend({
        slug,
        token,
      });
    },
  });
  return (
    <DataTable
      pageTitle="Manage Recommends"
      dataListName="Recommends"
      searchInputPlaceHolder="Recommend title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Title", "Category", "Created At", "Tags", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={recommendsData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={recommendsData?.headers}
      userState={userState}
    >
      {recommendsData?.data.map((recommend,index) => (
        <tr key={index}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="relative block">
                  <img
                    src={
                      recommend?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + recommend?.photo
                        : images.sampleRecommendImage
                    }
                    alt={recommend.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{recommend.title}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {recommend.categories.length > 0
                ? recommend.categories
                    .slice(0, 3)
                    .map(
                      (category, index) =>
                        `${category.title}${
                          recommend.categories.slice(0, 3).length === index + 1
                            ? <div key={index}></div>
                            : ", "
                        }`
                    )
                : "Uncategorized"}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(recommend.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex gap-x-2">
              {recommend.tags.length > 0
                ? recommend.tags.map((tag, index) => (
                    <p key={index}>
                      {tag}
                      {recommend.tags.length - 1 !== index && ","}
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
                  slug: recommend?.slug,
                  token: userState.userInfo.token,
                });
              }}
            >
              Delete
            </button>
            <Link
              to={`/admin/recommends/manage/edit/${recommend?.slug}`}
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

export default ManageRecommends;
