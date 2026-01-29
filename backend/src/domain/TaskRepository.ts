import { Task } from './Task';

export interface TaskRepository {
  save(task: Task): void;
  findAll(): Task[];
  findById(id: string): Task | undefined;
}