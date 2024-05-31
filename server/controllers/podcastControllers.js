const { uploadPicture } = require("../middleware/uploadPictureMiddleware");
const Podcast = require("../models/Podcast");
const { fileRemover } = require("../utils/fileRemover");
// const { v4: uuidv4 } = require("uuid");

const createPodcast = async (req, res, next) => {
  try {
    const generateSlug = (title) => {
      const timestamp = Date.now();
      let slug = title.toLowerCase().replace(/\s+/g, "-");
      slug = slug.replace(/[^\w-]+/g, "");
      slug = `${slug}-${timestamp}`;
      return slug;
    };
    const podcastTitle = "Sample Podcast";
    const podcast = new Podcast({
      title: podcastTitle,
      caption: "sample caption",
      // slug: uuidv4(),
      slug: generateSlug(podcastTitle),
      body: {
        type: "doc",
        content: [],
      },
      audio: "",
      photo: "",
      user: req.user._id,
    });

    const createdPodcast = await podcast.save();
    return res.json(createdPodcast);
  } catch (error) {
    next(error);
  }
};

const updatePodcast = async (req, res, next) => {
  try {
    const podcast = await Podcast.findOne({ slug: req.params.slug });

    if (!podcast) {
      const error = new Error("Podcast aws not found");
      next(error);
      return;
    }

    const upload = uploadPicture.single("podcastPicture");

    const handleUpdatePodcastData = async (data) => {
      const { title, caption, slug, body,audio, tags, categories } = JSON.parse(data);
      podcast.title = title || podcast.title;
      podcast.caption = caption || podcast.caption;
      podcast.slug = slug || podcast.slug;
      podcast.body = body || podcast.body;
      podcast.audio = audio || podcast.audio;
      podcast.tags = tags || podcast.tags;
      podcast.categories = categories || podcast.categories;
      const updatedPodcast = await podcast.save();
      return res.json(updatedPodcast);
    };

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occured when uploading " + err.message
        );
        next(error);
      } else {
        // every thing went well
        if (req.file) {
          let filename;
          filename = podcast.photo;
          if (filename) {
            fileRemover(filename);
          }
          podcast.photo = req.file.filename;
          handleUpdatePodcastData(req.body.document);
        } else {
          let filename;
          filename = podcast.photo;
          podcast.photo = "";
          fileRemover(filename);
          handleUpdatePodcastData(req.body.document);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const deletePodcast = async (req, res, next) => {
  try {
    const podcast = await Podcast.findOneAndDelete({ slug: req.params.slug });

    if (!podcast) {
      const error = new Error("Podcast was not found");
      return next(error);
    }

    fileRemover(podcast.photo);

    // await Comment.deleteMany({ podcast: podcast._id });

    return res.json({
      message: "Podcast is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getPodcast = async (req, res, next) => {
  try {
    const podcast = await Podcast.findOne({ slug: req.params.slug }).populate([
      {
        path: "user",
        select: ["avatar", "name"],
      },
      {
        path: "categories",
        select: ["title"],
      },
    ]);

    if (!podcast) {
      const error = new Error("Podcast was not found");
      return next(error);
    }

    return res.json(podcast);
  } catch (error) {
    next(error);
  }
};

const getAllPodcasts = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.title = { $regex: filter, $options: "i" };
    }
    let query = Podcast.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Podcast.find(where).countDocuments();
    const pages = Math.ceil(total / pageSize);

    res.header({
      "x-filter": filter,
      "x-totalcount": JSON.stringify(total),
      "x-currentpage": JSON.stringify(page),
      "x-pagesize": JSON.stringify(pageSize),
      "x-totalpagecount": JSON.stringify(pages),
    });

    if (page > pages) {
      return res.json([]);
    }

    const result = await query
      .skip(skip)
      .limit(pageSize)
      .populate([
        {
          path: "user",
          select: ["avatar", "name", "verified"],
        },
        {
          path: "categories",
          select: ["title"],
        },
      ])
      .sort({ updatedAt: "desc" });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPodcast, updatePodcast, deletePodcast, getPodcast, getAllPodcasts };
