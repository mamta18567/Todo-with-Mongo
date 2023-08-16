const Todo = require('../../../database/model.js');

exports.createTodo = async (todoData) => {
    const newTodo = new Todo(todoData);
    return newTodo.save();
};

exports.getAllTodos = async () => {
    return Todo.find();
};

exports.getTodoById = async (todoId) => {
    return Todo.findById(todoId);
};

exports.updateTodo = async (todoId, updatedData) => {
    return Todo.findByIdAndUpdate(todoId, updatedData, { new: true });
};

exports.deleteTodoById = async (todoId) => {
    return Todo.findByIdAndDelete(todoId);
};
