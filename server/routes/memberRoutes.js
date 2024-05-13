const express = require("express");
const router = express.Router();
const {
  registerMember,
  getAllMembers,
  deleteMember,
} = require("../controllers/memberControllers");

const { adminGuard, authGuard } = require("../middleware/authMiddleware");

router.post("/register", registerMember);
router.get("/", authGuard, adminGuard, getAllMembers);
router.delete("/:memberId", authGuard, adminGuard, deleteMember);
// router.delete("/:memberId", authGuard, adminGuard, deleteMember);

module.exports = router;
