const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./routes/index')

const { PORT, MONGO_URL } = require('./config/config')

const connectToMongoDB = require('./connection');
connectToMongoDB(MONGO_URL);

const setupAndStartServer = () => { 
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }));

    app.use('/', apiRoutes);
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    app.listen(PORT, () => {
        console.log(`Listening on server ${PORT}`);
    })
}

setupAndStartServer();