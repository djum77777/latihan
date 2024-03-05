//exports.getHello=(req,res)=>{
//res.json("hello")}

const getHello=(req,res)=>
{
    const hello="this is my test page"
    res.render('/index')
}

module.exports=getHello