const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/demo').then(()=>{
    console.log('database connected!');
}).catch((err)=>{
    console.log(err);
});

//use model
const user=require('./model');

const app=express();

//use middleware
app.use(express.json());
app.use(cors());

//api
app.get('/list',async(req,res)=>{
    let data=await user.find({});
    res.send(data);
});

app.post('/list',async(req,res)=>{
     let data=new user(req.body);
     let result=await data.save();
     res.send(result);
})

app.put('/list/:userId',async(req,res)=>{
    let data=await user.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})

app.delete('/list/:userId',async(req,res)=>{
    let data=await user.deleteOne(req.params);
    res.send(data);
})

app.listen(4000,()=>{
    console.log('server is running!');
});
