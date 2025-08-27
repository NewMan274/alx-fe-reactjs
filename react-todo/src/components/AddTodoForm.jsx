import { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form" className="flex gap-2 mb-4">
      <input
        aria-label="New todo"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a todo"
        className="flex-1 border p-2 rounded"
      />
      <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
