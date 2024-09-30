const express = require('express');
const router = express.Router();
const { storeUrl, getUrl, getQRCode } = require("../controllers/twiddle_controller");

router.post("/crunch", storeUrl);
router.get("/reveal/:shortUrl", getUrl);
router.get("/qryptic", getQRCode);

module.exports = router;
