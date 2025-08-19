const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { NovaUser, Account } = require('../db'); // ✅ FIXED
const { Signinschema, Signupschema } = require('../zod');
const userMiddleware = require('./middleware');
const router = express.Router();


router.post("/signup" , async(req,res) => {
  const {success} = Signupschema.safeParse(req.body);
  if (!success) {
    return res.status(403).json({
      message:"Zod Validation failed"
    })
  }
  const {username , firstname , lastname , password} = req.body;

  const existinguser = await NovaUser.findOne({
    username
  })
  if (existinguser) {
    return res.status(403).json({
      message:"User already present"
    })
  }

   try {
    let hashedpass = await bcrypt.hash(password,6)
    const user = await NovaUser.create({
      username,
      lastname,
      firstname,
      password:hashedpass
    })

    const userId = user._id;

    await Account.create({
      userId,
      balance: 1000 + Math.random() * 9000
    })
    
    const token = jwt.sign({
      userId
    },process.env.JWT_SECRET)
    res.json({
     Message : "Siignup succesful",
     token,
     firstname
  })
   } catch (error) {
    return res.status(403).json({
      message:"Signup failed failed"
    })
   }
  
})

router.post("/signin" , async(req,res) => {
  const {success} = Signinschema.safeParse(req.body);
 
  if (!success) {
    return res.status(403).json({
      message:"Zod Validation failed"
    })
  }

   const{username , password} = req.body

   const existinguser = await NovaUser.findOne({
    username
  })
  if (!existinguser) {
    return res.status(403).json({
      message:"User not already present"
    })
  }

  const passcomapre = await bcrypt.compare(password, existinguser.password);
  if (passcomapre) {
    const token = jwt.sign({
      userId:existinguser._id
    }, process.env.JWT_SECRET)
    res.json({
      message:"sigin successful",
      token
    })
  }
  else{
    return res.status(411).json({
      message: "Wrong password"
    })
  }
})

router.get('/bulk', userMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await NovaUser.find({
      _id: { $ne: req.userId }, // exclude logged-in user
      $or: [
        { firstname: { $regex: filter, $options: "i" } }, // case-insensitive
        { lastname: { $regex: filter, $options: "i" } }
      ]
    });

    res.json({
      user: users.map(user => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id
      }))
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/demo", async (req, res) => {
  try {
    const random= Math.floor(Math.random() * 100000);
    const username = `guest${random}`;
    const firstname = "Guest";
    const lastname = `User${random}`;

    
    const guestUser = await NovaUser.create({
      username,
      firstname,
      lastname
    });

    
    await Account.create({
      userId: guestUser._id,
     balance: 1000 + Math.random() * 9000

    });

    // Generate token
    const token = jwt.sign(
      { userId: guestUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } 
    );

    res.json({
      message: "Demo account",
      username,
      firstname,
      lastname,
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create demo account" });
  }
});




module.exports=router