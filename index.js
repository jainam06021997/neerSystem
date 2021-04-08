var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var MySQL = require('./config/dbConfig');

MySQL.connectionCheck.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

var contactUsAPI = require('./api/contactUsAPI');
var adminAPI = require('./api/adminAPI');
// var contactUsCtrl = require('./ctrl/contactUsCtrl');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.json());

app.use(cors());

app.use('/css', express.static(path.join(__dirname, '/node_modules/admin-lte/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/admin-lte/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/img', express.static(path.join(__dirname, '/node_modules/admin-lte/dist')));
app.set('admin-lte', './node_modules');

app.use(
  "/script-adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte/"))
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/', async (req, res) => {
//   try {
//     const data = await contactUsCtrl.list(req);
//     res.render('contactus', {data});
//     // console.log('daa', data);
//   } catch (err) {
//     console.log('errr', err);
//   }
// });

app.use('/admin', adminAPI);

app.use('/', contactUsAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

app.listen(3010, () => {
  console.log('server started');
});

module.exports = app;
