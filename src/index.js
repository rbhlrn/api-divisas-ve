const express = require("express");
const helmet = require('helmet');
const cors = require("cors");
const bcvRouter = require('./routes/bcv');

//Initialize express server
const app = express();

//App config
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(helmet.hidePoweredBy());
app.use(function(req, res, next) {
    let err = null;
    try{
        decodeURIComponent(req.path)
    }catch(e){
        err = e;
    }
    if(err){
        return res.status(404).send({
            "error": true,
            "message": "Path error"
        }); 
    }
    next();
});

//Versioning api
app.use('/v1', bcvRouter);

//Error path
app.get('*', function(req, res){
    res.status(404).send({
        "error": true,
        "message": "Path error"
    });
});

//Start app
app.listen(process.env.PORT || 3000);