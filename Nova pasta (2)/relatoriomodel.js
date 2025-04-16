
const db = require('../conexao/db');

const User = {

    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM produtos';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    getAllUserstoPDF: () => {
        const sql = 'SELECT * FROM produtos';
        return new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};
module.exports = User; 
