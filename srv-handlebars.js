var express = require('express');
//Node express 
var app = express();
//File server path
var path = require('path');

//handlebars    https://www.npmjs.com/package/hbs
//const hbs = require('hbs');
const hbs = require('handlebars');


//setting hbs
app.set('view engine', 'hbs');

//static dir
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, Response) {
    Response.sendFile(path.join(__dirname + '/index.html'));
});

//Response with handlebar
app.get('/about', (request, Response) => {
    Response.render('about.hbs', {
        //Adding dinamic 
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
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

//Always end the server with app.listen
app.listen(5000, () => {
    console.log('Server up and running on port 5000')
});