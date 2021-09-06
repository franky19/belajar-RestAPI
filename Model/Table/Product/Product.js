var db = require("../../../index");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `CREATE TABLE Product 
    (
        product_id int NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(200),
        product_price INT(11),
        PRIMARY KEY (product_id)
    )`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

