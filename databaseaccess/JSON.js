/* 
    Funcionalidad: ejecutar la funcionalidad de obtener
    los datos solicitados. 
*/

//Carga los datos del archivo data.json
const data = require('../data/data.json')

/*
Obtiene las opciones en dónde el año proporcionado
se encuentre los rangos de los años de las opciones.
*/
function filterByYear(year) {
    return data.filter(insure =>
        year >= insure.yearRange[0] &&
        year <= insure.yearRange[1])
}

/*
Obtiene las opciones en dónde coincidan la categoria 
y la marca especificadas y además el año proporcionado
se encuentre los rangos de los años de las opciones.
*/
function filterByParams(category, brand, year) {
    return data.filter(insure =>
        insure.coverageType === category &&
        insure.brand === brand &&
        year >= insure.yearRange[0] &&
        year <= insure.yearRange[1]
    )
}

module.exports = {
    filterByYear,
    filterByParams
}