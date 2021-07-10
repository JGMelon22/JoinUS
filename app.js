var mysql = require('mysql');
var express = require('express');
var app = express();

// Connect to MySQL
var connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'Melon@123',
    database: 'join_us',
    port: '3306'

});

app.get("/", function (req, res) {

    // Find count of users in DB
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (error, results) {
        if (error) throw error;

        // Respond with taht count
        var msg = "We have " + results[0].count + " users";
        res.send(msg);
    });
});

app.get("/joke", function (req, res) {
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});

app.get("/random_num", function (req, res) {
    var num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is " + num);
});

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});