module.exports = function (pData) {
    let data = pData
    if (!data) {
        data = require('../../data/data.json')
    }

    function getQuoteCar(brand, year, hasAC) {
        // let result = data.find(
        //     obj =>
        //         obj.brand === brand &&
        //         obj.year === year &&
        //         obj.hasAC === hasAC
        // )
        let result = data[1]
        return result
    }

    return {
        getQuoteCar
    }
}