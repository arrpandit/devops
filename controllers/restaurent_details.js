const {Address, UserReview, Restaurant} = require("../models/restaurent");

async function allrestro(req,res){
    const allrestaurent = await Restaurant.find({});
    
    return res.send(allrestaurent).status(200);
}

async function addRestro(req,res){

}


module.exports = {
    allrestro,
    addRestro
}