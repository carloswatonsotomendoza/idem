import { TaskRepository } from '../domain/TaskRepository';
import { Task } from '../domain/Task';

export class CompleteTask {
  constructor(private readonly repository: TaskRepository) {}

  execute(taskId: string): Task {
    const task = this.repository.findById(taskId);

    if (!task) {
      throw new Error('Task not found');
    }

    const completedTask = task.complete();
    this.repository.save(completedTask);

    return completedTask;
  }
}
