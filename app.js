var express = require("express");
require("dotenv").config();
var blogRouter = require("./routers/blog_router");
var db = require("./db/models")


var app = express();
db.dbConnect();
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(blogRouter);



app.listen(PORT, () => {
    console.log("server is running on the port " + PORT);
})