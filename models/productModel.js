//untuk buat koneksi ke knexfile cukup ke knexfile 
//yg da kt buat diawal di terminal dgn command:knex init

const { log } = require('async')
const knexfile=require('../knexfile')
const knex = require('knex')(knexfile.development)

exports.createProduct=(product)=> //untuk tampung parameter yg di lempar dr controller
{
    return knex('product').insert(product)
}

exports.findProduct=(req,res)=>
{
        const produk=knex.select(
            'product.id',
            'product.name',
            'product.price',
            'product.stock',
            'store.name as toko'
        ).from('product')
        .innerJoin('store','product.store_id','=','store.id')
        return produk;
}


exports.findProductByID=(id)=>
{
    const produk=knex.select(
        'product.id',
        'product.name',
        'product.price',
        'product.stock',
        'store.name as toko'
    ).from('product')
    .innerJoin('store','product.store_id','=','store.id').where('product.id',id).first(); //first untuk ngambil 1 objek aja
    return produk;
}

exports.editProduct=(id,saveProduct)=> //update produk ambil 2 parameter, 1 id product yg dicari dan data yg mau diupdate
{
    return knex('product').where('product.id',id).update(saveProduct)
}