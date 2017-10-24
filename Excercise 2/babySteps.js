var userInput = process.argv
//console.log(userInput)

stringNumberArray = userInput.slice(2, userInput.length)

sum = 0
stringNumberArray.forEach(function(element) {
	sum += Number(element)
})

console.log(sum)