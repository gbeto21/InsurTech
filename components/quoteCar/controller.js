/* 
    Funcionalidad: acceder a la base de datos y obtener los datos en base 
    a la marca, el año y si se cuenta con aire acondicionado. 
*/

module.exports = function (dataBaseAccess) {

    //Se declaran los tipos de coverturas.
    const COVERAGE_RC = 'RC'
    const COVERAGE_LOW = 'Low'
    const COVERAGE_MID = 'Mid'
    const COVERAGE_HIGH = 'High'

    /*
    Se valida que se establezca un acceso a la base de datos,
    de lo cotrario, se establece un acceso al archivo JSON.
    */
    let dataBase = dataBaseAccess
    if (!dataBase) {
        dataBase = require('../../databaseaccess/JSON')
    }

    /*
    Función encargada de crear un arreglo con las mejores opciones
    de cada tipo de covertura.
    Se obtiene una opción por cada tipo de categoría.
    */
    function getQuoteCar(brand, year, hasAC) {
        return [
            getQuoteCarByCategory(COVERAGE_RC, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_LOW, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_MID, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_HIGH, brand, year, hasAC)
        ]
    }

    /*
    Se obtiene la mejor opción por categoría especificada de la siguiente manera:
    1. Se filtran los datos accediendo a la base de datos proporcionandole los parámetros.
    2. Se calcula el precio total de cada opción.
    3. Se obtiene la mejor opción, la mejor opción será la que tenga el mejor precio total.
    */
    function getQuoteCarByCategory(category, brand, year, hasAC) {
        let filteredInsures = dataBase.filterByParams(category, brand, year)
        let insuresTotalPrice = calculateTotalPrice(filteredInsures, hasAC)
        let lowestQuote = getLowestQuote(insuresTotalPrice)
        return lowestQuote
    }

    /*
    Calcula el precio total de cada una de las opciones encontradas.
    Se toma en cuenta si se especifica si se cuenta con aire acondicionado.
    */
    function calculateTotalPrice(insures, hasAC) {
        let result = insures.map(insure => {
            let totalPrice = convertToFloat(formatNumber(insure.price))
            if (hasAC) {
                totalPrice += convertToFloat(formatNumber(insure.extraCoveragePrice))
            }
            return {
                ...insure,
                totalPrice: totalPrice
            }
        })
        return result
    }

    /*
    Recore las comparaciones y define cuál es la de menor precio.
    Se valida que se proporcionen seguros. 
    */
    function getLowestQuote(insuranses) {
        if (insuranses === false) {
            return
        }

        let lowest = insuranses[0]
        insuranses.map(insuranse => {
            if (insuranse.totalPrice < lowest.totalPrice) {
                lowest = insuranse
            }
        })
        return lowest
    }

    /*
    Se realiza la conversión del valor proporcionado a un valor flotante.
    Utilizado para convertir los precios de las opciones.
    */
    function convertToFloat(value) {
        return parseFloat(value)
    }

    /*
    Establece el formato de número, removiendo el caracter: ',' 
    de la propiedad especificada.
    Utilizada para convertir los precios de las opciones.
    */
    function formatNumber(value) {
        return value.replace(',', '')
    }

    return {
        getQuoteCar
    }
}