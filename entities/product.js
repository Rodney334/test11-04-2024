// product.js
const db = require('../db');

class Product {
    constructor(name, priceHt) {
        this.name = name;
        this.priceHt = priceHt;
        this.creationDate = new Date();
        this.dateUpdate = null;
    }

    async save() {
        const [rows] = await db.execute(
            'INSERT INTO product (name, priceHt, creationDate, dateUpdate) VALUES (?, ?, ?, ?)',
            [this.name, this.priceHt, this.creationDate, this.dateUpdate]
        );
        this.id = rows.insertId;
    }
    
    async update(id) {
        await db.execute(
            'UPDATE product SET name = ?, priceHt = ?, dateUpdate = ? WHERE id = ?',
            [this.name, this.priceHt, this.dateUpdate, id]
        );
    }
    
    static async fetchAll() {
        const [rows] = await db.execute('SELECT * FROM product');
        return rows;
    }

    static async fetchById(id) {
        const [rows] = await db.execute('SELECT * FROM product WHERE id = ?', [id]);
        return rows;
    }
}

module.exports = Product;
