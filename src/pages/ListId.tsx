import { useParams } from "react-router-dom";
import { UpcomingItem } from "../components/Upcoming/UpcomingItem";
import { useTodo } from "../context/contextApi";

export function ListId() {
  const { getTodayData } = useTodo();
  const { id } = useParams();
  return (
    <div>
      <div className="flex items-center gap-10">
        <h2 className="capitalize">{id}</h2>
        <span className="w-16 h-16 flex items-center justify-center text-2xl shadow-lg bg-gray-300 text-gray-600 font-semibold rounded-xl">
          {length}
        </span>
      </div>
      <UpcomingItem name="" dataList={getTodayData()} />
    </div>
  );
}
