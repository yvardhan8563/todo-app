const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [];
let idCounter = 1;

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    const newTask = { id: idCounter++, text, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

