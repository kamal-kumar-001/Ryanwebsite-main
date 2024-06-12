import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import PodcastDetailSkeleton from "../podcastDetail/components/PodcastDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import PodcastCard from "../../components/PodcastCard";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import "./podcast.css";
import { getAllPodcasts } from "../../services/index/podcasts";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

let isFirstRun = true;

const PodcastPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllPodcasts(searchKeyword, currentPage, 12),
    queryKey: ["podcasts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    setSearchParams({ page, search: searchKeyword });
  };

  return (
    <MainLayout>
      <div className="pd-main-layout">
        <section className="container lg:mx-auto md:mx-auto  mt-5 flex flex-col px-5">
          <h2
            style={{
              fontSize: "30px",
              paddingBottom: "30px",
              paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            PODCASTS
          </h2>
          <div className="flex flex-wrap gap-y-5 pb-10 md:gap-x-5">
            {isLoading || isFetching ? (
              [...Array(3)].map((item, index) => (
                <PodcastDetailSkeleton
                  key={index}
                  className="w-full md:w-[calc(70%-20px)] lg:w-[calc(33.33%-21px)]"
                />
              ))
            ) : isError ? (
              <ErrorMessage message="Couldn't fetch the posts data" />
            ) : data?.data.length === 0 ? (
              <p className="text-orange-500">No Posts Found!</p>
            ) : (
              data?.data.map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  post={podcast}
                  className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                />
              ))
            )}
          </div>
          {!isLoading && (
            <Pagination
              onPageChange={(page) => handlePageChange(page)}
              currentPage={currentPage}
              totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
            />
          )}
        </section>
        {/* <div className="pd-search-container">
          <input type="text" placeholder="Search..." className="pd-search-input" />
          <button className="pd-search-button">Search</button>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default PodcastPage;
