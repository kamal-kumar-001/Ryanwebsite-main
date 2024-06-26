import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { getSinglePodcast, updatePodcast } from "../../../../services/index/podcasts";
import { Link, useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../articleDetail/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Editor from "../../../../components/editor/Editor";
import MultiSelectTagDropdown from "../../components/select-dropdown/MultiSelectTagDropdown";
import { getAllCategories } from "../../../../services/index/postCategories";
import {
  categoryToOption,
  filterCategories,
} from "../../../../utils/multiSelectTagUtils";

const promiseOptions = async (inputValue) => {
  const { data: categoriesData } = await getAllCategories();
  return filterCategories(inputValue, categoriesData);
};

const EditPodcast = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [audio, setAudio] = useState("");
  const [youtubeAudio, setYoutubeAudio] = useState("");
  const [amazonAudio, setAmazonAudio] = useState("");
  const [appleAudio, setAppleAudio] = useState("");
  const [spotifyAudio, setSpotifyAudio] = useState("");
  const [body, setBody] = useState(null);
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState(null);
  const [podcastSlug, setPodcastSlug] = useState(slug);
  const [caption, setCaption] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePodcast({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setInitialPhoto(data?.photo);
      setCategories(data.categories.map((item) => item._id));
      setTitle(data.title);
      setTags(data.tags);
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: mutateUpdatePodcastDetail,
    isLoading: isLoadingUpdatePodcastDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updatePodcast({
        updatedData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Podcast is updated");
      navigate(`/admin/podcasts/manage/edit/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleUpdatePodcast = async () => {
    let updatedData = new FormData();

    if (!initialPhoto && photo) {
      updatedData.append("podcastPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );

      updatedData.append("podcastPicture", picture);
    }

    updatedData.append(
      "document",
      JSON.stringify({ body,audio, youtubeaudio:youtubeAudio, amazonaudio: amazonAudio, appleaudio: appleAudio, spotifyaudio: spotifyAudio, categories, title, tags, slug: podcastSlug, caption })
    );
    mutateUpdatePodcastDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Podcast picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  let isPodcastDataLoaded = !isLoading && !isError;

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the podcast detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="podcastPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : initialPhoto ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : (
                <div className="w-full min-h-[200px] bg-blue-50/50 flex justify-center items-center">
                  <HiOutlineCamera className="w-7 h-auto text-primary" />
                </div>
              )}
            </label>
            <input
              type="file"
              className="sr-only"
              id="podcastPicture"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5"
            >
              Delete Image
            </button>
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category,index) => (
                <Link 
                key={index}
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="title">
                <span className="d-label-text">Title</span>
              </label>
              <input
                id="title"
                value={title}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="caption">
                <span className="d-label-text">caption</span>
              </label>
              <input
                id="caption"
                value={caption}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setCaption(e.target.value)}
                placeholder="caption"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="slug">
                <span className="d-label-text">slug</span>
              </label>
              <input
                id="slug"
                value={podcastSlug}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setPodcastSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())
                }
                placeholder="podcast slug"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="audio">
                <span className="d-label-text">Audio</span>
              </label>
              <input
                id="audio"
                value={audio}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setAudio(e.target.value)
                }
                placeholder="podcast audio link"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="youtubeaudio">
                <span className="d-label-text">Youtube Link</span>
              </label>
              <input
                id="youtubeaudio"
                value={youtubeAudio}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setYoutubeAudio(e.target.value)
                }
                placeholder="podcast Youtube link"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="amazonaudio">
                <span className="d-label-text">Amazon Audio</span>
              </label>
              <input
                id="amazonaudio"
                value={amazonAudio}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setAmazonAudio(e.target.value)
                }
                placeholder="podcast Amazon audio link"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="appleaudio">
                <span className="d-label-text">Apple Audio</span>
              </label>
              <input
                id="appleaudio"
                value={appleAudio}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setAppleAudio(e.target.value)
                }
                placeholder="podcast Apple audio link"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="spotifyaudio">
                <span className="d-label-text">Spotify Audio</span>
              </label>
              <input
                id="spotifyaudio"
                value={spotifyAudio}
                className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setSpotifyAudio(e.target.value)
                }
                placeholder="podcast Spotify audio link"
              />
            </div>
            <div className="mb-5 mt-2">
              <label className="d-label">
                <span className="d-label-text">categories</span>
              </label>
              {isPodcastDataLoaded && (
                <MultiSelectTagDropdown
                  loadOptions={promiseOptions}
                  defaultValue={data.categories.map(categoryToOption)}
                  onChange={(newValue) =>
                    setCategories(newValue.map((item) => item.value))
                  }
                />
              )}
            </div>
            <div className="mb-5 mt-2">
              <label className="d-label">
                <span className="d-label-text">tags</span>
              </label>
              {isPodcastDataLoaded && (
                <CreatableSelect
                  defaultValue={data.tags.map((tag) => ({
                    value: tag,
                    label: tag,
                  }))}
                  isMulti
                  onChange={(newValue) =>
                    setTags(newValue.map((item) => item.value))
                  }
                  className="relative z-20"
                />
              )}
            </div>
            <div className="w-full">
              {isPodcastDataLoaded && (
                <Editor
                  content={data?.body}
                  editable={true}
                  onDataChange={(data) => {
                    setBody(data);
                  }}
                />
              )}
            </div>
            <button
              disabled={isLoadingUpdatePodcastDetail}
              type="button"
              onClick={handleUpdatePodcast}
              className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Update Podcast
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPodcast;
