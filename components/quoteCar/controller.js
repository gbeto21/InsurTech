module.exports = function (pData) {

    const COVERAGE_RC = 'RC'
    const COVERAGE_LOW = 'Low'
    const COVERAGE_MID = 'Mid'
    const COVERAGE_HIGH = 'High'

    let data = pData
    if (!data) {
        data = require('../../data/data.json')
    }

    function getQuoteCar(brand, year, hasAC) {
        return [
            getQuoteCarByCategory(COVERAGE_RC, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_LOW, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_MID, brand, year, hasAC),
            getQuoteCarByCategory(COVERAGE_HIGH, brand, year, hasAC)
        ]
    }

    function getQuoteCarByCategory(category, brand, year, hasAC) {
        let filteredInsures = filterInsure(category, brand, year)
        let insuresTotalPrice = calculateTotalPrice(filteredInsures, hasAC)
        let lowestQuote = getLowestQuote(insuresTotalPrice)
        return lowestQuote
    }

    function filterInsure(category, brand, year) {
        return data.filter(insure =>
            insure.coverageType === category &&
            insure.brand === brand &&
            year >= insure.yearRange[0] &&
            year <= insure.yearRange[1]
        )
    }

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

    function convertToFloat(value) {
        return parseFloat(value)
    }

    function formatNumber(value) {
        return value.replace(',', '')
    }

    return {
        getQuoteCar
    }
}