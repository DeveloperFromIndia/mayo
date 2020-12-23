const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
}) 

connection.connect(err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Database connected');
    }
})