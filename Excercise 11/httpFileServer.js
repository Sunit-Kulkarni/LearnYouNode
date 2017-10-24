var net = require('net')
var http = require('http')
var fs = require('fs')

const server = http.createServer( (request, response) => {
	response.writeHead(200, {
  		'Content-Type': 'text/plain' 
  	})

	document = fs.createReadStream(process.argv[3])
	document.pipe(response)
})

server.listen(Number(process.argv[2]))