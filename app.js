const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/views/home-page.html')
})

app.listen(3000, () => 
    console.log('Server listening')
)