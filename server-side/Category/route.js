const express = require("express");
const router = express.Router();

const { createCategory, updateCategory, removeCategoryById, getCategoryById } = require("./category");
const { adminAuth } = require("../middleware/auth");


router.route("/create").post(adminAuth, createCategory);
router.route("/update/:id").post(adminAuth, updateCategory);
router.route("/:id").delete(adminAuth, removeCategoryById);
router.route("/:id").get(adminAuth, getCategoryById);

module.exports = router;