const express = require("express");
const router = express();


const User = require("../models/userModel");

// going to perform CRUD operation

router.get("/users", async (req, res) => {
  try {
    const users = User.find(); // all the user will fetch async operation
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  console.log("You are inside home page of the website");
  // res.send("This is a homepage")
});


// Create
router.post('/users', async(req, res)=>{
    try{

        const {name, age, weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();
    }catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})
 
module.exports = router;
