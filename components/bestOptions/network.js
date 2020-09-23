const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')

router.get('/:year', bestOptionsPerYear)

function bestOptionsPerYear(req, res, next) {
    try {

        let data = controllerCreator.getBestOptions(req.params.year)
        response.success(req, res, data, 200)

    } catch (error) {
        next()
    }
}

module.exports = router