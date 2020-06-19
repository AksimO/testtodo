import * as React from "react";
import ReactDom from "react-dom";
import { TodoApp } from "./TodoApp/TodoApp";

console.log("This is root", document.getElementById("root"));
ReactDom.render(<TodoApp />, document.getElementById("root"));
