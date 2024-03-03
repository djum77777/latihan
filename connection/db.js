//koneksi ke db postgreSQL
const {Pool}=require('pg')

const db=new Pool({
    user:'postgres',
    password:'imlot007',
    host:'localhost',
    database:'mydatabase',
    port:5432
})

module.exports=db;