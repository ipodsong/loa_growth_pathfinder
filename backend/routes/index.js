const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.json({server_connection:"connected"});
});

module.exports = router;
