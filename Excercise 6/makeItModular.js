var pathName = process.argv[2]
var extension = "." + process.argv[3]
var myModule = require('./theModule')
var path = require('path')

function printFiles(file) {
	if (path.extname(file) === extension) {
		console.log(file)
	}
}

myModule(pathName, extension, printFiles)