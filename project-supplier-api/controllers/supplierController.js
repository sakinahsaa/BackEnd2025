const db = require('../config/db');

exports.getAllSuppliers = (req, res) => {
    db.query('SELECT * FROM supplier', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getSupplierById = (req, res) => {
    db.query('SELECT * FROM supplier WHERE idSup = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

exports.createSupplier = (req, res) => {
    const data = req.body;
    db.query('INSERT INTO supplier SET ?', data, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Data ditambahkan', id: result.insertId });
    });
};

exports.updateSupplier = (req, res) => {
    db.query('UPDATE supplier SET ? WHERE idSup = ?', [req.body, req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Data diupdate' });
    });
};

exports.deleteSupplier = (req, res) => {
    db.query('DELETE FROM supplier WHERE idSup = ?', [req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Data dihapus' });
    });
};
