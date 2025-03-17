const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get nilai');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input nilai');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit nilai');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete nilai');
});

module.exports = router;