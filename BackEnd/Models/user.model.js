const mongoose =require("mongoose")


const UserSchema=mongoose.Schema({
    name :{type:String,require:true},
    age :{type:Number,require:true},
    address :{type:String,require:true},
    email :{type:String,require:true},
    city :{type:String,require:true},
    phone :{type:Number,require:true},
    password :{type:String,require:true},
},{
    versionKey:false
})





const UserModel=mongoose.model("user",UserSchema)

module.exports={
    UserModel
}