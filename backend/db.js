const mongoose = require("mongoose")
require('dotenv').config();

mongoose.connect(ss.env.MY_DB_URL)
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports={
    todo
}   