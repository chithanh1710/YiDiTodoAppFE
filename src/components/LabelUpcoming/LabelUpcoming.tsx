import { ChevronRight } from "lucide-react";
import { propsTask } from "../../interfaces/propsTask";
import { useDeleteTask } from "../../customHook/deleteTaskId";

export function LabelUpcoming({ data }: { data: propsTask }) {
  const { deleteTask, isDelete } = useDeleteTask();
  return (
    <label
      htmlFor={"check" + data._id}
      className="flex cursor-pointer items-center justify-between border-t border-gray-200 pb-4 pt-4 last:pb-0 first:pt-0 first:border-t-0"
    >
      <div className="flex items-center gap-4">
        <input
          onClick={() => deleteTask(data._id)}
          className="w-5 h-5 cursor-pointer "
          id={"check" + data._id}
          type="checkbox"
          disabled={isDelete}
        />
        <p className="text-lg">{data.description}</p>
      </div>
      <ChevronRight />
    </label>
  );
}
