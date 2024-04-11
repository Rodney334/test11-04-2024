const Product = require('../entities/product');

exports.index = async (req, res) => {
    try {
      const products = await Product.fetchAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

exports.new = (req, res) => {
    res.render('product/new.html');
};

exports.create = async (req, res) => {
    const { name, priceHt } = req.body;
    const product = new Product(name, priceHt);
  
    try {
      await product.save();
      res.redirect('/product');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};