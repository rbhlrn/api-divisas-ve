const cheerio = require("cheerio");
const axios = require("axios").default;

//Open url
const getUrlData = async url => {
    try {
        const response = await axios.get(url);
        return response.status != 200 ? null : response.data;
    } catch {
        return null;
    }
};

//Filter tags
const currenciesFilter = selector => {
    const EUR = selector
        .find("div[id='euro']")
        .find("strong")
        .text()
        .trim();
    const USD = selector
        .find("div[id='dolar']")
        .find("strong")
        .text()
        .trim();
    const CNY = selector
        .find("div[id='yuan']")
        .find("strong")
        .text()
        .trim();
    const TRY = selector
        .find("div[id='lira']")
        .find("strong")
        .text()
        .trim();
    const RUB = selector
        .find("div[id='rublo']")
        .find("strong")
        .text()
        .trim();
    const DATE = selector
        .find("div[class='pull-right dinpro center']")
        .find("span")
        .text()
        .trim();
    return { USD, EUR, RUB, TRY, CNY, DATE };
}

//Main function on scrap bcv
const scrapBCV = async () => {
    const url = "http://www.bcv.org.ve/";
    const html = await getUrlData(url);
    if(html != null){
        const $ = cheerio
            .load(html);
        const htmlResult = $("body")
            .find("div[class='views-row views-row-1 views-row-odd views-row-first views-row-last row']");
        const data = htmlResult.map((id, item) => {
            const itemSelector = $(item);
            return currenciesFilter(itemSelector);
        }).get()[0];
        return data;
    }else{
        return html;
    }
};

module.exports = scrapBCV;