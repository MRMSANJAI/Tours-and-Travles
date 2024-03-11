const port = 4000;
const express = require("express");
const app = express();
const mongoose =require("mongoose");
const jwt =require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors =require("cors");
const { log } = require("console");


app.use(express.json());
app.use(cors());

//  Database connection with MongoDB
mongoose.connect("mongodb+srv://mrmsanjai:1234567890@cluster0.hj18ctf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/e-commerce")

//API Creation

app.get("/",(req ,res)=>{
    res.send("Express App is Running")
})

//Image storage
 
const storage = multer.diskStorage({
    destination:'./uplode/images',
    filename:(req,file,cb)=>{
         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uplode = multer({storage:storage})

//Creat uplode endpoint
app.use('/images',express.static('uplode/images'))

app.post("/uplode",uplode.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products

const Product =mongoose.model("Product",{
    id:{
        type : Number,
        required:true,

    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avaliable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
       let last_product_array = products.slice(-1);
       let last_product =last_product_array[0];
       id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for Deleting Products

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log('Removed')
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating API for get All Products
app.get("/allproducts",async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched")
    res.send(products)
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port" +port)
    }else{
        console.log("Error:"+error)
    }
})