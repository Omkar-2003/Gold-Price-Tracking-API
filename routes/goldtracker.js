const router = require('express').Router();
const GoldSchema = require("../model/Goldschema");

router.get("/mockgoldprice", async (req, res) => {

  function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(200, 2000);

console.log(randomNumber);

  res.status(200).json({
    price: 5700 + randomNumber,
    msg: "Price of 1 gram Gold"
  });

});



router.post("/UpdateItemPrice", async (req, res) => {

  const item = req.body.item;
  const gram = req.body.gram;

  async function getGoldPrice() {
    const response = await fetch("http://localhost:5000/gold/mockgoldprice");
    const json = await response.json();
    const value = json.price;
    return value;
  }

  const value = await getGoldPrice();

  console.log(GoldSchema());

  const Entity = new GoldSchema({
    item: item,
    gram: gram,
    timerange:20,
    originalprice: gram * value,
    bestprice: (gram * value) - 1000


  });

  try {
    Entity.save();
    res.status(200).json({
      data: Entity,
      msg: "Data Successfully Added"
    });

  } catch (err) {
    res.status(500).json({
      msg: "There is some error while saving a Entity"
    })
  }




});


router.post("/updateprice/:updateprice", async (req, res) => {
  const item = req.body.item;

  try {
    const ans = await GoldSchema.updateOne({
      item: item
    }, {
      $set: {
        originalprice: req.params.updateprice
      }
    });
    res.status(200).json({
      data: ans,
      msg: `Price of item ${item} has been updated to ${req.params.updateprice}`
    });


  } catch (err) {
    res.status(500).json({
      err: err
    });
  }


});




router.get("/retriveitems/:_id", async (req, res) => {
  if (req.params._id)
    try {
      const response = await GoldSchema.find({
        _id: req.params._id
      }).exec();
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }


});



router.get("/retriveitems", async (req, res) => {

  try {
    const response = await GoldSchema.find().exec();
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }

});



router.get("/retriveitems/time/:timerange", async (req, res) => {

  try {
    const response = await GoldSchema.find({
      timerange: req.params.timerange
    }).exec();

    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }

});


router.get("/updatedailyprice", async (req, res) => {


  async function getGoldPrice() {
    const response = await fetch("http://localhost:5000/gold/mockgoldprice");
    const json = await response.json();
    const value = json.price;
    return value;
  }

  const price = await getGoldPrice();


try{
  const goldItems = await GoldSchema.updateMany({}, {
    "$set": {
      currentvalue:   "$gram" * price
    }
  });




  res.status(200).json({

    msg: 'Gold prices updated successfully!'
  })

  console.log('Gold prices updated successfully!');
} catch (err) {

  console.error('Error updating gold prices:', err);
  res.status(200).json({
    msg: 'Error updating gold prices:',
    err: err
  });

}

});





module.exports = router;
