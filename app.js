const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const logger = require('morgan');
require('dotenv').config();


// const indexRouter = require('./routes/index');
const authRouter = require('./routes/authroute');
const adminRouter = require('./routes/adminRoute');
const superadminRouter = require('./routes/superadminRoute');
const userRouter = require('./routes/userRoute');


const app = express();



// View engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Middleware untuk session dan flash messages
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(flash());
  

// app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/superadmin', superadminRouter);

// Error handling
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;




