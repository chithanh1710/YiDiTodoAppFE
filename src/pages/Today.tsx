import { UpcomingItem } from "../components/Upcoming/UpcomingItem";
import { useTodo } from "../context/contextApi";

export function Today() {
  const { getTodayData } = useTodo();
  return (
    <div>
      <div className="flex items-center gap-10">
        <h2>Today</h2>
        <span className="w-16 h-16 flex items-center justify-center text-2xl shadow-lg bg-gray-300 text-gray-600 font-semibold rounded-xl">
          {getTodayData().length}
        </span>
      </div>
      <UpcomingItem name="" dataList={getTodayData()} />
    </div>
  );
}
