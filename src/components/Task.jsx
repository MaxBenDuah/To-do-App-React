import React from "react";

const Task = function ({onOpenForm}) {

  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const formatDate = new Intl.DateTimeFormat(navigator.language, options).format(date);

  return (
    <>
      <div className="task">
        <div>
          <h3 className="today--task">Today's Task</h3>
          <p>{formatDate}</p>
        </div>
        <div>
          <button onClick={onOpenForm}><i className="fa-solid fa-plus"></i> New Task</button>
        </div>
      </div>
    </>
  );
}

export default Task;