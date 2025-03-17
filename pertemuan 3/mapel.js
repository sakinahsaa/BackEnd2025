const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get mapel');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input mapel');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit mapel');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete mapel');
});

module.exports = router;