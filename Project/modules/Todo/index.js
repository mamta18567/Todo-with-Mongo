const controller = require('./controllers/todoController.js')
const todoValidator = require('../Todo/validators/todoValidator.js')
console.log("routes")

router.post('/create/list',todoValidator.nameValidator,controller.createList)
router.get('/show/list',controller.getList)
router.put('/update/list/:id',todoValidator.nameValidator,controller.updateList);
router.delete('/delete/singleTodo/:id',controller.deleteTodo)