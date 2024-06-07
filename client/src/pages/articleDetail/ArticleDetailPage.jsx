import {  useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
// import CommentsContainer from "../../components/comments/CommentsContainer";
import MainLayout from "../../components/MainLayout";
import { images, stables } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getSinglePost } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
// import { useSelector } from "react-redux";
// import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/editor/Editor";
import ShareModal from "../../components/ShareModal";
import PrintButton from "../../components/PrintButton";
// import Rating from "../../components/Rating";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const contentRef = useRef(null);
  // const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  // const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      // setBody(parseJsonToHtml(data?.body));
    },
  });

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // const [rating, setRating] = useState(0);

  // const handleRating = (value) => {
  //   setRating(value);
  // };

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <div className="">
          <section ref={contentRef} className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
              <BreadCrumbs data={breadCrumbsData} />
              <img
                className="rounded-xl w-full"
                src={
                  data?.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                    : images.samplePostImage
                }
                alt={data?.title}
              />
              <div className="mt-4 flex gap-2">
                {data?.categories.map((category, index) => (
                  <Link key={index}
                    to={`/blog?category=${category.name}`}
                    className="text-primary text-sm font-roboto inline-block md:text-base"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                {data?.title}
              </h1>
              <div className="w-full">
                {!isLoading && !isError && (
                  <Editor content={data?.body} editable={false} />
                )}
              </div>
              {/* <CommentsContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
            /> */}
            </article>

          </section>
          <div className="mt-7 p-10 container mx-auto max-w-5xl rounded bg-purple-500 "> 
          <div className=" text-center flex flex-col items-center ">
            <img src="https://www.christineavanti.com/wp-content/uploads/2024/01/Christine-Green-Smoothie-e1705092833846-500x500.jpg" alt="photo" 
            className=" w-32 mt-[-100px] h-32 border-white  rounded-xl border-8" />
            <h4 className="text-3xl">Green Smoothie</h4>
            <p className="my-5">
            Remember that green smoothie I couldnt stop raving about? 🌿 Well, after tweaking a Goop newsletter gem Ive nailed the perfect recipe! Loaded with antioxidants healthy fats and a whopping 22 grams of fiber, its a game-changer for digestion and keeping you full for hours. Check out my tutorial video for the recipe and get ready to blend your way to deliciousness! Best of all it has 22 grams of fiber…which is amazing for digestion!
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
              <ShareModal />
              <PrintButton contentRef={contentRef} />
              {/* <Rating totalStars={5} initialRating={rating} onRate={handleRating} /> */}
          </div>
            </div>
          <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <SuggestedPosts
              header="Latest Article"
              posts={postsData?.data.slice(0, 3)} // Limiting to the first 3 posts
              tags={data?.tags}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <SuggestedPosts
              header="Similar Article"
              posts={postsData?.data.slice(0, 3)} // Limiting to the first 3 posts
              tags={data?.tags}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            
          </section>
        </div>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
