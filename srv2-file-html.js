var express = require('express');
var app = express();
var path = require('path');

//static dir
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, Response) {
    Response.sendFile(path.join(__dirname + '/index.html'));
});

//Response with HTML markup
app.get('/about', (request, Response) => {
    Response.send('<h1>About page</h1>');
});

//redirecting to html page
app.get('/readme', (request, Response) => {
    Response.sendFile(path.join(__dirname + '/readme.html'));
});

//Response json obj
app.get('/json', (request, Response) => {
    Response.send({
        company: 'Hecton Support',
        country: 'Brazil',
        owner: 'Hecton Domingos',
        services: [
            'Network Security',
            'Kotlin Development',
            'Linux server administration'
        ]
    });
});

app.listen(5000, () => {
    console.log('Server up and running on port 5000')
});