const { request, response } = require('express')
const express = require('express')
const app = express()

const port = 3000

//Greeting
app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}! It's so great to see you!`)
})

//Tip calculator
app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) / parseInt(100)) + ".")
})

//Magic 8 Ball
const randomResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const randomItem = randomResponse[Math.floor(Math.random()*randomResponse.length)]


app.get('/magic/:phrase/', (request, response) => {
    // response.send(`${request.params.phrase}` + `<h1>${randomResponse[request.params.indexOfrandomResponseArray]}</h1>`)
    response.send(`${request.params.phrase}` + `<h1>${randomItem}</h1>`)
})




app.listen(port, () => {
	console.log('Express is listening on port: ', port)
})