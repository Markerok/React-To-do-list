import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Container,
  IconButton,
  Button,
  StyledEngineProvider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./TodoListStyle.js";
import "./styled.css";

const Todolist = (props) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [keyAmount, setKeyAmount] = useState(21);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  const addTask = () => {
    if (value !== "") {
      setValue("");
      setList(
        list.concat({
          title: value,
          id: keyAmount,
          completed: false,
        })
      );
      setKeyAmount((prev) => prev + 1);
    } else {
      alert("Enter a task!");
    }
  };

  const deleteList = (key) => {
    const res = [...list].filter((elem) => elem.id !== key);
    setList(res);
    setKeyAmount((prev) => prev + 1);
  };

  const getChecked = (key) => {
    const res = [...list];
    res.forEach((elem) => {
      if (elem.id === key) {
        elem.completed = !elem.completed;
      }
    });
    setList(res);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Container className={classes.container}>
        <h3>TO-DO LIST</h3>
        <TextField
          className={classes.inputText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
          variant="outlined"
          label="what you want to do"
          type="text"
        ></TextField>
        <Button onClick={addTask} variant="contained">
          Add
        </Button>
        <div className={classes.list_wrapper}>
          <List className={classes.List}>
            {list.map((el) => {
              return (
                <ListItem
                  className={el.completed ? classes.activeRow : classes.ListItem}
                  key={el.id}
                  secondaryAction={
                    <IconButton
                      onClick={() => deleteList(el.id)}
                      edge="end"
                      aria-label="delete"
                    >
                      <Delete />
                    </IconButton>
                  }
                >
                  <Checkbox
                    className={classes.checkbox}
                    icon={<FavoriteBorder />}
                    checked={el.completed ? true : false}
                    checkedIcon={<Favorite />}
                    onChange={() => getChecked(el.id)}
                  ></Checkbox>
                  <ListItemText className={classes.ListItemText} primary={el.title} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Container>
    </StyledEngineProvider>
  );
};

export default Todolist;
