var fs = require('fs')



module.exports = function (directoryName, extension, callback) {
	
	fs.readdir(directoryName, function (err, files) {

		if (err) {
			return callback(err)
		}
		//console.log(files)
		files.forEach(function (element) {
			//console.log(element)
			callback(element)
		})
		
	})
}


