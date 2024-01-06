// const express = require("express");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
// const app = express();

// const jwtPassword = "123456";

// app.use(express.json())
mongoose.connect(
  "mongodb+srv://vaishnavikshirsagar:root@cluster0.mubdfaz.mongodb.net/youtubeclone",
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password : String,
});

const user = new User({
  name: "Vaishnavi Kshirsagar",
  email: "abc@gmail.com",
  password : "1234",
})

// To send data to database by signup route via server
// app.post("./signup", async function(req, res){
  //   const username = req.body.username;
  //   const password = req.body.password;
  //   const uname = req.body.name;
  //   const email = req.body.email;
  
//To check whether user already exists or not
  //User update user delete
  // const existingUser = await User.findOne({email: username});
  //CRUD => create , read, update, delete
//   if(existingUser){
//     return res.sendStatus(400).send("Username already exists");
//   }

//   const user = new User({
//     username: 'abcs',
//     password : '1234',
//     uname : 'abc xyz',
//     email: 'abc@gmail.com'
//   });

//   user.save();
//   res.json({
//     "msg": "User created successfully"
//   })

// })

// app.listen(3001);



