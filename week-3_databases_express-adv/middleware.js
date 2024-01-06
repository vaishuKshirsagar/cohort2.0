const express= require('express');

const app= express();


//function returns a boolean if the age of person is more than 14
//Condition to check whether person can take a ride or not based on age
function isOldEnough(age){
    if(age>=14){
        return true;
    }
    return false;
}

//Middleware function 
function isOldEnoughMiddleware(req, res, next){
    const age= req.query.age;
    if(age>=14){
        next()
    } else{
        res.json({
            msg: "Sorry you are under age"
        })
    }
}

//if middleware is supposed to call in every route below instead of introducing in every route
//app.use(isOldEnoughMiddleware)

app.get("/ride2", isOldEnoughMiddleware, function(req, res){
        res.json({
            msg: "You have successfully riden the ride1"
        })
})
app.get("/ride1", isOldEnoughMiddleware, function(req, res){
        res.json({
            msg: "You have successfully riden the ride1"
        })
})

app.listen(3001);