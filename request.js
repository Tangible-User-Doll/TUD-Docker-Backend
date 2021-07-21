var express = require('express');
var app = express();
var fs = require("fs");
const fileName = './color.json';
const file = require(fileName);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/color', function (req, res) {
    fs.readFile( __dirname + "/" + "color.json", 'utf8', function (err, data) {
        console.log( data );
        req.header('User-Agent');
        res.status(200);
        res.send(data)
        res.end();
    });
})

app.get('/changeColor', function (req, res) {

    if(req.query.p1 !== undefined){
        file.p1 = parseInt(req.query.p1);
    }else{
        file.p1 = file.p1;
    }
    if(req.query.p2 !== undefined){
        file.p2 = parseInt(req.query.p2);
    }else{
        file.p2 = file.p2;
    }
    if(req.query.p3 !== undefined){
        file.p3 = parseInt(req.query.p3);
        file.p3 = file.p3;
    }

    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });

    req.header('User-Agent')
    res.status(200);
    res.end();
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})