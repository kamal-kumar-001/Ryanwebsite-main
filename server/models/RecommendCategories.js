const { Schema, model } = require("mongoose");

const RecommendCategoriesSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const RecommendCategories = model("RecommendCategories", RecommendCategoriesSchema);
module.exports = RecommendCategories;
