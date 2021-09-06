var db = require("../../index");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "CREATE DATABASE petani_kopi";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});