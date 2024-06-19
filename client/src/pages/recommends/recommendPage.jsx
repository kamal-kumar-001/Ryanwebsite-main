import  { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { getAllRecommends } from "../../services/index/recommends";
import { useSearchParams } from "react-router-dom";
import RecommendList from "./container/RecommendList";
// import Search from "../../components/Search";

let isFirstRun = true;

const RecommendsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllRecommends(searchKeyword, currentPage, 12),
    queryKey: ["recommends"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  // console.log(data?.data);

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
  // };);
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
            <ErrorMessage message="Couldn't fetch the recommends data" />
          ) : data?.data?.recommends?.length === 0 ? (
            <p className="text-orange-500">No Recommends Found!</p>
          ) : (
            // data?.data?.recommends.map((recommend) => (
              <RecommendList
                // key={recommend._id} 
                recommends={data?.data}
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

export default RecommendsPage;
