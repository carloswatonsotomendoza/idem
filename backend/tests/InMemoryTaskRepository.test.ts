import { InMemoryTaskRepository } from '../src/infrastructure/InMemoryTaskRepository';
import { Task } from '../src/domain/Task';

describe('InMemoryTaskRepository', () => {
  it('should save and retrieve tasks', () => {
    const repo = new InMemoryTaskRepository();
    const task = new Task('1', 'Aprender Clean Architecture');

    repo.save(task);

    const tasks = repo.findAll();
    expect(tasks.length).toBe(1);
    expect(tasks[0].name).toBe('Aprender Clean Architecture');
  });
});