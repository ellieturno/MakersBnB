//server.js
const express = require('express');
const server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
    res.render('pages/signup');
});

server.get('/feed',(request,response)=>{
    response.render('pages/feed');
});

server.get('/listing', (request, response)=>{
    response.render('pages/listing');

server.get('/spaces',(request,response)=>{
    res.render('pages/spaces');
});

//Express error handling middleware
server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.render('pages/error');
});

//Binding to a port
server.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});
