import express from 'express';
import { InMemoryTaskRepository } from '../infrastructure/InMemoryTaskRepository';
import { CreateTask } from '../application/CreateTask';
import { CompleteTask } from '../application/CompleteTask';

const app = express();
app.use(express.json());

// Dependencias (manual DI, simple y explícito)
const repository = new InMemoryTaskRepository();
const createTask = new CreateTask(repository);
const completeTask = new CompleteTask(repository);

// POST /tasks
app.post('/tasks', (req, res) => {
  try {
    const { name } = req.body;
    const task = createTask.execute(name);
    res.status(201).json(task);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH /tasks/:id/complete
app.patch('/tasks/:id/complete', (req, res) => {
  try {
    const task = completeTask.execute(req.params.id);
    res.json(task);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

// GET /tasks
app.get('/tasks', (_req, res) => {
  res.json(repository.findAll());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
