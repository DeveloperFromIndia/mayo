const mysql = require('mysql');

class Database {
    
    constructor(host,user,password,database) {
        this.connection = mysql.createConnection({
            host:host,
            user:user,
            password:password,
            database:database
        });

        this.connection.connect (err => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Database connected');
            }
        })
    }

    dbquery(query) {
        this.connection.query(query,(err,res) => {
            if (err) {
                return err;
            }
            else {
                return res;
            }
        });
    }
}