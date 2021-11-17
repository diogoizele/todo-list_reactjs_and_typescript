import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";

import TodosContext from "../../context/todo-context";
import TodoItem from "./TodoItem";

const useStyles = makeStyles({
  todoList: {
    padding: "2rem",
    marginTop: "2rem",
    borderRadius: "6px",
    boxShadow: "0 0 8px 1px RGBA(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TodoList: React.FC = () => {
  const { todos } = useContext(TodosContext);

  const classes = useStyles();

  return (
    <React.Fragment>
      {todos.length > 0 && (
        <ul className={classes.todoList}>
          {todos.map((item, index) => {
            return <TodoItem key={index} todo={item} />;
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

export default TodoList;
