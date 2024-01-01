import React, {useState} from "react";
import Header from "./Header";
import Task from "./Task";
import Input from "./Input";
import Todo from "./Todo";
import ClearList from "./ClearList";
import Stats from "./Stats";

const App = function () {
  const [todoList, setTodoList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  

  const handleToDo = (toDo) => {
    setTodoList(prevValue => [...prevValue, toDo])
  }

  const handleDelete = (id) => {
    setTodoList(prevTodo => prevTodo.filter(todo => todo.id !== id));
  }

  const handleCrossOut = (id) => {
    setTodoList(prevTodo => prevTodo.map(todo => todo.id === id ? {...todo, packed: !todo.packed} : todo));
  }

  const clearTodoList = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items in your list?");
    confirmed && setTodoList([]);
  }

  const handleOpenForm = () => {
    setIsOpen(curr => !curr);
  }

  return (
    <div className="main-app">
      <div className="inner">
        <Header />
        <Task onOpenForm={handleOpenForm} />
        {isOpen && <Input onAddToDo={handleToDo} onOpenForm={handleOpenForm} />}
        {todoList.length > 0 && <Stats todoList={todoList} />}
        <Todo todoList={todoList} onDeleteTodo={handleDelete} onCrossOut={handleCrossOut} />
        {todoList.length > 0 && <ClearList onClearTodoList={clearTodoList}>Clear List</ClearList>}
      </div>
    </div>
  );
}

export default App;