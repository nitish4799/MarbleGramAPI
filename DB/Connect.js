const mongoose = require("mongoose");

// const uri = "mongodb+srv://NITISH:2KeBdbrHks6yXNCQ@marbleapi.3fyzoib.mongodb.net/MarbleAPI?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connected to db");
    // strictquery error that's why mongoose.set('strictQuery', true);
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;