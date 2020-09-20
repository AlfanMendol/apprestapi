var mysql = require('mysql');

// Buat koneksi 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '09091999',
    database: 'belajar_rest_api'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('MySql terkoneksi');
})

module.exports = conn;