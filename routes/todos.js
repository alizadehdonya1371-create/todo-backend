const express = require('express');
const router = express.Router();

// داده‌های موقت برای تست
let todos = [
{ id: 1, task: "Finish homework", done: false },
{ id: 2, task: "Buy groceries", done: true }
];

// GET /todos → گرفتن تمام tasks
router.get('/', (req, res) => {
res.json(todos);
});

// POST /todos → اضافه کردن task جدید
router.post('/', (req, res) => {
const newTask = {
id: todos.length + 1,
task: req.body.task,
done: false
};
todos.push(newTask);
res.status(201).json(newTask);
});

// PUT /todos/:id → ویرایش task
router.put('/:id', (req, res) => {
const id = parseInt(req.params.id);
const todo = todos.find(t => t.id === id);
if (todo) {
todo.task = req.body.task !== undefined ? req.body.task : todo.task;
todo.done = req.body.done !== undefined ? req.body.done : todo.done;
res.json(todo);
} else {
res.status(404).json({ message: "Task not found" });
}
});

// DELETE /todos/:id → حذف task
router.delete('/:id', (req, res) => {
const id = parseInt(req.params.id);
todos = todos.filter(t => t.id !== id);
res.json({ message: "Task deleted" });
});

module.exports = router;