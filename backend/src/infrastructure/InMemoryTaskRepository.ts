import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  save(task: Task): void {
    this.tasks.push(task);
  }

  findAll(): Task[] {
    return [...this.tasks];
  }

  findById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }
}