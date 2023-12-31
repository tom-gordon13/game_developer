const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors')

require('dotenv').config();
// Connect to db after the .env above
require('./config/database')

const app = express();
app.use(cookieParser());

app.use(logger('dev'));

// Process data in body of request if
// content-type: 'application/json'
app.use(express.json());
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware that adds the user object to req.user
app.use(require('./config/checkToken'))

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));
// app.use(cors({ credentials: true, origin: 'http://http://localhost:3000/' }));


// Catch-all route that will match al GET requests that don't match an 
// API route defined above

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001;

//Gets app to listen for HTTP traffic
app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
})
