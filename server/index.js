const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

const mongoose = require('mongoose');
// const { application } = require("express");

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))



const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const { Schema } = mongoose;

const blogSchema = new  Schema({
  name: String, // String is shorthand for {type: String}
  age: String,
  imageURL: String

  
});
const Blog = mongoose.model('Blog', blogSchema);

// post
app.post("/api/artists",async(req,res)=>{
    const{name,age,imageURL}=req.body;
    const newArtist=new Blog({
        name:name,
        age:age,
        imageURL:imageURL
    })
    await newArtist.save();
    res.status(201).send("created")
})
// get all
app.get("/api/artists",async(req,res)=>
{const {name}=req.query;
const artists=await Blog.find();
console.log(artists);
if(name===undefined){
    res.status(200).send({
        data:artists
    });

}
else {
    res.status(200).send({
        data:artists
    })
}})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
