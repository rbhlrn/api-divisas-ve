const { Router } = require('express');
const bcvRouter = Router();
const { getAll, getOne }  =  require("../core/commands");

//Gell all currencies
bcvRouter.get('/', async function (req, res) {
    const data = await getAll();
    data.error === false ? res.status(200).send(data) : res.status(503).send(data);
});

//Get one currency
bcvRouter.get('/:currency', async function (req, res) {
    const data = await getOne(req);
    data.error === false ? res.status(200).send(data) : res.status(503).send(data);
});

//Error path
bcvRouter.get('*', function(req, res){
    res.status(404).send({
        "error": true,
        "message": "Path error"
    });
});

module.exports = bcvRouter;
