import { createContext, useEffect, useState } from "react";
import Todo from "../models/todo";

type TodoContextObject = {
  todos: Todo[];
  formIsVisible: boolean;
  showForm: () => void;
  closeForm: () => void;
  addTodo: (newTodo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string, status: boolean) => void;
};

const TodosContext = createContext<TodoContextObject>({
  todos: [],
  formIsVisible: false,
  showForm: () => {},
  closeForm: () => {},
  addTodo: (newTodo: Todo) => {},
  removeTodo: (id: string) => {},
  toggleTodo: (id: string, status: boolean) => {},
});

export const TodosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const localStorageTodos = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    );
    setTodos(localStorageTodos);
  }, []);

  const addTodoHandler = (newTodo: Todo) => {
    setTodos((prevTodos: Todo[]) => {
      const newArray = prevTodos.concat(newTodo);
      setTodoInLocalStorage(newArray);
      return newArray;
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos: Todo[]) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    setTodoInLocalStorage(todos);
  };

  const toggleTodoHandler = (id: string, status: boolean) => {
    setTodos((prevTodos: Todo[]) => {
      const todo = prevTodos.find((todo) => todo.id === id);
      const todoIndex: number = prevTodos.findIndex((todo) => todo.id === id);

      const newTodo = new Todo(
        todo?.title,
        todo?.description,
        todo?.estimatedTime
      );

      newTodo.status = !status;
      newTodo.id = id;

      prevTodos[todoIndex] = newTodo;
      setTodoInLocalStorage(prevTodos);
      return [...prevTodos];
    });
  };

  // console.log(todos);

  const showFormHandler = () => {
    setFormIsVisible(true);
  };

  const closeFormHandler = () => {
    setFormIsVisible(false);
  };

  const setTodoInLocalStorage = (todo: Todo[]) => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  };

  const initialState: TodoContextObject = {
    todos: todos,
    formIsVisible,
    showForm: showFormHandler,
    closeForm: closeFormHandler,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleTodo: toggleTodoHandler,
  };

  return (
    <TodosContext.Provider value={initialState}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
