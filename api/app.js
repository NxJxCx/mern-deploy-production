var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');
var connectDB = require('./database/connection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config({path: "config.env"});

var app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/studentprofiles', usersRouter);

module.exports = app;
