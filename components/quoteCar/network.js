const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')

router.get('/', quoteCar)

function quoteCar(req, res, next) {
    try {
        let brand = req.query.brand
        let year = req.query.year
        let hasAC = req.query.hasAC
        
        let data = controllerCreator.getQuoteCar(brand, year, hasAC)
        response.success(req, res, data, 200)
    } catch (error) {
        next()
    }
}

module.exports = router