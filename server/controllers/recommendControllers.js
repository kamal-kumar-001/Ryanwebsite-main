const { uploadPicture } = require("../middleware/uploadPictureMiddleware");
const Recommend = require("../models/Recommend");
const { fileRemover } = require("../utils/fileRemover");
// const { v4: uuidv4 } = require("uuid");

const createRecommend = async (req, res, next) => {
  try {
    const generateSlug = (title) => {
      const timestamp = Date.now();
      let slug = title.toLowerCase().replace(/\s+/g, "-");
      slug = slug.replace(/[^\w-]+/g, "");
      slug = `${slug}-${timestamp}`;
      return slug;
    };
    const recommendTitle = "Sample Recommendation";
    const recommend = new Recommend({
      title: recommendTitle,
      caption: "sample caption",
      // slug: uuidv4(),
      slug: generateSlug(recommendTitle),
      body: {
        type: "doc",
        content: [],
      },
      photo: "",
      redirectLink: "",
      user: req.user._id,
    });

    const createdRecommend = await recommend.save();
    return res.json(createdRecommend);
  } catch (error) {
    next(error);
  }
};

const updateRecommend = async (req, res, next) => {
  try {
    const recommend = await Recommend.findOne({ slug: req.params.slug });

    if (!recommend) {
      const error = new Error("Recommendation aws not found");
      next(error);
      return;
    }

    const upload = uploadPicture.single("recommendPicture");

    const handleUpdateRecommendData = async (data) => {
      const { title, caption, slug, redirectLink, body, tags, categories } = JSON.parse(data);
      recommend.title = title || recommend.title;
      recommend.caption = caption || recommend.caption;
      recommend.slug = slug || recommend.slug;
      recommend.redirectLink = redirectLink || recommend.redirectLink;
      recommend.body = body || recommend.body;
      recommend.tags = tags || recommend.tags;
      recommend.categories = categories || recommend.categories;
      const updatedRecommend = await recommend.save();
      return res.json(updatedRecommend);
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
          filename = recommend.photo;
          if (filename) {
            fileRemover(filename);
          }
          recommend.photo = req.file.filename;
          handleUpdateRecommendData(req.body.document);
        } else {
          let filename;
          filename = recommend.photo;
          recommend.photo = "";
          fileRemover(filename);
          handleUpdateRecommendData(req.body.document);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteRecommend = async (req, res, next) => {
  try {
    const recommend = await Recommend.findOneAndDelete({ slug: req.params.slug });

    if (!recommend) {
      const error = new Error("Recommend was not found");
      return next(error);
    }

    fileRemover(recommend.photo);

    return res.json({
      message: "Recommend is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getRecommend = async (req, res, next) => {
  try {
    const recommend = await Recommend.findOne({ slug: req.params.slug }).populate([
      {
        path: "user",
        select: ["avatar", "name"],
      },
      {
        path: "categories",
        select: ["title"],
      },
    ]);

    if (!recommend) {
      const error = new Error("Recommend was not found");
      return next(error);
    }

    return res.json(recommend);
  } catch (error) {
    next(error);
  }
};

const getAllRecommends = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.title = { $regex: filter, $options: "i" };
    }
    let query = Recommend.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Recommend.find(where).countDocuments();
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

module.exports = { createRecommend, updateRecommend, deleteRecommend, getRecommend, getAllRecommends };

