import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class CreateTask {
  constructor(private readonly repository: TaskRepository) {}

  execute(name: string): Task {
    const task = new Task(
      crypto.randomUUID(),
      name
    );

    this.repository.save(task);
    return task;
  }
}
