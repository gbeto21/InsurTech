/* 
    Funcionalidad: crear un controlador especificando el 
    tipo de acceso a la base de datos. 
*/

//Se crea el controlador injectándole un acceso a la base de datosJSON.
let dataBaseJSON = require('../../databaseaccess/JSON')
const controller = require('./controller')

module.exports = controller(dataBaseJSON)