module.exports = function (dataBaseAccess) {
    let dataBase = dataBaseAccess
    if (!dataBase) {
        dataBase = require('../../databaseaccess/JSON')
    }

    function getBestOptions(year) {
        return dataBase.filterByYear(year)
    }

    return {
        getBestOptions
    }

}