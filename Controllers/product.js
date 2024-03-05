const { findProduct, createProduct, findProductByID, editProduct } = require("../models/productModel");

//untuk tampilin halaman produk
const getProduct=async(req,res)=>
{
    try {
        const product= await findProduct()
        res.render('product',{product})
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('server ada error')
    }  
}
//untuk tambah produk
const addProduct=async(req,res)=>
{
    try {
        const saveProduct=
        {
        name:req.body.name,
        price:Number(req.body.price),
        stock:Number(req.body.stock),
        store_id:Number(req.body.store_id)
        }
        const product=await createProduct(saveProduct);
        res.redirect('product') //untuk balik ke hlmn produk stlh di add produk   
    } catch (error) {
        console.log(error);
        res.status(500).send('server ada error')
    }
}

//untuk cari produk sesuai ID dan ditampilkan ke hlaman produk detail
const productByID=async(req,res)=>
{
    try {
        const id=req.params.id
        const productdetail=await findProductByID(id);
        res.render('productdetail',{productdetail}) //untuk balik ke hlmn produk stlh di add produk
        
    } catch (error) {
        console.log(error);
        res.status(500).send('server ada error')
    }
}

//untuk edit produk
const updateProduct=async(req,res)=>
{
    try {
        //tampung id yg di lempar
        const ID=req.params.id
        //tampung data yg mau diedit
        const saveProduct=
        {
            name:req.body.name,
            price:Number(req.body.price),
            stock:Number(req.body.stock),
            store_id:Number(req.body.store_id)
        }
        console.log('test ',ID,saveProduct);
        const product=await editProduct(ID,saveProduct);
        res.redirect('product') //untuk balik ke hlmn produk stlh di add produk
        
    } catch (error) {
        console.log(error);
        res.status(500).send('server ada error')
    }
    
}
module.exports={getProduct,addProduct,productByID,updateProduct}