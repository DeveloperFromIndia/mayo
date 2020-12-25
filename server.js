const express = require('express');
const dbconfig = require('./database/dbconfig');

const app = express();

app.get('/', function (req,result) {
    db = new dbconfig.db();
    let res = db.dbquery('SELECT * FROM product');
    console.log(res);
    result.send(res);
});

app.listen(3000,function() {
    console.log('Server started');
}); 

