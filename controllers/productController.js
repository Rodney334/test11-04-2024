const Product = require('../entities/product');

exports.index = async (req, res) => {
    try {
      const products = await Product.fetchAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}