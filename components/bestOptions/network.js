const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')
const httpError = require('../../utils/httpError')

router.get('/:year', bestOptionsPerYear)

function bestOptionsPerYear(req, res, next) {
    let year = validateParams(req.params)
    let data = controllerCreator.getBestOptions(year)
    response.success(req, res, data, 200)
}

function validateParams(params) {
    let year = parseInt(params.year)
    if (!year) {
        throw httpError('Invalid format data.', 400)
    }
    return year
}

module.exports = router