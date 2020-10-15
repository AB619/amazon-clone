const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Ha1fiIE5E8nP9ACgMF5nVwIm0N0CHTXroEcvUGKNLR3Q3LyoFYfRznuly90mGFZTw7gEVxUlA4ZmODoTBPu1dU4007jIAEs7C');

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment Request Received BOOM!! for amount>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunit of currency
        currency: 'USD',
    });
    //OK- created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-Listen commands
exports.api = functions.https.onRequest(app);

// API endpoint - http://localhost:5001/ab-26365/us-central1/api