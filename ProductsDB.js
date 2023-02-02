require("dotenv").config();
const connectDB = require("./DB/Connect");
const Product = require("./models/Products");

const ProductJson = require("./Products.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start();