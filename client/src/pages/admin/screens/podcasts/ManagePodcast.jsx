import { images, stables } from "../../../../constants";
import { deletePodcast, getAllPodcasts } from "../../../../services/index/podcasts";
// import Pagination from "../../../../components/Pagination";
// import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";

const ManagePodcasts = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: podcastsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    // queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllPodcasts(searchKeyword, currentPage),
    dataQueryKey: "podcasts",
    deleteDataMessage: "Podcast is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deletePodcast({
        slug,
        token,
      });
    },
  });
  return (
    <DataTable
      pageTitle="Manage Podcasts"
      dataListName="Podcasts"
      searchInputPlaceHolder="Podcast title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Title", "Category", "Created At", "Tags", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={podcastsData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={podcastsData?.headers}
      userState={userState}
    >
      {podcastsData?.data.map((podcast,index) => (
        <tr key={index}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="relative block">
                  <img
                    src={
                      podcast?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + podcast?.photo
                        : images.samplePodcastImage
                    }
                    alt={podcast.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{podcast.title}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {podcast.categories.length > 0
                ? podcast.categories
                    .slice(0, 3)
                    .map(
                      (category, index) =>
                        `${category.title}${
                          podcast.categories.slice(0, 3).length === index + 1
                            ? <div key={index}></div>
                            : ", "
                        }`
                    )
                : "Uncategorized"}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(podcast.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex gap-x-2">
              {podcast.tags.length > 0
                ? podcast.tags.map((tag, index) => (
                    <p key={index}>
                      {tag}
                      {podcast.tags.length - 1 !== index && ","}
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
                  slug: podcast?.slug,
                  token: userState.userInfo.token,
                });
              }}
            >
              Delete
            </button>
            <Link
              to={`/admin/podcasts/manage/edit/${podcast?.slug}`}
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

export default ManagePodcasts;
