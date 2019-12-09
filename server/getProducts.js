const products = require('../products.json')


const getProducts = (req, res) => {
    if (req.query.price) {
        const checked = products.filter((element) =>element.price >= parseInt(req.query.price))
        return res.status(200).send(checked);
    } else {
        res.status(200).send(products)
    }
    // res.status(200).send(products)
}


    module.exports = {
        getProducts
    }