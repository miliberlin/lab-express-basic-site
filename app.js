const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/views/home-page.html')
})
app.get('/about', (request,response) => {
    response.sendFile(__dirname + '/views/about-page.html')
})
app.get('/gallery', (request,response) => {
    response.sendFile(__dirname + '/views/gallery-page.html')
})
app.get('/works', (request,response) => {
    response.sendFile(__dirname + '/views/works-page.html')
})

app.listen(3000, () => 
    console.log('Server listening')
)