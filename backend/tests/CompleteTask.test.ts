import { CompleteTask } from '../src/application/CompleteTask';
import { CreateTask } from '../src/application/CreateTask';
import { InMemoryTaskRepository } from '../src/infrastructure/InMemoryTaskRepository';

describe('CompleteTask use case', () => {
  it('should mark task as completed', () => {
    const repository = new InMemoryTaskRepository();
    const createTask = new CreateTask(repository);
    const completeTask = new CompleteTask(repository);

    const task = createTask.execute('Estudiar para entrevista');
    const completed = completeTask.execute(task.id);

    expect(completed.completed).toBe(true);
  });

  it('should throw error if task does not exist', () => {
    const repository = new InMemoryTaskRepository();
    const completeTask = new CompleteTask(repository);

    expect(() => completeTask.execute('invalid-id')).toThrow();
  });
});
