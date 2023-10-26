const mongoose=require('mongoose');
const myschea=mongoose.Schema({
    userId:Number,
    userName:String,
    userEmail:String,
    userSalary:Number,
    city:String,
});
module.exports=mongoose.model('tests',myschea);