import React, { useState } from "react";

const Stats = function ({todoList}) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(curr => !curr);
  }

  const totalNumberOfTodos = todoList.length;
  const completed = todoList.filter(todo => todo.packed).length;

  return (
    <div className="sort--btn">
      <h5><i className="fa-solid fa-list-ul"></i> All <span>{totalNumberOfTodos}</span></h5>
      <h5 className={isCompleted ? "completed" : "not-completed"} onClick={handleClick}><i className="fa-regular fa-circle-check"></i> Completed <span>{completed}</span></h5>
    </div>
  );
}

export default Stats;