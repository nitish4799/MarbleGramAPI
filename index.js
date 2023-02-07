require("dotenv").config();
const express = require('express');
const app = express();
const products_routes = require("./routes/Products")
const connectDB = require("./DB/Connect")

const PORT = process.env.PORT || 5000;

app.get("/" , (req , res) =>{
    res.send("Hi, I am live");
});

app.use("/api/products" , products_routes);

connectDB(process.env.MONGODB_URL);
app.listen(PORT , () =>{
    console.log(`${PORT} Yes I am connected`);
});

app.get("/",(req,res)=>{
    res.json({message:`successfully running on port  ${PORT}`});
})