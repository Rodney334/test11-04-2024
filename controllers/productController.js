const Product = require('../entities/product');

exports.index = async (req, res) => {
    try {
      const products = await Product.fetchAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

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

exports.edit = async (req, res) => {
    const productId = req.params.id;

    try {
        const [productData] = await Product.fetchById(productId);
        
        if (!productData) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.render('product/edit.html', {
            product: productData,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.update = async (req, res) => {
    const productId = req.params.id;
    const { name, priceHt } = req.body;
    const dateUpdate = new Date();
  
    try {
      const product = new Product(name, priceHt, null, dateUpdate);
      await product.update(productId);
      res.redirect('/product');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};