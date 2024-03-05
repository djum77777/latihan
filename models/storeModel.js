//untuk buat koneksi ke knexfile cukup ke knexfile 
//yg da kt buat diawal di terminal dgn command:knex init

const knexfile=require('../knexfile')
const knex = require('knex')(knexfile.development)

exports.findStore=(req,res)=>
{
    return knex.select('*').from('store')
    
}
