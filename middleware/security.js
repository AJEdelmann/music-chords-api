exports.setCors = (req, res, next) => {
    res.header('Access.Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

    res.header('X-BABYLON', '12');

    next();
};