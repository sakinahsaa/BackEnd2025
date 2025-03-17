const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get guru');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input guru');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit guru');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete guru');
});

module.exports = router;