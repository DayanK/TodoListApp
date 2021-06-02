/* npm i nodemon 
https://mongoosejs.com/

method-override -> Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
npm install method-override
*/
// Variables
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // package to use for Delete post
const bodyParser = require('body-parser');

// Database connection Mongodb with mongoose
mongoose
  .connect(
    'mongodb+srv://admin:amari@todoapp.w195w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connected to the database');
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Set template eingine as pug
app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Create a server connection and make the app to listen on asigned port number
const port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running on port: ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
