const express = require('express');
const router = require('./route');
const app=express();
//view Engine
app.set('view engine','ejs')

const port=3000;

app.use(express.urlencoded({extended:false})) //middleware untuk bs akses ambil data form
app.use(router)
//akses folder public
app.use(express.static('public')) //bebas bs kasih nama public or etc


app.listen(port,console.log("server berjalan di port",port))