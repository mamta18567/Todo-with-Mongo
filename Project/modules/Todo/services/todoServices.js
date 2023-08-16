const todoDao = require('../dao/todoDao');

exports.createTodo = async (todoData) => {
    return todoDao.createTodo(todoData);
};

exports.getAllTodos = async () => {
    return todoDao.getAllTodos();
};

exports.updateTodo = async (todoId, updatedData) => {
    return todoDao.updateTodo(todoId, updatedData);
};

exports.deleteTodoById = async (todoId) => {
    return todoDao.deleteTodoById(todoId);
};
