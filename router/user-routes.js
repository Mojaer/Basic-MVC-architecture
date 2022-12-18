const express = require('express');
const { fileUser, inputSaver } = require('../controller/user-controler');

const router = express.Router();


router.get('/eikhane', fileUser)

router.post('/eikhane', inputSaver)

router.get('/', (req, res) => {
    res.send("eita home")
})

module.exports = router