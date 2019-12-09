const products= require('../products.json')

const getProduct=(req,res)=>{
    // console.log(req.params);
    const product= products.find((product)=> product.id ===+ parseInt(req.params.id))
    if(product){
        res.status(200).send(product)

    }else{
        res.status(500).send('Item not in list')
    }
}


module.exports={
    getProduct
}
