const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'password',
    database: 'personinfo',
    port: 3306
})

db.connect((error)=>{
    if (error) throw error;
    console.log("successfully connectd to database");
})

module.exports = {db}