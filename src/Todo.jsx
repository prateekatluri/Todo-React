import React from "react";
import { Alert } from "@mui/material";
import db from "./firebase";

function Todo(props) {
  return (
    <div>
      <Alert
        onClose={(event) => {
          db.collection("todo").doc(props.id).delete();
        }}
      >
        {props.text}
      </Alert>
    </div>
  );
}

export default Todo;
