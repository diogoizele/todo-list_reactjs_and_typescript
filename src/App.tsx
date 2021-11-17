import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/Todos/TodoList";
import { TodosProvider } from "./context/todo-context";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#212121",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#CC0000",
    color: "white",
    "&:hover": { backgroundColor: "#DD0000" },
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <TodosProvider>
      <Container maxWidth="xl" className={classes.container}>
        <NewTodo />
        <TodoList />
      </Container>
    </TodosProvider>
  );
};

export default App;
