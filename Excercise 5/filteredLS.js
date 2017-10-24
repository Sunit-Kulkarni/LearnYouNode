var fs = require('fs')
var pathName = process.argv[2]
var extension = "." + process.argv[3]
var path = require('path')

fs.readdir(pathName, function (err, files) {
	if (err) {
		throw err
	}

	files.forEach( function(file) {
		if (path.extname(file) === extension) {
			console.log(file)
		}
	})
})