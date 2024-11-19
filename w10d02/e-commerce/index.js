// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

const db = {
  products: [
    {
      id: 1,
      name: 'RokuTV',
      price: 5000,
    },
    {
      id: 2,
      name: 'iPhone 15',
      price: 5000,
    },
    {
      id: 3,
      name: 'SamsungTV',
      price: 5000,
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 5000,
    },
  ],
};

// SETUP & MIDDLEWARE
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  const templateVars = {
    products: db.products,
  };
  res.render('index', templateVars);
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hi from express!' });
});

// LISTENER
app.listen(PORT, () => {
  console.log('Listening at port:', PORT);
});
