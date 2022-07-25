import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import { serverTimestamp } from "firebase/firestore";


function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  //snapshot taken and updates when new changes occur
  useEffect(() => {
    db.collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().list }))
        );
      });
  }, [input]);

  const setter = (event) => {
    event.preventDefault();
    db.collection("todo").add({ list: input, timestamp: serverTimestamp() });
    setInput("");
  };

  return (
    <div className="App">
      <h1>🚀 Todo List 🚀</h1>
      <TextField
        id="filled-textarea"
        label="Enter Todo"
        placeholder="Text"
        multiline
        variant="filled"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></TextField>
      <br />

      <Button
        onClick={setter}
        disabled={!input}
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
      >
        Submit
      </Button>
      <ul>
        {todo.map((value) => (
          <Todo text={value.todo} id={value.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
