import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images, stables } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import ArticleDetailSkeleton from "./components/PodcastDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import Editor from "../../components/editor/Editor";
import { getSinglePodcast } from "../../services/index/podcasts";
import { AiFillYoutube, AiFillAmazonCircle, AiFillApple } from "react-icons/ai";
import "./podcastdetail.css";
import AudioPlayer from "../../components/Audio";

const PodcastDetailPage = () => {
  const { slug } = useParams();
  const contentRef = useRef(null);

  const [breadCrumbsData, setBreadCrumbsData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePodcast({ slug }),
    queryKey: ["podcast", slug],
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Podcast", link: "/podcast" },
        { name: "Podcast title", link: `/podcast/${data.slug}` },
      ]);
    },
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <div className="">
          <section
            ref={contentRef}
            className="container mx-auto flex max-w-5xl flex-col px-5 py-5 lg:flex-row lg:items-start lg:gap-x-5"
          >
            <article className="flex flex-1 flex-col items-start">
              <BreadCrumbs data={breadCrumbsData} />
              <h1 className="mt-4 w-full font-roboto text-xl font-medium text-dark-hard md:text-[26px] pd-title-screen">
                {data?.title}
              </h1>
              <img
                className="w-full py-6"
                src={
                  data?.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                    : images.samplePostImage
                }
                alt={data?.title}
              />
              <h1>June 8, 2024</h1>
              <div className="pd-listen-icons">
                <span>Listen on:</span>
                <div className="pd-icons">
                  <AiFillYoutube />
                  <AiFillAmazonCircle />
                  <AiFillApple />
                </div>
              </div>
              <div className="w-full">
                <AudioPlayer />
              </div>
              <div>Reading Time: 7 minutes</div>
              <div className="pd-body-top">
                <span>what have we discussed with Dyanamicx</span>
                <span>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis?
                  </li>
                </span>
              </div>
              <div className="pd-youtube">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HRxARYNkOSo?si=Ovvlcm6B70dq7oav"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="pd-body-content">
                {!isLoading && !isError && (
                  <Editor content={data?.body} editable={false} />
                )}
              </div>
              <div className="pd-sponsers">
                <span>Please scroll down for Episode Sponsers, Resorces</span>
                <h3 style={{ fontWeight: "bold", paddingTop: "3%" }}>
                  EPISODE SPONSERS:
                </h3>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  voluptatem amet optio culpa nemo eum suscipit ad
                  necessitatibus, atque enim ex nam nulla! Debitis id ex
                  repellendus aliquid. Cupiditate, voluptas.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  possimus minima provident modi fugit. Tempora accusamus amet
                  quasi dolores quo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi non, maxime blanditiis totam nulla rerum possimus
                  doloribus eveniet similique. Reiciendis repudiandae harum cum
                  numquam alias error minus neque necessitatibus labore!
                </li>
              </div>
              <div className="pd-upcoming-events">
                <span>Upcoming Events: </span>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li style={{ paddingLeft: "10%" }}>
                    Little details about the event
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      )}
    </MainLayout>
  );
};

export default PodcastDetailPage;
