const express = require('express');
const app = express();
const path = require('path');

const { PORT, MONGO_URL } = require('./config')

const connectToMongoDB = require('./connection');
connectToMongoDB(MONGO_URL);

const setupAndStartServer = () => { 
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    
    app.set('view engine', 'ejs');
    app.set('views', path.resolve('./views'));

    app.listen(PORT, () => {
        console.log(`Listening on server ${PORT}`);
    })
}

setupAndStartServer();