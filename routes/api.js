const express = require ('express');
const ProductsController = require('../controller/ProductsConroller')
const UserController = require('../controller/UserController')
const authorise = require('../middleware/authorise')

const router = express.Router();

router.get('/getAllProducts',ProductsController.getAllProducts);
// http://localhost:5005/api/getAllProducts

router.post('/addProduct',ProductsController.addProduct);
// http://localhost:5005/api/addProduct

router.post('/Getwithquery',ProductsController.Getwithquery);
// http://localhost:5005/api/getwithquery


router.delete('/product/:id',ProductsController.deleteProducts);
// http://localhost:5005/api/products/


router.put('/product/:id',ProductsController.updateproducts);
// http://localhost:5005/api/products/

router.post('/register',UserController.addUser)
// http://localhost:5005/api/register/

router.post('/login', UserController.getUser)
// http://localhost:5005/api/login/

router.get('/GetProductwithAuthentication',authorise,ProductsController.getAllProducts)


module.exports = router;