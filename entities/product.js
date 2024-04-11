// product.js
const db = require('../db');

class Product {
  constructor(name, priceHt) {
    this.name = name;
    this.priceHt = priceHt;
    this.creationDate = new Date();
    this.dateUpdate = null;
  }

  static async fetchAll() {
    const [rows] = await db.execute('SELECT * FROM product');
    return rows;
  }
}

module.exports = Product;
