const express = require('express');
const app = express();
const PORT = 3000;

// اضافه کردن این خط برای دریافت داده JSON
app.use(express.json());

// مسیرهای To-Do
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// مسیر اصلی
app.get('/', (req, res) => {
res.send('Hello To-Do Backend!');
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});