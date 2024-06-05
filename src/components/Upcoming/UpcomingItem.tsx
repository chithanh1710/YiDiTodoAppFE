import { Plus } from "lucide-react";
import { LabelUpcomingList } from "../LabelUpcoming/LabelUpcomingList";
import { propsTask } from "../../interfaces/propsTask";
import { useTodo } from "../../context/contextApi";

export function UpcomingItem({
  name,
  dataList,
}: {
  name: string;
  dataList: propsTask[];
}) {
  const { isLoading } = useTodo();
  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg mt-4">
      <h3>{name}</h3>
      <div className="p-4">
        <div className="border-2 px-4 py-2 flex items-center">
          <label htmlFor={"AddNewTask" + name}>
            <Plus />
          </label>
          <input
            className="w-full bg-gray-100 text-xl py-2 pl-2 ml-4 border-l border-gray-300 outline-none"
            type="text"
            id={"AddNewTask" + name}
            placeholder="Add new task"
          />
        </div>
        <div className="mt-6">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <LabelUpcomingList dataList={dataList} />
          )}
        </div>
      </div>
    </div>
  );
}
