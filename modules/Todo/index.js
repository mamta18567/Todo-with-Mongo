const controller = require('./controllers/todoController.js')

console.log("routes")

router.post('/create/list',controller.createList)
router.get('/show/list',controller.getList)
router.put('/update/list/:id',controller.updateList);
router.delete('/delete/singleTodo/:id',controller.deleteTodo)