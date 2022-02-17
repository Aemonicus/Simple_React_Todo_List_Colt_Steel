import React from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo.js";

function TodoList({ todos, editTodo, removeTodo, toggleTodo }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((item, i) => (
            <>
              <Todo
                id={item.id}
                task={item.task}
                key={item.id}
                completed={item.completed}
                editTodo={editTodo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}

export default TodoList;
