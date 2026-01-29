import { CreateTask } from '../src/application/CreateTask';
import { InMemoryTaskRepository } from '../src/infrastructure/InMemoryTaskRepository';

describe('CreateTask use case', () => {
  it('should create and persist a task', () => {
    const repository = new InMemoryTaskRepository();
    const createTask = new CreateTask(repository);

    const task = createTask.execute('Comprar leche');

    expect(task.name).toBe('Comprar leche');
    expect(repository.findAll().length).toBe(1);
  });

  it('should throw error when name is empty', () => {
    const repository = new InMemoryTaskRepository();
    const createTask = new CreateTask(repository);

    expect(() => createTask.execute('')).toThrow();
  });
});