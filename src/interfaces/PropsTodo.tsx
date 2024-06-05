import { propsTask } from "./propsTask";

export interface PropsTodo {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  taskList: propsTask[];
  setTaskList: React.Dispatch<React.SetStateAction<propsTask[]>>;
  logout(): void;
  getTodayData: () => propsTask[];
  getTomorrowData: () => propsTask[];
  getThisWeekData: () => propsTask[];
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
