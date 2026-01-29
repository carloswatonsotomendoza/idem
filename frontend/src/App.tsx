import { useEffect, useState } from 'react';
import { fetchTasks, createTask, completeTask} from './services/taskApi';
import type { Task } from './services/taskApi';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;
    const task = await createTask(name);
    setTasks(prev => [...prev, task]);
    setName('');
  };

  const handleComplete = async (id: string) => {
    const updated = await completeTask(id);
    setTasks(prev =>
      prev.map(t => (t.id === id ? updated : t))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do</h1>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.completed ? '✅' : '⬜'} {task.name}
            {!task.completed && (
              <button onClick={() => handleComplete(task.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
