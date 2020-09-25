const data = require('../data/data.json')

function filterByYear(year) {
    return data.filter(insure =>
        year >= insure.yearRange[0] &&
        year <= insure.yearRange[1])
}

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