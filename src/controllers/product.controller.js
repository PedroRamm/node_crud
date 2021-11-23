
const db = require("../config/database");

exports.getProduct = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY productname ASC');
    res.status(200).send(response.rows);
}

exports.createProduct = async (req, res) => {
    const { productname, quantity, price } = req.body;
    const { rows } = await db.query(
        "INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
         [productname, quantity, price]
    );

    res.status(201).send({
        message: "Product added successfully",
        body: {
            product: { productname, quantity, price}
        },
    });
}

exports.getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query("SELECT * FROM products WHERE productid = $1", [productId]);
    res.status(200).send(response.rows);
}

exports.updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const {productName, quantity, price } = await db.query("SELECT productname, quantity, price FROM products WHERE productid = $1", [productId]);
    
    
}