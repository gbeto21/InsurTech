/* 
    Funcionalidad: crear el router encargado de resolver 
    la ruta del endpoint quoteCar. 
*/
const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')
const httpError = require('../../utils/httpError')

router.get('/', quoteCar)

//Función ejecutada para resolver la petición entrante.
function quoteCar(req, res, next) {

    let brand = req.query.brand
    let year = validateYear(req.query.year)
    let hasAC = (req.query.hasAC === 'true') ? true : false

    let data = controllerCreator.getQuoteCar(brand, year, hasAC)
    response.success(req, res, data, 200)

}

// Se valida que el parámetro 'year' sea un valor válido.
// En caso de que no sea válido, se generará una excepción.
function validateYear(year) {
    let yearNumer = parseInt(year)
    if (!yearNumer) {
        throw httpError('Invalid format data.', 400)
    }
    return yearNumer
}

module.exports = router