console.log("module explained sync version");

var fs = require("fs");
var yaml = require("js-yaml");
var path = require("path");
var http = require("http");

var profile = yaml.safeLoad(fs.readFileSync("./profile/profile.yml","utf-8"));

fs.writeFileSync(path.join(".","profile","profile_write.yml"),profile.first_name,"utf-8");


//fs.writeFileSync("./profile/profile_write.yml",profile.first_name,"utf-8");

console.log(profile);