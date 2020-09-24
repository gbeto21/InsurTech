module.exports = function (pData) {
    let data = pData
    if (!data) {
        data = require('../../data/data.json')
    }

    function getBestOptions(year) {
        return data.filter(insure => 
            year >= insure.yearRange[0] && 
            year <= insure.yearRange[1])        
    }

    return {
        getBestOptions
    }

}