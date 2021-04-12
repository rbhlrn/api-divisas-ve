const scrapBCV = require("../exchanges/bcv");
const { evalCurrencyObject, getUnique } = require('./core');

//Get all data
const getAll = async () => {
    const data = await scrapBCV();
    const parseData = evalCurrencyObject(data);
    return parseData.error === false ? {
        error: parseData.error,
        quotationDate: parseData.quotationDate,
        data: parseData.data
    } : {
        error: parseData.error,
        message: parseData.message
    };
};

//Get one data
const getOne = async path => {
    const currency = path.params.currency;
    const data = await scrapBCV();
    const parseData = getUnique(data, currency);
    
    return parseData.error === false ? {
        error: parseData.error,
        quotationDate: parseData.quotationDate,
        data: parseData.data
    } : {
        error: parseData.error,
        message: parseData.message
    };
};

module.exports = { getAll, getOne };