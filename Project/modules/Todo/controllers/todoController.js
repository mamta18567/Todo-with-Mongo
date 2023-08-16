const todoService = require('../services/todoServices');
const todo = require('../../../database/model.js')
const logging = require('../../../logging/logging.js')


exports.getList = async(req,resp)=>{
    try{
        const response = await todoService.getAllTodos();
        resp.json(response);
    }catch(error){
        console.log(error);
    }
}

exports.createList = async (req, resp) => {
    console.log("Adding to a List !!");
    const todoList = new todo({
        firstName:req.body.firstName,
        lastName :req.body.lastName
    })
    try{
        const saveList = await todoService.createTodo(todoList);
        resp.json(saveList)
    }catch(err){
        resp.status(400).send(err);
    }   
}

exports.updateList = async (req, resp) => {
    try{
        const todoList = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        const todoId = req.params.id
        const updatedData = todoService.updateTodo(todoId,todoList)
        resp.json(updatedData)
    }catch(error){
        console.log(error);
    }
}

exports.deleteTodo = async (req, resp) => {
    try{
        const todoToBeremoved = req.params.id;
        const productToBeremoved = await todoService.deleteTodoById(todoToBeremoved);
        resp.json(productToBeremoved);
    }catch(error){
        console.log(error);
    }
}