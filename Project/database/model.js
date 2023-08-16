const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;