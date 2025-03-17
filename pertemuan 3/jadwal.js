const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get jadwal');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input jadwal');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit jadwal');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete jadwal');
});

module.exports = router;