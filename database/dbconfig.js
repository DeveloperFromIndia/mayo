const mysql = require('mysql');

var Database = class {
     
    constructor() {
        this.config = {
            host:"localhost",
            user:"root",
            password:"root",
            database:"test",
        }
        this.conn = mysql.createConnection(this.config);
    }
    
    connectToDatabase() {
        this.conn.connect (err => {
            if (err) {
                console.log(err);
            }
            else { 
                console.log('Database connected');
            }
        });
    }
    closeСonnection() {
        this.conn.end( err => {
            this.conn.connect (err => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Database connected');
                }
            });
        });
    }
    dbquery(query) {
        let result;
        this.conn.query(query,(err,res) => {
            if (err) {
                return err;
            }
            else {
                result = res;
            }
        });
        return result;
    }
}

module.exports = {
    db: Database,
}
