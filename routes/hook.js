var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  var io = req.app.get("socketio");
  let bodys = req.query;
  console.log(bodys.p2);
  io.emit("sms", bodys.p2);
  res.send("Nothing here for you");
});

router.post("/", function(req, res, next) {
  var io = req.app.get("socketio");
  let bodys = req.query;
  console.log(bodys);
  io.emit("sms", "This is amazing");
  res.send("respond with a resource");
});

module.exports = router;
