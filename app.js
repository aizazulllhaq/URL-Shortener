require('dotenv').config();
const express = require('express');
const dbConnection = require('./utils/dbConnect');
const app = express();
const urlShortnerRouter = require('./routes/urlShortner');


// Database Connection 
dbConnection(process.env.MONGO_URL);

// Middlewares
app.use(express.urlencoded())
app.use(express.json());

// Routes
app.use("/",urlShortnerRouter)

// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});