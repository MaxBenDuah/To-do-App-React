import React from "react";
import Checkbox from '@mui/material/Checkbox';

const TodoList = function ({todo, onDeleteTodo, onCrossOut}) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
      <li>
        <div className="todo--list">         
          <div class="container">
            <Checkbox {...label} value={todo.packed} onChange={() => onCrossOut(todo.id)} sx={{paddingTop: 0, color: "#1d4ed8", '&.Mui-checked': {color: "#1d4ed8"}}} />
              
            <div className="todo--details">
              <h4 style={{textDecoration: todo.packed ? "line-through" : ""}}>{todo.title}</h4>
              <p>{todo.description}</p>
            </div>
          </div>
          <div onClick={() => onDeleteTodo(todo.id)}>
            <i className="fa-solid fa-trash trash--can"></i>
          </div>
        </div>
        <hr />
        <p>Today <span className="display--time">{todo.date}</span></p>
      </li>
  );
}

export default TodoList;