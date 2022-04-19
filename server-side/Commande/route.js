const express = require("express");
const router = express.Router();

const { createCommande, updateCommande, removeCommandeById, getCommandeById, getAllCommande, cancelReservation, progressReservation } = require("./commande");
// const { userAuth, adminAuth } = require("../middleware/auth");


router.route("/create").post( createCommande);
router.route("/update/:id").post( updateCommande);
router.route("/:id").delete( removeCommandeById);
router.route("/:id").get( getCommandeById);
router.route("/").get(getAllCommande);
router.route("/:id/cancel").post( cancelReservation);
router.route("/:id/progress").post( progressReservation);

module.exports = router;