const express = require('express');
const app = express();
const cors = require('cors');

const productRouter = require('./router/productRouter')

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended : false }));
app.use(express.json());


// ROUTER
app.use('/api/products', productRouter); 



module.exports = app