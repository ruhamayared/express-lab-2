const express = require('express')
const app = express()

const port = 3000


app.get('/:number_of_bottles', (request, response) => {
    let bottleLeft = parseInt(request.params.number_of_bottles) - parseInt(1)

    response.send(`${bottleLeft} bottles of beer on the wall! <br/> <a href="http://localhost:3000/${bottleLeft}" >Take one down, pass it around.</a>`)


})


app.listen(port, () => {
	console.log('Express is listening on port: ', port)
});