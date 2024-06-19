const RecommendCategories = require("../models/RecommendCategories");
const Recommend = require("../models/Recommend");

const createRecommendCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const recommendCategory = await RecommendCategories.findOne({ title });

    if (recommendCategory) {
      const error = new Error("Category is already created!");
      return next(error);
    }

    const newRecommendCategory = new RecommendCategories({
      title,
    });

    const savedRecommendCategory = await newRecommendCategory.save();

    return res.status(201).json(savedRecommendCategory);
  } catch (error) {
    next(error);
  }
};

const getSingleCategory = async (req, res, next) => {
  try {
    const recommendCategory = await RecommendCategories.findById(
      req.params.recommendCategoryId
    );

    if (!recommendCategory) {
      const error = new Error("Category was not found!");
      return next(error);
    }

    return res.json(recommendCategory);
  } catch (error) {
    next(error);
  }
};

const getAllRecommendCategories = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.title = { $regex: filter, $options: "i" };
    }
    let query = RecommendCategories.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await RecommendCategories.find(where).countDocuments();
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
      .sort({ updatedAt: "desc" });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateRecommendCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    const recommendCategory = await RecommendCategories.findByIdAndUpdate(
      req.params.recommendCategoryId,
      {
        title,
      },
      {
        new: true,
      }
    );

    if (!recommendCategory) {
      const error = new Error("Category was not found");
      return next(error);
    }

    return res.json(recommendCategory);
  } catch (error) {
    next(error);
  }
};

const deleteRecommendCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.recommendCategoryId;

    await Recommend.updateMany(
      { categories: { $in: [categoryId] } },
      { $pull: { categories: categoryId } }
    );

    await RecommendCategories.deleteOne({ _id: categoryId });

    res.send({
      message: "Recommend category is successfully deleted!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRecommendCategory,
  getAllRecommendCategories,
  updateRecommendCategory,
  deleteRecommendCategory,
  getSingleCategory,
};
