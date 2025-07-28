import{ create } from 'zustand';
import useMessageStore from './useMessageStore';

const loadTasksFromLocalStorage = () => {
  try {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Error loading tasks from localStorage", error);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch(error) {
    console.error("Error saving tasks to localStorage", error)
  }
}

const useTaskStore = create((set, get) => ({
  tasks: loadTasksFromLocalStorage(),

  addTask: (task) => {
    try {
      const updatedTasks = [...get().tasks, task];
      const sortedTasks = updatedTasks.sort((a, b) => a.completed - b.completed);

      set({ tasks: sortedTasks });
      saveTasksToLocalStorage(sortedTasks);

      useMessageStore.getState().setMessage("Task added Successfully", "success");

    } catch (error) {
      console.error("Error adding task:", error);
      useMessageStore.getState().setMessage("Error adding task", "error");
    }
  },

  removeTask: (id) => {
    try {
      const updatedTasks = get().tasks.filter(task => task.id !== id);

      set({ tasks: updatedTasks });
      saveTasksToLocalStorage(updatedTasks);

      useMessageStore.getState().setMessage("Task removed successfully", "success");
    } catch (error) {
      console.log("Error removing task", error);
      useMessageStore.getState().setMessage("Error removing task", "error");
    }
  },

  toggleTask: (id) => {
    try {
      const updatedTasks = get().tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
      const sortedTasks = updatedTasks.sort((a, b) => a.completed - b.completed);

      set({ tasks: sortedTasks });
      saveTasksToLocalStorage(sortedTasks);

      useMessageStore.getState().setMessage("Task updated successfully", "success");
    } catch (error) {
      console.error("Error toggling task:", error);
      useMessageStore.getState().setMessage("Erro toggling task", "error");
    }
  },

  fetchTasks: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      const limited = data.slice(0, 5).map(task => ({
        id: task.id,
        name: task.title,
        completed: task.completed
      }));
      const sorted = limited.sort((a, b) => a.completed - b.completed);

      set({ tasks: sorted });
      saveTasksToLocalStorage(sorted);

      useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      useMessageStore.getState().setMessage('Error fetching tasks', 'error');
    }
  },
}));

export default useTaskStore;