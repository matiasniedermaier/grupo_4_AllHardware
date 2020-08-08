const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const homeRouter = require('./routes/home');
const productosRouter = require('./routes/productos');
const usersRouter = require('./routes/users');
const carritoRouter = require('./routes/carrito');
const apiCarritoRouter = require('./routes/api/carrito');

const cookiesRecordame = require('./middlewares/cookiesRecordar');
const sessiones= require('./middlewares/sessionMiddlewares')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(session({
  secret : 'All Hardware',
  resave : false,
  saveUninitialized : true 
}));

app.use(sessiones);
app.use(cookiesRecordame);


//use los method put y delete en las rutas y el formulario
app.use(methodOverride('_method'));

app.use('/', homeRouter);
app.use('/productos', productosRouter);
app.use('/users', usersRouter);
app.use('/carrito', carritoRouter);
app.use('/api/carrito', apiCarritoRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
