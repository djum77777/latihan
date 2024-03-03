//server side
const express = require ('express');
const app = express();
const port = 3000
//deklarasi view engine ejs yg sudah kt install npm i ejs
//folder untuk tampung file html ejs harus diberi nama folder VIEWS default dr ejs
app.set('view engine','ejs')

//smua file css,img,js client side ditaruh di folder public agar bs diakses di html
app.use(express.static('public')) //bebas bs kasih nama public or etc

//middleware untuk bs akses ambil data form
app.use(express.urlencoded({extended:false}))

//koneksi ke db postgreSQL

const {urlHome,getCustomer,getProduct,getProductDetail,getForm, addProduct,getTransaction,getStore}=require('./Controllers')

app.get('/',urlHome) 
app.get('/store',getStore) 
app.get('/customer',getCustomer) 
app.get('/transaction',getTransaction)
app.get('/product',getProduct)
app.get('/productdetail/:id',getProductDetail)
app.get('/form',getForm) 
//untuk ambil data dr form kt perlu pake middleware urlencoded
app.post('/add-product',addProduct)

app.listen(port,()=>console.log(`server running on port ${port}`))