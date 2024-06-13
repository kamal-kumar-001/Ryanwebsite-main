import { useState, useRef } from "react";
import {  useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images, stables } from "../../constants";
// import SuggestedPosts from "./container/SuggestedPosts";
import { useQuery } from "@tanstack/react-query";
import {  getSinglePost } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import Editor from "../../components/editor/Editor";
import ShareModal from "../../components/ShareModal";
import PrintButton from "../../components/PrintButton";
import "./articledetail.css";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const contentRef = useRef(null);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
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
        <div className="article-detail-container">
          <section ref={contentRef}>
            <article>
              <BreadCrumbs data={breadCrumbsData} />
              <img
                className="article-image"
                src={
                  data?.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                    : images.samplePostImage
                }
                alt={data?.title}
              />
              
              <div className="highlight-section">
            <img
              src="https://www.christineavanti.com/wp-content/uploads/2024/01/Christine-Green-Smoothie-e1705092833846-500x500.jpg"
              alt="photo"
            />
            <h4>Green Smoothie</h4>
            <p>
              Remember that green smoothie I couldn&apost stop raving about? 🌿 Well,
              after tweaking a Goop newsletter gem I&aposve nailed the perfect
              recipe! Loaded with antioxidants, healthy fats, and a whopping 22
              grams of fiber, it&aposs a game-changer for digestion and keeping you
              full for hours. Check out my tutorial video for the recipe and get
              ready to blend your way to deliciousness! Best of all, it has 22
              grams of fiber…which is amazing for digestion!
            </p>
            <div className="buttons">
              <ShareModal />
              <PrintButton contentRef={contentRef} />
            </div>
          </div>
          <h1 className="pd-title">{data?.title}</h1>
              
              <div className="editor-container">
                {!isLoading && !isError && (
                  <Editor content={data?.body} editable={false} />
                )}
              </div>
            </article>
          </section>


        </div>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
