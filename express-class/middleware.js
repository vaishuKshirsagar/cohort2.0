const express = require("express")
const app = express();

app.get("/health-checkup", function(req, res){
   const username = req.headers.username;
   const password = req.headers.password;
   const userId = req.headers.userId;

   if(username != "admin" || password != "pass"){
    res.status(400).json({"msg": "Wrong user or password"})
    return
   }

   if(userId != 1 && userId != 2){
    res.status(400).json({msg: "Wrong input"})
    return
   }
   res.json({
    msg: "User validated"
   })
});

app.listen(3001);
