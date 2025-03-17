const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get siswa');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input siswa');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit siswa');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete siswa');
});

module.exports = router;