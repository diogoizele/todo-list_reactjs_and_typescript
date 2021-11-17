class Todo {
  id: string;
  title: string | undefined;
  description: string | undefined;
  estimatedTime: string | undefined;
  status: boolean;

  constructor(
    title: string | undefined,
    description: string | undefined,
    estimatedTime: string | undefined
  ) {
    this.title = title;
    this.description = description;
    this.estimatedTime = estimatedTime;
    this.id = new Date().toISOString();
    this.status = false;
  }
}

export default Todo;
