const express = require("express");
const AirplaneRoutes = require("./airplane-routes");


const router = express.Router();

router.use('/airplanes', AirplaneRoutes);


router.get("/info", (req, res) => {
    res.json({ message: "API v1 info route is working!" });
});


module.exports = router;
