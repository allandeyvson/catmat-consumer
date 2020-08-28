const express = require('express');
const db = require('./db/mongoDB')
const schema = require('./db/materialSchema');
const { mongo } = require('mongoose');
const util = require('./utils/stringUtil')
const dataJson = require('../data/data.json')


function app() {

    function start() {
        const app = express();
        const mongoDB = db(schema)

        app.set('view engine', 'ejs');

        app.get('/', function (req, res) {
            res.render("../view/index", {results : false, radioType : 'Material', rodape : dataJson["LISTAGEM CATSER"]});
        });

        app.get('/search', async function (req, res) {
            if (req.query.query !== undefined){
                var searchParams = util.normalizeText(req.query.query)

                var radioType = req.query.radioType
    
                var result = {}
                if (radioType === 'Codigo')
                    result = await mongoDB.readForCode(searchParams)
                else 
                    result = await mongoDB.read(searchParams.split(' '), radioType)
    
                res.render("../view/index", {results : true, radioType:radioType, rodape : dataJson["LISTAGEM CATSER"], search : req.query.query, list: result});    
            } else {
                res.render("../view/index", {results : false, radioType : 'Material' , rodape : dataJson["LISTAGEM CATSER"]});
            }
        });

        app.listen(process.env.PORT, function () {
            console.log("running server in port " , process.env.PORT);
        });
    }

    return {
        start
    }

}

module.exports = app