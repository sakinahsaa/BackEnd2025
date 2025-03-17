const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get presensi');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input presensi');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit presensi');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete presensi');
});

module.exports = router;