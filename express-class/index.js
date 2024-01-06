//Creating a http server
//express
//node default library=> no

const express = require("express");
const app = express()

function calculateSum(n){
    let ans=0;
    for(let i=0; i<=n; i++){
        ans=ans+i;
    }
    return ans;
}

app.get("/", function(req, res){
    const n= req.query.n;
    const sum = calculateSum(n);
    res.send(sum.toString());
    // res.send("Hello to server");
})

app.listen(3001);