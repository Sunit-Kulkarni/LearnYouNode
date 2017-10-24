var fs = require('fs')
var file = process.argv[2]
numberOfNewLines = 0

fs.readFile(file, 'utf-8', function (err, contents) {
	if (err) {
		throw err
	}
	var newLineStrings = contents.split('\n')
	numberOfNewLines = newLineStrings.length - 1
	console.log(numberOfNewLines)
})