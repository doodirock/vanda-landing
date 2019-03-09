var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let bodys = req.body;
  console.log(bodys);
  res.send("Nothing here for you");
});

router.post("/", function(req, res) {
  let bodys = req.query;
  console.log(bodys);
  res.send("respond with a resource");
});

module.exports = router;
