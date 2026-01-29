import { Task } from '../src/domain/Task';

describe('Task entity', () => {
  it('should create a task with a valid name', () => {
    const task = new Task('1', 'Comprar pan');

    expect(task.name).toBe('Comprar pan');
    expect(task.completed).toBe(false);
  });

  it('should not allow empty task name', () => {
    expect(() => new Task('1', '')).toThrow();
  });

  it('should mark task as completed', () => {
    const task = new Task('1', 'Comprar pan');
    const completedTask = task.complete();

    expect(completedTask.completed).toBe(true);
  });
});
