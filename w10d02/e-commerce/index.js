// REQUIREMENTS
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

const createStripeCheckout = (productId, productName, productPrice) => {
  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'cad',
          product_data: {
            name: `#${productId} ${productName}`,
          },
          unit_amount: productPrice, // Price in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${BASE_URL}/checkout/success`,
    cancel_url: `${BASE_URL}/checkout/cancel`,
  });
};

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
      price: 70000,
    },
    {
      id: 3,
      name: 'SamsungTV',
      price: 50000,
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 10000,
    },
  ],
};

// SETUP & MIDDLEWARE
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', (req, res) => {
  const templateVars = {
    products: db.products,
  };
  res.render('index', templateVars);
});

app.post('/api/checkout', async (req, res) => {
  const { productId, productName, productPrice } = req.body;
  if (!productId || !productName || !productPrice) {
    return res.send('missing product data');
  }

  const session = await createStripeCheckout(
    productId,
    productName,
    productPrice
  );
  res.redirect(303, session.url);
});

app.get('/checkout/success', (req, res) => {
  res.render('checkout/success');
});

app.get('/checkout/cancel', (req, res) => {
  res.render('checkout/cancel');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hi from express!' });
});

// LISTENER
app.listen(PORT, () => {
  console.log('Listening at port:', PORT);
});
