const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')
const httpError = require('../../utils/httpError')

router.get('/:year', bestOptionsPerYear)

function bestOptionsPerYear(req, res, next) {

    let year = req.params.year
    let data = controllerCreator.getBestOptions(year)
    response.success(req, res, data, 200)

}

module.exports = router