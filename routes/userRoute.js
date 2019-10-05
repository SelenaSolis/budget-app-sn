const express = require("express");
const router = express.Router();
const{list, create, update} = require('../controllers/userContr');


router.get('/', list)
router.post('/', create)
router.put('/', update)

module.exports = router;