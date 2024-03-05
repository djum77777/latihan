const { findStore } = require("../models/storemodel");

const getStore=async(req,res)=>
{
    const store= await findStore()
    res.render('store',{store})
}

module.exports=getStore