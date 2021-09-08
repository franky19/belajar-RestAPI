const mysql=require("mysql")
const dbConfig=require("../config/db.config")

//create a connection to the database
const connection=mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password: dbConfig.PASSWORD,
    database:dbConfig.DB
})

//open the MySql connection
connection.connect(err=>{
    if(err) throw err;
    console.log("successfully connected to the database.");
});

module.exports=connection;