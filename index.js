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
app.get('/',(req,res)=>
{
    const nama="Shihtzu and Maltese"
    //dgn ejs kt bs langsung send data dgn bentuk object {} terus di hlmn index.ejs (file html) kt panggil
    res.render('index',{nama})//(file name, object) akan langsung terhubung ke hlmn html index.ejs
}) 

app.get('/user',(req,res)=>
{   
    const users={
        name : "ERNI",
        age : 72
    }
    res.render('user',{users}) //akan langsung terhubung ke hlmn html user.ejs
}) 
const products=[
    {
        name : "Pedigree",
        price : 15600,
        Stock : 20
    },
    {
        name : "Royal Canin",
        price : 45500,
        Stock : 100
    },
    {
        name : "Happy Dog",
        price : 34500,
        Stock : 120
    }
]
app.get('/product',(req,res)=>
{   
   
    res.render('product',{products}) //akan langsung terhubung ke hlmn html product ejs.ejs
}) 

app.get('/form',(req,res)=> //untuk buka form 
{   
    res.render('form') //akan langsung terhubung ke hlmn html form.ejs
    //res.render('product',{products})
}) 
//untuk ambil data dr form kt perlu pake middleware urlencoded
app.post('/add-product',(req,res)=>
{
   const saveProduct=
    {
        name:req.body.name,
        price:Number(req.body.price),
        stock:Number(req.body.Stock)
    }
    products.push(saveProduct)
    console.log(products);
   //res.send({
   // Status : 201,
   // Message : "Product added",
   // data : products}) 
    res.redirect("/form") //stlh input kembali lg ke hlmn form)  
})
app.listen(port,()=>console.log(`server running on port ${port}`))