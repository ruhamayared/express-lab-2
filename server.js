const { request, response } = require('express')
const express = require('express')
const app = express()

const port = 3000

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}! It's so great to see you!`)
})


app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) / parseInt(100)) + ".")
})


app.listen(port, () => {
	console.log('Express is listening on port: ', port)
})