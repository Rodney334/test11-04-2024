const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mon_projet',
});

module.exports = pool.promise();