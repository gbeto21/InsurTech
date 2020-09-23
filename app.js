const express = require('express');
const app = express()
const bestOptions = require('./components/bestOptions/network')

app.use("/bestOptionsPerYear", bestOptions)

app.listen(process.env.PORT || 5000)