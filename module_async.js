console.log("module explained Async version");

var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
var http = require("http");

 fs.readFile("./profile/profile.yml","utf-8", function(err,file){
	if(err){
		console.error(err);
		return;
	} 
	
	var profile = yaml.safeLoad(file);
	var filePath = path.join(".","profile","profile_write_async.yml");
	
	fs.writeFile(filePath,profile.first_name,"utf-8",
	function(err){
		if(err){
			console.error(err);
		return;
		}
		console.log("Written to File");
	})
	
});


