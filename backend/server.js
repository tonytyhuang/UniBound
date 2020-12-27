const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// setup for express

const app = express();

// choose between local and 
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})

// setup mongoose

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateindex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// set up routes

const formsRouter = require('./routes/forms');
app.use('/forms', formsRouter);
const userRouter = require('./routes/userRouter')
app.use('/about', userRouter);
