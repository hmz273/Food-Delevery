const express = require("express");
const router = express.Router();

const { createRepa, updateRepa, removeRepaById, getRepaById, getAllRepas } = require("./repa");
const { adminAuth } = require("../middleware/auth");


router.route("/create").post(adminAuth, createRepa);
router.route("/update/:id").post(adminAuth, updateRepa);
router.route("/:id").delete(adminAuth, removeRepaById);
router.route("/:id").get(adminAuth, getRepaById);
router.route("/").get(adminAuth, getAllRepas);

module.exports = router;