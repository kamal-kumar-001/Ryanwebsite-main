// "use Client"
import React from "react";
import SocialShareButtons from "./SocialShareButtons";
import { FaShare } from "react-icons/fa";
export default function ShareModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-6 py-2.5 flex items-center gap-2 rounded-lg bg-primary
        text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaShare />
        <span>
        Share
        </span>
          
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-xl font-semibold">
                    Share 
                  </h5>
                  <button
                    className="p-1 mt-[-7px] bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <h5 className="bg-transparent text-black  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </h5>
                  </button>
                </div>
                {/*body*/}
                <div className="p-5">
                <SocialShareButtons
                // url={encodeURI(window.location.href)}
                // title={encodeURIComponent(data?.title)}
              />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}