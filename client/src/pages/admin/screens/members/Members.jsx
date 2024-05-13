// import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
import { useDataTable } from "../../../../hooks/useDataTable";
import {
  deleteMember,
  getAllMembers,
} from "../../../../services/index/members";
import DataTable from "../../components/DataTable";

const Members = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: membersData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    // queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllMembers(userState.userInfo.token,searchKeyword, currentPage),
    dataQueryKey: "members",
    deleteDataMessage: "Member is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deleteMember({
        slug,
        token,
      });
    },
  });

  return (
    <DataTable
      pageTitle="Manage Members"
      dataListName="Members"
      searchInputPlaceHolder="Member's email..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={[
        "Name",
        "Email",
        "Created At",
        "is Verified",
        "Action",
      ]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={membersData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={membersData?.headers}
      userState={userState}
    >
      {membersData?.data.map((member) => (
        <tr key={member._id}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{member.name}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">{member.email}</p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(member.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {member.verified ? "✅" : "❌"}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
            <button
              disabled={isLoadingDeleteData}
              type="button"
              className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() => {
                deleteDataHandler({
                  slug: member?._id,
                  token: userState?.userInfo.token,
                });
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default Members;
