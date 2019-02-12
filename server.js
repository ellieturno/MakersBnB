//server.js

// const db = require('./app/model/DatabaseConnection')
const db = require('./models/index')
const Listing = require('./models/index')

const express = require('express'),
    server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
    response.send('Home page');
});

server.get('/about',(request,response)=>{
    response.send('About page');
});

//Express error handling middleware
server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

//Binding to a port
server.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});


Listing.create(
    {
        name: 'house',
        description: 'description',
        price: 10
    }
)


