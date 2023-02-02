const express = require("express");
const router = express.Router();
const {
  getAllHospital,
  createHostpital,
  getOneHospital,
  updateHostpital,
  deleteHostpital,
} = require("../controller/hospitals.js");

router.route("/").get(getAllHospital).post(createHostpital);
router
  .route("/:id")
  .get(getOneHospital)
  .put(updateHostpital)
  .delete(deleteHostpital);

module.exports = router;
