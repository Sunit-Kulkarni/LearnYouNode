var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])
//console.log(buffer)

stringBuffer = buffer.toString()
//console.log(buffer)

newLineStrings = stringBuffer.split('\n')
//console.log(newLineStrings)

numberOfNewLines = newLineStrings.length - 1

console.log(numberOfNewLines)