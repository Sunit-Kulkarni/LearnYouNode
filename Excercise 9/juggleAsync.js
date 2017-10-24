var bl = require('bl')
var http = require('http')

var results = []
var count = 0

function printResults() {
	results.forEach((element) => {
		console.log(element)
	})
}

function httpGet(urlIndex) {
	http.get(process.argv[2 + urlIndex], (response) => {
		response.pipe(bl( (err, data) => {
		if (err) {
			return console.error(err)
		}

		results[urlIndex] = data.toString()
		count++

		if (count == 3) {
			printResults()
		}

		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}