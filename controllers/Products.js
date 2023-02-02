const Product = require("../models/Products")

const getAllProducts = async (req , res) =>{

    const {city , price , Category , property_type} = req.query;
    const queryObject = {};

    if (city){
        queryObject.city = {$regex:city, $options:"i"};
    }
    if (Category){
        queryObject.Category = {$regex:Category, $options:"i"};
    }
    if (price){
        queryObject.price = price;
    }
    if (property_type){
        queryObject.property_type = {$regex:property_type, $options:"i"};
    }

    console.log(queryObject);

    const myData = await Product.find(queryObject);
    res.status(200).json({myData});
    
    // const myData = await Product.find(req.query);
    // res.status(200).json({myData});
};

const getAllProductsTesting = async (req , res) =>{
   const myData = await Product.find(req.query).sort("price");
    res.status(200).json({myData});
};

module.exports = { getAllProducts, getAllProductsTesting};