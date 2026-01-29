export class Task {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly completed: boolean = false
  ) {
    if (!name || name.trim().length === 0) {
      throw new Error('Nombre de tarea no puede estar vacío');
    }
  }

  complete(): Task {
    return new Task(this.id, this.name, true);
  }
}