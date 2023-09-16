const express = require("express");
const register = require("../controllers/register");
const login = require("../controllers/login");
const getMyDetails = require("../controllers/accountcontroller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/my-details", protect, getMyDetails);

module.exports = router;
