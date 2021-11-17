import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";

import Todo from "../../models/todo";
import TodosContext from "../../context/todo-context";

const useStyles = makeStyles({
  todoItem: {
    boxShadow: "0 3px 10px 1px #cecece",
    borderRadius: "4px",
    listStyle: "none",
    padding: "1rem",
    width: "20rem",
    margin: "1rem",
    position: "relative",

    "@media (max-width: 800px)": {
      width: "100%",
    },

    "& button": {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      backgroundColor: "#cc0000",
      height: "1.5rem",
      width: "1.5rem",
      boxSizing: "border-box",
      border: "none",
      fontSize: "1rem",
      display: "flex",
      justifyContent: "center",
      color: "white",
      paddin: "1rem",
      borderRadius: "2px",
      cursor: "pointer",
      transition: "0.3s",

      "&:hover": {
        backgroundColor: "#af0000",
      },
    },

    "& h4": {
      fontSize: "1.3rem",
      color: "#212121",
      marginTop: "0",
    },

    "& span": {
      position: "absolute",
      right: "1rem",
      bottom: "1rem",
      fontSize: "1rem",
      color: "#666",
      marginTop: "0",
      fontStyle: "italic",
    },
  },
  todoCompleted: {
    backgroundColor: "#AAD6A0",

    "& h4, & p, & span": {
      textDecoration: "line-through",
    },

    "& span": {
      color: "#aaa",
    },
  },
});

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const { title, description, estimatedTime, id, status } = props.todo;
  const { removeTodo, toggleTodo } = useContext(TodosContext);

  const classes = useStyles();

  return (
    <li
      id={id}
      className={`${classes.todoItem} ${
        status === true ? classes.todoCompleted : ""
      }`}
      onClick={toggleTodo.bind(null, id, status)}
    >
      <button onClick={removeTodo.bind(null, id)}>✖</button>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{estimatedTime}</span>
    </li>
  );
};

export default TodoItem;
