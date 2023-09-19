const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getForms,
  updateform,
} = require("../controllers/formcontroller");

const router = express.Router();

router.get("/formdets", protect, getForms);
router.patch("/form", protect, updateform);
router.get("/viewform",);

module.exports = router;