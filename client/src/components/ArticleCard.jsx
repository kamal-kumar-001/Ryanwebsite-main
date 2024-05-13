import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { images, stables } from "../constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`relative rounded-xl  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} transition-transform duration-300 transform hover:scale-103`}
    >
      <div className="absolute cursor-pointer text-gray-700 hover:text-white left-[-9px] top-7 z-10 bg-white px-2 py-1 border-2 hover:bg-purple-500  border-purple-500 transition-transform duration-300">
        <div className="leading-[.75] px-2 ">
        <span className="text-base  font-semibold ">04</span><br/>
        <span className=" text-xs  font-semibold ">Apr</span>
        </div>
        {/* <span className="text-xl  font-semibold text-gray-700">{new Date(post.createdAt).getDate()}</span> */}
      </div>
      <Link to={`/blog/${post.slug}`}>
      <div className="relative overflow-hidden">
          <img
            src={post.photo ? stables.UPLOAD_FOLDER_BASE_URL + post.photo : images.samplePostImage}
            alt="title"
            className="w-full overflow-hidden rounded-t-xl object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        {/* <img
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.samplePostImage
          }
          alt="title"
          className="w-full rounded-t-xl object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        /> */}
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto text-center font-bold text-xl text-dark-soft hover:text-purple-500 md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <div className="h-[2px] mt-3 w-7 mx-auto  bg-slate-400" />

          {/* </div> */}
          <p className="text-dark-light text-center mt-3 text-sm md:text-lg">
            {post.caption.slice(0,100)}...
          </p>
        </Link>
        {/* <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                post.user.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                  : images.userImage
              }
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    post.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ArticleCard;
