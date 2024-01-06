const express = require("express");
const app = express()
const port = 3000
 

//To create new route handler
// app.get("/route-handler", function(req, res){
//     //header, body, query parameters
//     //do machine learning model
//     res.json({
//         name: "vaishnavi",
//         age: 20
//     })
// })

//fs.readFile("path", "utf-8", ())
app.get('/', function(req, res) {

    //db call
  res.send('Server Created')
})

/*Task 
    Create http server in c from scratch
    Create todo app to store data in a file
    Create a rust/golang/java http server
*/

//middleware
// app.post('/conversation', (req, res)=>{
//     console.log(req.body)
//     res.send({
//         msg: "Connection established"
//     })
// })

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})