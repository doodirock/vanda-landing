var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let bodys = req.body;
  console.log(bodys);
  res.send("Nothing here for you");
});

router.post("/", function(req, res) {
  var io = req.app.get("socketio");
  let bodys = req.query;
  console.log(bodys);
  io.emit("sms", "This is amazing");
  res.send("respond with a resource");
});

module.exports = router;
