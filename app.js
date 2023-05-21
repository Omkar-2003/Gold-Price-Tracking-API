const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const DB=process.env.DATABASE;
const port = process.env.PORT || 5000;
const goldroute=require("./routes/goldtracker");


const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb+srv://omkar:OMKAR@cluster0.duiwp6o.mongodb.net/GoldTracker", {
      useNewUrlParser: true,
      useUnifiedTopology: true
 })
  .then(console.log("Connected to MongoDB"))
   .catch((err) => console.log(err));

   app.use("/gold",goldroute);


app.listen(5000,function(){
  console.log("Server start at port 5000");
})
