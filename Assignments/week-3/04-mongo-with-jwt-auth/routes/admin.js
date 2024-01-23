const { Router } = require("express");
const { Admin, User,Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken"); 

// Admin Routes

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //Check if user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })
        res.json({
            msg: "Admin created successfully"
        })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    }) 
    //Check if user with this username already exists
   if(user) {
       const token = jwt.sign({
       username
      }, JWT_SECRET);
      res.json({
       token
      })
   } else{
    res.status(411).json({
        msg: "Incorrect email and pass"
    })
   }
   //token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnJ5c3R5bGVzIiwiaWF0IjoxNzA1NTY2ODMxfQ.1wy2SYdA38CXbff270kDrV8Vw2QTlGFoHj2zhvDi1ak
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)
    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

module.exports = router;