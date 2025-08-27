import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import initialTodos from "../data/initialtodos";

describe("TodoList", () => {
  test("renders initial todos from static array", () => {
    render(<TodoList />);
    initialTodos.forEach(({ text }) => {
      expect(screen.getByRole("button", { name: text })).toBeInTheDocument();
    });
  });

  test("adds a new todo via AddTodoForm", () => {
    render(<TodoList />);
    const input = screen.getByLabelText(/new todo/i);
    const form = screen.getByRole("form", { hidden: true }) // not reliable across setups
      || screen.getByLabelText("add-todo-form"); // fallback using aria-label on form

    // If role query for form is not available in your setup, just submit by clicking the button:
    const addBtn = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addBtn);

    expect(screen.getByRole("button", { name: "Write tests" })).toBeInTheDocument();
  });

  test("toggles a todo when clicking the item", () => {
    render(<TodoList />);
    const itemBtn = screen.getByRole("button", { name: /learn react/i });

    // Initially not completed
    expect(itemBtn).not.toHaveClass("line-through");
    expect(itemBtn).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(itemBtn);

    // Now completed
    expect(itemBtn).toHaveClass("line-through");
    expect(itemBtn).toHaveAttribute("aria-pressed", "true");
  });

  test("deletes a specific todo", () => {
    render(<TodoList />);
    const targetText = /build a todo app/i;

    // Find the <li> that contains the target and click its Delete button
    const itemButton = screen.getByRole("button", { name: targetText });
    const li = itemButton.closest("li");
    const deleteBtn = within(li).getByRole("button", { name: /delete/i });

    fireEvent.click(deleteBtn);

    expect(screen.queryByRole("button", { name: targetText })).not.toBeInTheDocument();
  });
});
