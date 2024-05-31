const express = require("express");
const router = express.Router();
const {
  createPodcast,
  deletePodcast,
  getAllPodcasts,
  getPodcast,
  updatePodcast,
} = require("../controllers/podcastControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/").post(authGuard, adminGuard, createPodcast).get(getAllPodcasts);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePodcast)
  .delete(authGuard, adminGuard, deletePodcast)
  .get(getPodcast);

module.exports = router;
