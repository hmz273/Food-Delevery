const express = require("express");
const router = express.Router();

const { createRestau, updateRestau, removeRestauById, getRestauById, getAllRestaus } = require("./restau");
// const { adminAuth } = require("../middleware/auth");


router.route("/create").post( createRestau );
router.route("/:id").post( updateRestau );
router.route("/:id").delete( removeRestauById );
router.route("/:id").get( getRestauById );
router.route("/").get( getAllRestaus );

module.exports = router;