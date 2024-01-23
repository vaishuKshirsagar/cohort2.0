const mongoose = require("mongoose")

//mongodb+srv://vaishnavikshirsagar:root@cluster0.mubdfaz.mongodb.net/todoapp

mongoose.connect('mongodb+srv://vaishnavikshirsagar:root@cluster0.mubdfaz.mongodb.net/todoapp')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}