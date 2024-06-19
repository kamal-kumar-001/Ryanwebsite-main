const express = require("express");
const router = express.Router();
const {
  createRecommend,
  deleteRecommend,
  getAllRecommends,
  getRecommend,
  updateRecommend,
} = require("../controllers/recommendControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/").post(authGuard, adminGuard, createRecommend).get(getAllRecommends);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updateRecommend)
  .delete(authGuard, adminGuard, deleteRecommend)
  .get(getRecommend);

module.exports = router;
