const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products.controller')
router.get('/findAll', productsController.findAll)
router.get('/findOne/:product', productsController.findOne)
router.post('/create', productsController.create)
router.patch('/update', productsController.update)
router.delete('/delete/:product', productsController.delete)

module.exports = router