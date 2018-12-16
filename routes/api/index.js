const router = require("express").Router();
const contentRoutes = require("./contents");

//Salon Content routes
router.use("/contents", contentRoutes);

module.exports = router;