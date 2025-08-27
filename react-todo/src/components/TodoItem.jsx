const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      {/* Use a button so clicking the item toggles it (accessible + testable) */}
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-pressed={todo.completed}
        className={`text-left flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </button>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
        className="ml-3 px-2 py-1 rounded bg-red-600 text-white cursor-pointer"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
