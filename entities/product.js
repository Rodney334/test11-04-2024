// product.js
const db = require('./db');

class Product {
  constructor(name, priceHt) {
    this.name = name;
    this.priceHt = priceHt;
    this.creationDate = new Date();
    this.dateUpdate = null;
  }
}

module.exports = Product;
