const db = require("../../../index");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "INSERT INTO product (product_name,product_price) VALUES ?";
    var values = [
        ['Product 1','2000'],
        ['Product 2','5000'],
        ['Product 3','4000'],
        ['Product 4','6000'],
        ['Product 5','7000']
    ];
    db.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});