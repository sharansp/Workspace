

module.exports = function(expo){
	console.log(" Power Up - Closure");
	return function(num){
		return Math.pow(num,expo)
	}
}

