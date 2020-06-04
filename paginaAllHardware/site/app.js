const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const registroRouter = require('./routes/registro');
const loginRouter = require('./routes/login');
const carritoRouter = require('./routes/carrito');
const detalleRouter = require('./routes/detalle');
const productosRouter = require('./routes/productos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method'));


app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/registro', registroRouter);
app.use('/login', loginRouter);
app.use('/carrito', carritoRouter);
app.use('/detalle', detalleRouter);
app.use('/productos', productosRouter);


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
