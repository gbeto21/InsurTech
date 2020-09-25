/* 
    Funcionalidad: crear el router encargado de resolver 
    la ruta del endpoint bestOptionsPerYear. 
*/

const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')
const httpError = require('../../utils/httpError')

router.get('/:year', bestOptionsPerYear)

// Función ejecutada para resolver la petición entrante.
function bestOptionsPerYear(req, res, next) {
    let year = validateParams(req.params)
    let data = controllerCreator.getBestOptions(year)
    response.success(req, res, data, 200)
}

// Se valida que el parámetro 'year' sea un valor válido.
// En caso de que no sea válido, se generará una excepción.
function validateParams(params) {
    let year = parseInt(params.year)
    if (!year) {
        throw httpError('Invalid format data.', 400)
    }
    return year
}

module.exports = router