var alertStar = require("./lib/alertStars");
var _ = require("underscore");
var $ = require("jquery");


window.onload = function(){

	var msg = ["sharan", "patil", "Gouda","yest"];
	//_.each(msg,alertStar);
	_.each(msg,function(msgVal){
		$("body").append($("<p>").text(msg));
	});
	
	alertStar(' Welcome ');
}
