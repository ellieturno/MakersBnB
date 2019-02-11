//server.js
const express = require('express'),
    server = express();

const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const Listing = require("./app/model/Listing").Listing; // import {Listing} from "./app/model/Listing";

require("reflect-metadata");

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

typeorm.createConnection()
    .then(function (connection) {


    let listing0 = new Listing();
    listing0.name = "Test Listing0";
    listing0.description = "It's a pretty house0";
    listing0.price = 10;

    return connection
        .manager
        .save([listing0])
        .then(() => {

            let listing = new Listing();
            listing.name = "Test Listing";
            listing.description = "It's a pretty house";
            listing.price = 10;

            let listingRepository = connection.getRepository(Listing);
            listingRepository.save(listing)
                .then(function(savedListing) {
                    console.log("Listing has been saved: ", savedListing);
                    console.log("Now lets load all posts: ");
                    return listingRepository.find();
                })
                .then(function(allListings) {
                    console.log("All listings: ", allListings);
                });
        });

}).catch(function(error) {
    console.log("Error: ", error);
});
