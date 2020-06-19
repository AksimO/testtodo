import * as React from "react";
import "./TodoApp.css";
import { TodoList } from "../TodoList/TodoList";

export const TodoApp = () => (
  <div className="TodoApp">
    <h1>TodoApp</h1>
    <TodoList />
  </div>
);
