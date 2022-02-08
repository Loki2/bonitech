const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();



//Initialization Middleware
app.use(morgan('dev'));
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', async (req, res, next) => {
    res.render('index')
});

app.get('/service', async (req, res, next) => {
    res.render('service/index.ejs')
});


app.get('/service/it-advisor', async (req, res, next) => {
    res.render('service/ITAdvisor')
});


app.get('/service/it-consulte', async (req, res, next) => {
    res.render('service/Consulte')
});


app.get('/products', async (req, res, next) => {
    res.render('product/index')
});

app.get('/trains', async (req, res, next) => {
    res.render('trains/index')
});


app.get('/contact', async (req, res, next) => {
    res.render('contact/index')
});

app.get('/about', async (req, res, next) => {
    res.render('about/index')
});




//Handle Error
app.use((req, res, next) => {
  next(createHttpError.NotFound());
})

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.send(error);
})

module.exports = app;