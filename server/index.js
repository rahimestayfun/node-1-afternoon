const express = require('express');
// const products= require('../package.json');
const getProducts= require('./getProducts');
const getProduct= require('./getProduct');

const app= express();

app.get('/api/products',getProducts.getProducts);
app.get('/api/products/:id', getProduct.getProduct)

const port = 3333;

app.listen(port,()=>console.log(`Server is working for you on ${port}!`))

