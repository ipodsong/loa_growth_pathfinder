const express = require("express");
const {getUserInfoFromLoaSite} = require("../Utils/parseUserInfo.js")
const router = express.Router();

router.get("/:char_id", async(req, res) => {
    const result = await getUserInfoFromLoaSite(req.params.char_id)
    return res.json(result)
})

module.exports = router;
