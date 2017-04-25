const express         = require('express');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const mongoose        = require('mongoose');
const methodOverride  = require('method-override');
const passport        = require('passport');
const env             = require('./config/env');
const flash           = require('express-flash');
const router          = require('./config/routes');
const app             = express();

mongoose.connect(env.db);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
  res.locals.loggedIn = req.user ? true : false;
  res.locals.user = req.user;
  next();
});

app.use(router);

app.listen(env.port, () => console.log(`Server up and running on port: ${env.port}.`));
