/* 
    Funcionalidad: acceder a la base de datos y obtener los datos en base 
    al año especificado. 
*/

module.exports = function (dataBaseAccess) {
    /*
    Se valida que se establezca un acceso a la base de datos,
    de lo cotrario, se establece un acceso al archivo JSON.
    */
    let dataBase = dataBaseAccess
    if (!dataBase) {
        dataBase = require('../../databaseaccess/JSON')
    }

    //Obtiene las mejores opciones utilizando el acceso a los datos.
    function getBestOptions(year) {
        return dataBase.filterByYear(year)
    }

    return {
        getBestOptions
    }

}