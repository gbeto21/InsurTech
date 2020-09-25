const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')
const httpError = require('../../utils/httpError')

router.get('/', quoteCar)

function quoteCar(req, res, next) {

    let brand = req.query.brand
    let year = validateYear(req.query.year)
    let hasAC = (req.query.hasAC === 'true') ? true : false

    let data = controllerCreator.getQuoteCar(brand, year, hasAC)
    response.success(req, res, data, 200)

}

function validateYear(year) {
    let yearNumer = parseInt(year)
    if (!yearNumer) {
        throw httpError('Invalid format data.', 400)
    }
    return yearNumer
}

module.exports = router