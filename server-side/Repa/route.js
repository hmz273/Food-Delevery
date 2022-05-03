const express = require("express");
const router = express.Router();

const { createRepa, updateRepa, removeRepaById, getRepaById, getAllRepas } = require("./repa");
const { adminAuth } = require("../middleware/auth");
const upload = require("../middleware/multer");



router.route("/new").post(adminAuth, upload.array("images", 6), createRepa);
router.route("/update/:id").post(adminAuth, updateRepa);
router.route("/:id").delete(adminAuth, removeRepaById);
router.route("/:id").get(adminAuth, getRepaById);
router.route("/").get(adminAuth, getAllRepas);

module.exports = router;