const express = require("express");
const router = express.Router();
const {
  createRecommendCategory,
  deleteRecommendCategory,
  getAllRecommendCategories,
  updateRecommendCategory,
  getSingleCategory,
} = require("../controllers/recommendCategoriesController");
const { adminGuard, authGuard } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(authGuard, adminGuard, createRecommendCategory)
  .get(getAllRecommendCategories);

router
  .route("/:recommendCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminGuard, updateRecommendCategory)
  .delete(authGuard, adminGuard, deleteRecommendCategory);

module.exports = router;
