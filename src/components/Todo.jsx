import React from "react";
import TodoList from "./TodoList";

const Todo = function ({todoList, onDeleteTodo, onCrossOut}) {
  return (
    <ul>
      {todoList.map(todo => <TodoList key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCrossOut={onCrossOut} />)}
    </ul>
  );
}

export default Todo;