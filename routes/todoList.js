const express = require('express');
const router = express.Router();
const todoListControllers = require('../controllers/todoList');
const passport = require('passport');

const authentication = passport.authenticate("jwt", {
    session: false
})

router.get('/', authentication, todoListControllers.getTodoList);
router.post('/', authentication, todoListControllers.addTodoList);
router.put('/:id', authentication, todoListControllers.updateTodoList);
router.delete('/:id', authentication, todoListControllers.deleteTodoList);

module.exports = router;