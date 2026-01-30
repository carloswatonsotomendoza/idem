import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';
import { randomUUID } from "crypto";

export class CreateTask {
  constructor(private readonly repository: TaskRepository) {}

  execute(name: string): Task {
    const task = new Task(
      randomUUID(),
      name
    );

    this.repository.save(task);
    return task;
  }
}
