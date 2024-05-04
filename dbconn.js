const mongoose = require("mongoose");

async function mongoConn(url){
    console.log("DB connected---");
    return await mongoose.connect(url);
}


module.exports = {mongoConn};