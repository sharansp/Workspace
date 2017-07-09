console.log("index.js");
var powerUp  = require("./lib/powerUp");
var randomList = [1,2,3,4,5,6,7];
var pow10 = powerUp(10);

var transformed = randomList.map(pow10);
console.log(transformed);

