import React from "react";

const ClearList = function ({onClearTodoList, children}) {
  return (
    <div>
      <button className="clearlist--btn" onClick={onClearTodoList}>{children}</button>
    </div>
  );
}

export default ClearList;