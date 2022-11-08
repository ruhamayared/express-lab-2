const express = require('express')
const app = express()

const port = 3001

app.get('/', (request, response) => {
    response.send(`99 bottles of beer on the wall! <br/> <a href="http://localhost:${port}/99" >Take one down, pass it around.</a>`)
})

app.get('/:number_of_bottles', (request, response) => {
    let bottlesLeft = parseInt(request.params.number_of_bottles) - parseInt(1)

    if(bottlesLeft > 0){
        response.send(`${bottlesLeft} bottles of beer on the wall! <br/> <a href="http://localhost:${port}/${bottlesLeft}" >Take one down, pass it around.</a>`)
    }else {
        response.send(`${bottlesLeft} bottles of beer on the wall! <br/> <a href="http://localhost:${port}/" >Take one down, pass it around.</a>`)
    }
})


app.listen(port, () => {
	console.log('Express is listening on port: ', port)
});