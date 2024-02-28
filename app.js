require('dotenv').config();
const express = require('express');
const dbConnection = require('./utils/dbConnect');
const app = express();
const urlShortnerRouter = require('./routes/urlShortner');
const ejs = require('ejs');
const path = require('path');
const staticRouter = require('./routes/staticRoute');

// Database Connection 
dbConnection(process.env.MONGO_URL);

// Middlewares
app.set('view engine', ejs);
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Routes
app.use("/", staticRouter);
app.use("/url", urlShortnerRouter);

// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});