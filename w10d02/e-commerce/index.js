// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

// SETUP & MIDDLEWARE
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hi from express!' });
});

// LISTENER
app.listen(PORT, () => {
  console.log('Listening at port:', PORT);
});
