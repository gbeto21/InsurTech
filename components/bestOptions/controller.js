module.exports = function (pData) {
    let data = pData
    if (!data) {
        data = require('../../data/data.json')
    }

    function getBestOptions(year) {
        let result = data.find(obj => obj._id === year)
        return result
    }

    return {
        getBestOptions
    }

}