const { Schema, model } = require("mongoose");

const RecommendSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    redirectLink: { type: String, required: false,},
    body: { type: Object, required: true },
    photo: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "RecommendCategories" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const Recommend = model("Recommend", RecommendSchema);
module.exports = Recommend;
