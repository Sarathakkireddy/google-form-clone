const express = require("express");
const register = require("../controllers/register");
const login = require("../controllers/login");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;
