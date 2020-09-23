const express = require('express');
const app = express()
const bestOptions = require('./components/bestOptions/network')
const quoteCar = require('./components/quoteCar/network')
const errorsMiddleWare = require('./components/error')

app.use("/bestOptionsPerYear", bestOptions)
app.use("/quoteCar", quoteCar)

app.use(errorsMiddleWare)

app.listen(process.env.PORT || 5000)