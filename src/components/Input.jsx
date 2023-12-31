import React, { useState } from "react";

const Input = function ({onAddToDo, onOpenForm}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const toDo = {
      title,
      description,
      id: Date.now(),
      packed: false
    };

    onAddToDo(toDo);

    setTitle("");
    setDescription("");

    onOpenForm();

  }

  return (
      <form onSubmit={handleSubmit}>
        <input className="title" type="text" placeholder="Purchase travel insurance" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create</button>
      </form>
  );
}

export default Input;