const express = require ('express');
const getHello = require('../controllers');
const getStore = require('../controllers/store');
const {getProduct,addProduct, productByID, updateProduct, productDelete} = require('../controllers/product');
const getForm = require('../controllers/form');
const { findProductByID } = require('../models/productModel');
const { findStore } = require('../models/storemodel');
const router =express.Router();

router.get('/',getHello)
router.get('/store',getStore)
router.get('/product',getProduct)
router.post('/add-product',addProduct)
router.post('/editProduct/:id',updateProduct)
router.get('/productdetail/:id',productByID)
router.get('/deleteProduct/:id',productDelete)
//panggil hlmn getform
router.get('/form',getForm)

//untuk panggil hlmn edit produk
router.get('/editProduct/:id',async(req,res)=>
{
    const ID=req.params.id
    const product=await findProductByID(ID)
    const store=await findStore();
    res.render('editProduct',{product,store}) //lempar 2 parameter ke halaman editproduk
    //store untuk biar looping nama store otomatis di list store
})
module.exports=router;
