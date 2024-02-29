require('dotenv').config();
const express = require('express');
const dbConnection = require('./utils/dbConnect');
const app = express();
const urlShortnerRouter = require('./routes/urlShortner');
const ejs = require('ejs');
const path = require('path');
const staticRouter = require('./routes/staticRoute');
const { checkAuthenticatedUser, restrictTo } = require('./middlewares/Auth');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoute');

// Database Connection 
dbConnection(process.env.MONGO_URL);

// Middlewares
app.use(cookieParser());
app.set('view engine', ejs);
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(checkAuthenticatedUser);

// Routes
app.use('/user', userRouter) // for every non-loggedIn 
app.use("/", restrictTo(["NORMAL", "ADMIN"]), staticRouter); // for loggedIn users , show URLs with specific USER
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlShortnerRouter); // for loggedIn users 

// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});