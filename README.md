# API RESTfull Divisa (VE) with NodeJs Express

[![N|Solid](https://img.icons8.com/color/150/000000/nodejs.png)](https://nodejs.org/es/)

RESTfull API designed with [Node.js][node.js] [Express][express], created using [scraping][scraping] methods to obtaining the currency price (usd, eur, cny, try, rub) of the Central Bank of Venezuela (BCV) http://www.bcv.org.ve/

## Features
- Obtaining the list of currencies and price.
- Currency filter.
- Quote date.

## Installation
- Requires [Node.js][node.js] v12+ to run.
- [Docker][docker] & [docker-compose][docker-compose] (optional).

Install the node dependencies.
```sh
cd api-divisas-ve
npm i
```

## RUN
```sh
cd api-divisas-ve
npm start
```

## RUN (DOCKER) 
[![N|Solid](https://img.icons8.com/color/55/000000/docker.png)](https://docs.docker.com/)
```sh
cd api-divisas-ve
docker build --tag api-divisas-ve .
docker run -p 3000:3000 -d api-divisas-ve
```

## ARE YOU USING HEROKU?
[![N|Solid](https://img.icons8.com/color/55/000000/heroku.png)](https://heroku.com/)
```sh
heroku login
cd api-divisas-ve
heroku git:clone -a [your-heroku-app-repository]
git add .
git commit -am "make it better"
git push heroku master
```

## ROUTES
| HTTP Method | Endpoint | Return |
| ------ | ------ | ------ |
| GET | / | ```{ "error": false, "data": { "dollar": { "iso": "USD", "value": 1987184.75, "symbol": "$" }, "euro": { "iso": "EUR", "value": 2331464.51, "symbol": "€" }, "ruble": { "iso": "RUB", "value": 26309.18, "symbol": "₽" }, "lira": { "iso": "TRY", "value": 240525.11, "symbol": "₺" }, "yuan": { "iso": "CNY", "value": 303303.63, "symbol": "¥" } } }``` |
| GET | /dollar | ```{ "error": false, "data": { "iso": "USD", "value": 1987184.75, "symbol": "$" } }``` |
| GET | /euro | ```{ "error": false, "data": { "iso": "EUR", "value": 2331464.51, "symbol": "€" } }``` |
| GET | /yuan | ```{ "error": false, "data": { "iso": "CNY", "value": 303303.63, "symbol": "¥" } }``` |
| GET | /lira | ```{ "error": false, "data": { "iso": "TRY", "value": 240525.11, "symbol": "₺" } }``` |
| GET | /ruble | ```{ "error": false, "data": { "iso": "RUB", "value": 26309.18, "symbol": "₽" } }``` |

## Errors
##### Path
``
{
    "error": true,
    "message": "Path error"
}
``

##### Getting data
``
{
    "error": true,
    "message": "Error getting data"
}
``

## License
MIT.

[//]: #
   [docker]: <https://docs.docker.com/>
   [docker-compose]: <https://docs.docker.com/compose/install/>
   [scraping]: <https://es.wikipedia.org/wiki/Web_scraping>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
