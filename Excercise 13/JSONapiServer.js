var http = require('http')
var url = require('url')

function parseTime(time) { //if regular time api call
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	} 
}

function unixTime(time) { //if unix time api call
	return {unixtime: time.getTime()}
}

const server = http.createServer( (request, response) => {

	const parsedURL = url.parse(request.url, true)
	const date = new Date(parsedURL.query.iso) //passing iso formate of date in
	let result

	if (/^\/api\/parsetime/.test(request.url)) {
		result = parseTime(date)
	} else if (/^\/api\/unixtime/.test(request.url)) {
		result = unixTime(date)
	}

	response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
})

server.listen(Number(process.argv[2]))