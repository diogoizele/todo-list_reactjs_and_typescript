import React, { useContext, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Todo from "../../models/todo";
import TodosContext from "../../context/todo-context";
import { Box } from "@material-ui/core";

interface InputState {
  value: string;
  isValid: boolean | null;
  error: string;
}

interface InputAction {
  value: string;
  type: "INPUT_CHANGE" | "INPUT_BLUR" | "FORM_SUBMIT" | "INPUT_CLEAR";
}

const useStyles = makeStyles({
  form: {
    padding: "2rem",
    marginTop: "2rem",
    borderRadius: "6px",
    boxShadow: "0 0 8px 1px RGBA(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    textAlign: "center",

    "& h1": {
      marginTop: 0,
      fontWeight: 300,
      fontSize: "3rem",
      color: "#212121",
    },

    "@media (max-width: 800px)": {
      width: "80%",
      padding: '1rem',

      "& h1": {
        marginTop: 0,
        fontWeight: 300,
        fontSize: "2rem",
        color: "#212121",
      },
    },
  },

  textField: {
    minWidth: "10rem",
    maxWidth: "30rem",
    width: "80%",
    margin: "1rem 0 1rem 0",

    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
});

const initialState: InputState = {
  value: "",
  isValid: null,
  error: "",
};

const titleReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      if (!action.value) {
        return {
          value: action.value,
          isValid: false,
          error: "O campo é obrigatório!",
        };
      }
      return { value: action.value, isValid: true, error: "" };
    case "INPUT_BLUR":
      if (action.value.trim() === "") {
        return {
          value: action.value,
          isValid: false,
          error: "O campo é obrigatório.",
        };
      }
      return state;
    case "INPUT_CLEAR":
      return { value: action.value, isValid: null, error: "" };
    case "FORM_SUBMIT":
      if (state.value.trim() === "") {
        return {
          value: state.value,
          isValid: false,
          error: "O campo é obrigatório.",
        };
      }
      return { value: state.value, isValid: true, error: "" };
    default:
      return state;
  }
};

const descriptionReducer = (state: InputState, action: InputAction) => {
  const range = 350;
  switch (action.type) {
    case "INPUT_CHANGE":
      if (action.value.length > range) {
        return {
          value: action.value,
          isValid: false,
          error: `O campo pode conter apenas ${range} caracteres.`,
        };
      }
      return { value: action.value, isValid: true, error: "" };
    case "FORM_SUBMIT":
      if (state.value.length > range) {
        return {
          value: state.value,
          isValid: false,
          error: `O campo pode conter apenas ${range} caracteres.`,
        };
      }
      return { value: state.value, isValid: true, error: "" };
    case "INPUT_CLEAR":
      return { value: action.value, isValid: null, error: "" };

    default:
      return state;
  }
};

const estimatedTimeReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "INPUT_BLUR":
      return { value: action.value, isValid: true, error: "" };
    case "INPUT_CHANGE":
      return { value: action.value, isValid: true, error: "Exemplo: 2 Horas" };
    case "INPUT_CLEAR":
      return { value: action.value, isValid: null, error: "" };
    default:
      return state;
  }
};

const NewTodo: React.FC = () => {
  const { addTodo, formIsVisible, showForm, closeForm } =
    useContext(TodosContext);
  const [titleState, dispatchTitle] = useReducer(titleReducer, initialState);
  const [descriptionState, dispatchDescription] = useReducer(
    descriptionReducer,
    initialState
  );
  const [estimatedTimeState, dispatchEstimatedTime] = useReducer(
    estimatedTimeReducer,
    initialState
  );

  const classes = useStyles();

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchTitle({ type: "INPUT_CHANGE", value: event.target.value });
  };

  const changeDescriptionHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchDescription({ type: "INPUT_CHANGE", value: event.target.value });
  };

  const changeEstimatedTimeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchEstimatedTime({ type: "INPUT_CHANGE", value: event.target.value });
  };

  const validateTitleHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatchTitle({ type: "INPUT_BLUR", value: event.target.value });
  };

  const blurEstimatedTimeHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    dispatchEstimatedTime({ type: "INPUT_BLUR", value: event.target.value });
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo = new Todo(
      titleState.value,
      descriptionState.value,
      estimatedTimeState.value
    );

    if (!titleState.value) {
      dispatchTitle({ type: "FORM_SUBMIT", value: "" });
      return;
    }

    if (descriptionState.value.length > 350) {
      dispatchDescription({ type: "FORM_SUBMIT", value: "" });
      return;
    }

    addTodo(newTodo);
    clearFormHandler();
  };

  const clearFormHandler = () => {
    dispatchTitle({ type: "INPUT_CLEAR", value: "" });
    dispatchDescription({ type: "INPUT_CLEAR", value: "" });
    dispatchEstimatedTime({ type: "INPUT_CLEAR", value: "" });
    closeForm();
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <h1>Lista de Tarefas</h1>
      {formIsVisible ? (
        <React.Fragment>
          <TextField
            className={classes.textField}
            variant="outlined"
            color="primary"
            error={titleState.isValid === false}
            id="task-title"
            label="Título"
            value={titleState.value}
            onChange={changeTitleHandler}
            onBlur={validateTitleHandler}
            helperText={titleState.error}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            color="primary"
            error={descriptionState.isValid === false}
            id="task-title"
            label="Descrição"
            multiline
            rows={4}
            value={descriptionState.value}
            onChange={changeDescriptionHandler}
            helperText={descriptionState.error}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            color="primary"
            id="task-estimated-time"
            label="Tempo Estimado"
            value={estimatedTimeState.value}
            onChange={changeEstimatedTimeHandler}
            onBlur={blurEstimatedTimeHandler}
            helperText="Exemplo: 2 Horas"
          />

          <Box
            sx={{
              minWidth: "100%",
              flexWrap: "wrap",
              display: "flex",
              height: "6rem",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button type="submit" color="primary" variant="contained">
              Criar Tarefa
            </Button>
            <Button
              type="reset"
              onClick={clearFormHandler}
              color="secondary"
              variant="contained"
            >
              Cancelar
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <Button
          onClick={showForm}
          color="primary"
          variant="contained"
          size="large"
        >
          Nova Tarefa
        </Button>
      )}
    </form>
  );
};

export default NewTodo;
