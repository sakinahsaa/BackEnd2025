const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get kelas');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input kelas');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit kelas');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete kelas');
});

module.exports = router;