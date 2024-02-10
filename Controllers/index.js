//all functions here
exports.urlHome=((req,res)=>
{
    const nama="Shihtzu and Maltese"
    //dgn ejs kt bs langsung send data dgn bentuk object {} terus di hlmn index.ejs (file html) kt panggil
    res.render('index',{nama})//(file name, object) akan langsung terhubung ke hlmn html index.ejs
})

const users={
    name : "ERNI",
    age : 72
}
exports.getUser=((req,res)=>
{   
    
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
exports.getProduct=((req,res)=>
{   
   
    res.render('product',{products}) //akan langsung terhubung ke hlmn html product ejs.ejs
})

exports.getForm=((req,res)=> //untuk buka form 
{   
    res.render('form') //akan langsung terhubung ke hlmn html form.ejs
    //res.render('product',{products})
})

exports.addProduct=((req,res)=>
{
   const saveProduct=
    {
        name:req.body.name,
        price:Number(req.body.price),
        stock:Number(req.body.stock)
    }
    products.push(saveProduct)
    console.log(products);
   //res.send({
   // Status : 201,
   // Message : "Product added",
   // data : products}) 
    res.redirect("/form") //stlh input kembali lg ke hlmn form)  
})