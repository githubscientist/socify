const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const path = require('path');

const app = express();

// Serve static files from the React frontend app 
app.use(express.static(path.join(__dirname, '../client/build')));

// Anything that doesn't match the API routes should serve the React app 
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../client/build', 'index.html')); });

// middlewares
// parse the cookies
app.use(cookieParser());

// parse the incoming request with JSON payload
app.use(express.json());

// setup the routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/posts', commentRouter);

// export the app
module.exports = app;