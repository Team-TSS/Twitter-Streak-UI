var http = require('http')
var fs = require('fs')

const PORT = 8081

fs.readFile('src/index.html', function (error, html) {
	if (error) throw error
	http.createServer(function (request, response) {
		response.writeHeader(200, { 'Content-Type': 'text/html' })
		response.write(html)
		response.end()
	}).listen(PORT)
})

console.log(`Server Running on http://localhost:${PORT}`)
