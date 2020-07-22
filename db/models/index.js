const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URL;

const dbConnect = () => {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    mongoose.connection.on("connected", () => {
        console.log("Connected!!")
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Could not connect!!")
        process.exit(0)
    })

    mongoose.connection.on("error", () => {
        console.log("Error in Connecting to Database")
        process.exit(0)
    })
}

module.exports = {
    dbConnect
}