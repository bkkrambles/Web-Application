const express = require('express');
const { postFromBackend } = require('../Controllers/employee')

const router = express.Router();


router.get('/', postFromBackend)




module.exports = router;