
var alertStar = require("./lib/alertStars");
var _ = require("undercsore");

window.onload = function(){

	var msg = ["sharan", "patil", "Gouda"]
	_.each(msg,alertStar);
	//alertStar(' Welcome ');
}
