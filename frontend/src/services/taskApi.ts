const API_URL = 'http://localhost:3000';

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
}

export async function createTask(name: string): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  return res.json();
}

export async function completeTask(id: string): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks/${id}/complete`, {
    method: 'PATCH'
  });
  return res.json();
}
