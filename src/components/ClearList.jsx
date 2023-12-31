import React from "react";

const ClearList = function ({onClearTodoList}) {
  return (
    <div>
      <button className="clearlist--btn" onClick={onClearTodoList}>Clear List</button>
    </div>
  );
}

export default ClearList;