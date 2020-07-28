var express = require('express');

function app() {

    function start() {
        var app = express();
        app.set('view engine', 'ejs');

        app.get('/search', function (req, res) {
            res.render("../view/index");
        });

        app.listen(9000, function () {
            console.log("running server in port 9000");
        });
    }

    return {
        start
    }

}

module.exports = app