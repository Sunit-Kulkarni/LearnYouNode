var net = require('net')
var date = new Date()
var dateString = ""

function getDate() {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()
	if (day < 10) {
		day = "0" + day.toString()
	}

	var hours = date.getHours()
	var minutes = date.getMinutes()
	
	dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes
	return dateString
}

var today = getDate()

const server = net.createServer( (socket) => {
	socket.end(getDate() + "\n")
})

server.listen(Number(process.argv[2]))