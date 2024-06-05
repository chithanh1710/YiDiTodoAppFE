import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { PropsTodo } from "../interfaces/PropsTodo";
import { propsTask } from "../interfaces/propsTask";

const TodoContext = createContext<PropsTodo | undefined>(undefined);

function TodoProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [userId, setUserId] = useState("");
  const [taskList, setTaskList] = useState<propsTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const value = {
    userId: userId || sessionStorage.getItem("userId") || "",
    setUserId,
    taskList,
    setTaskList,
    logout,
    getTodayData,
    getTomorrowData,
    getThisWeekData,
    isLoading,
    setIsLoading,
  };
  useEffect(() => {
    if (userId !== "") {
      sessionStorage.setItem("userId", userId);
    }
  }, [userId]);

  function logout() {
    sessionStorage.removeItem("userId");
  }

  function getTodayData() {
    const newTask = taskList.filter(
      (item) =>
        new Date(item.updated_at).toLocaleDateString() ===
        today.toLocaleDateString()
    );
    if (newTask.length === 0) return [];
    return newTask;
  }

  function getTomorrowData() {
    const newTask = taskList.filter(
      (item) =>
        new Date(item.updated_at).toLocaleDateString() ===
        tomorrow.toLocaleDateString()
    );
    if (newTask.length === 0) return [];
    return newTask;
  }

  function getThisWeekData() {
    const newTask = taskList.filter(
      (item) =>
        new Date(item.updated_at).toLocaleDateString() !==
          tomorrow.toLocaleDateString() &&
        new Date(item.updated_at).toLocaleDateString() !==
          today.toLocaleDateString()
    );
    if (newTask.length === 0) return [];
    return newTask;
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export { TodoProvider, useTodo };
