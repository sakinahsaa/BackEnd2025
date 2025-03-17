const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.send('ini halaman get user');
});

router.post ('/inputuser', (req, res) => {
    res.send('ini halaman input user');
});

router.put ('/edituser', (req, res) => {
    res.send('ini halaman edit user');
});

router.delete ('/deleteuser', (req, res) => {
    res.send('ini halaman delete user');
});

module.exports = router;