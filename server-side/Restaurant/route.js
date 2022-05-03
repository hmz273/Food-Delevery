const express = require("express");
const router = express.Router();

const { createRestau, updateRestau, removeRestauById, getRestauById, getAllRestaus } = require("./restau");
// const { a } = require("../middleware/auth");
const upload = require("../middleware/multer");



router.route("/new").post( upload.array("images", 6), createRestau );
router.route("/:id").put( updateRestau );
router.route("/:id").delete( removeRestauById );
router.route("/:id").get( getRestauById );
router.route("/").get( getAllRestaus );

module.exports = router;