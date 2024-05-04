const express = require("express");
const app = express();
const {mongoConn} = require("./dbconn");
const restaurent = require("./routes/restaurent");

mongoConn("mongodb://127.0.0.1:27017/restaurent_details")
const PORT = process.env.PORT || 3000;

app.use("/restaurent",restaurent)

app.listen(PORT , ()=>{
    console.log(`Server running on Port ${PORT}`)
})