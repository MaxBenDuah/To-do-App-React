import React, { useState } from "react";

const Input = function ({onAddToDo, onOpenForm}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const options = {
    hour: "numeric",
    minute: "numeric"
  };

  const now = new Date();
  const date = new Intl.DateTimeFormat(navigator.language, options).format(now);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const toDo = {
      title,
      description,
      id: Date.now(),
      packed: false,
      date
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