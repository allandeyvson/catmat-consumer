const express = require('express');
const db = require('./db/mongoDB')
const schema = require('./db/materialSchema');
const { mongo } = require('mongoose');


function app() {

    function start() {
        const app = express();
        const mongoDB = db(schema)

        app.set('view engine', 'ejs');

        app.get('/', function (req, res) {
            res.render("../view/index", {results : false});
        });

        app.get('/search', async function (req, res) {
            var searchParams = req.query.query.toUpperCase().split(' ')
            var result = await mongoDB.read(searchParams)
            res.render("../view/index", {results : true, search : req.query.query, list: result});
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