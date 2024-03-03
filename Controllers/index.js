//all functions here
//panggil koneksi db postgre
const db=require('../connection/db')
// panggil koneksi QUERY BUILDER KNEX -POSTGRE
const knex=require('../connection/knexDB')

exports.urlHome=((req,res)=>
{
    const nama="Shihtzu and Maltese"
    //dgn ejs kt bs langsung send data dgn bentuk object {} terus di hlmn index.ejs (file html) kt panggil
    res.render('index',{nama})//(file name, object) akan langsung terhubung ke hlmn html index.ejs
})
exports.getStore=(async(req,res)=>
{   
    //QUERY dgn POSTGRES DB
    //const response = await db.query ('SELECT * FROM store')
    //const store = response.rows;
    //console.log(store);
    //res.render('store',{store}) //akan langsung terhubung ke hlmn html user.ejs
    
    //QUERY dgn QUERY BUILDER KNEX
    const store = await knex.select().table('store')
    //console.log(store);
    res.render('store',{store})
})
exports.getCustomer=(async(req,res)=>
{   
    //QUERY dgn db postgre
    /*const response = await db.query ('SELECT * FROM customer')
    const customer = response.rows;
    console.log(customer);
    res.render('customer',{customer}) //akan langsung terhubung ke hlmn html user.ejs */

    //QUERY dng Query Builder KNEX
    const customer = await knex.select().table('customer')
    res.render('customer',{customer})
})

exports.getProduct=(async(req,res)=>
{   
   //QUERY dgn db postgre
    /*const response = await db.query('SELECT * FROM PRODUCT')
    console.log(response.rows);
    const dataProduct=response.rows
    res.render('product',{product : dataProduct}) //akan langsung terhubung ke hlmn html product ejs.ejs */

    //Query dgn Query Builder KNEX
    const product = await knex('product').select(
        'product.id as id',
        'product.name',
        'product.price',
        'product.stock',
        'store.name as toko'
    )
    .innerJoin('store','product.store_id','=','store.id').orderBy('id','desc')
    res.render('product',{product})
})

exports.getProductDetail=(async (req,res)=>
{
    const ID=req.params.id;
    const response= await knex.select('*').from('product').where('id',ID)
    //response [0] untuk ngambil 1 array krn data yg dilog kluar dlm bntuk array bkn objek jd perlu kt tmpung arraynya
    const productdetail=response[0]
    res.render('productdetail',{productdetail})
})

exports.getTransaction=(async(req,res)=>
{   
   //query dgn postgre
   /*const response = await db.query(
    `SELECT 
    customer.name AS name,
    product.name AS product,
    price,
    quantity AS qty,
    price*quantity AS total 
    FROM transaction
    INNER JOIN customer on transaction.customer_id=customer.id
    INNER JOIN product on transaction.product_id=product.id;`
    )
   // console.log(response.rows);
    const transaction=response.rows
    res.render('transaction',{transaction}) //akan langsung terhubung ke hlmn html product ejs.ejs 
    */
    //Query dgn query builder KNEX
    const transaction = await knex('transaction').select(
        'product.id',
        'customer.name as name',
        'product.name as product',
        'product.price as price',
        'quantity as qty'
       // 'sum(quantity,product.price) as total'
        )
    //.sum({total:'quantity'})
    .innerJoin('customer','transaction.customer_id','=','customer.id')
    .innerJoin('product','transaction.product_id','=','product.id')
    console.log(transaction);
    res.render('transaction',{transaction})
})

exports.getForm=((req,res)=> //untuk buka form 
{   
    
    res.render('form') //akan langsung terhubung ke hlmn html form.ejs
    //res.render('product',{products})
})

exports.addProduct=(async(req,res)=>
{
   const saveProduct=
    {
        name:req.body.name,
        price:Number(req.body.price),
        stock:Number(req.body.stock),
        store_id:Number(req.body.store_id)
    }
    await knex('product').insert(saveProduct)
    res.redirect("/product") //stlh input kembali lg ke hlmn form)  
})