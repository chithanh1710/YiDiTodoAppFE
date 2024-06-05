import { UpcomingItem } from "../components/Upcoming/UpcomingItem";
import { useTodo } from "../context/contextApi";

export function Upcoming() {
  const { getThisWeekData, getTodayData, getTomorrowData } = useTodo();
  const length =
    getThisWeekData().length + getTodayData().length + getTomorrowData().length;

  return (
    <div>
      <div className="flex items-center gap-10">
        <h2>Upcoming</h2>
        <span className="w-16 h-16 flex items-center justify-center text-2xl shadow-lg bg-gray-300 text-gray-600 font-semibold rounded-xl">
          {length}
        </span>
      </div>
      <div className="flex h-full w-full flex-col border-[3px] border-gray-300 mt-6 rounded-xl p-4">
        <UpcomingItem name="Today" dataList={getTodayData()} />
        <div className="grid grid-cols-1 gap-6 mt-6 xl:grid-cols-2">
          <UpcomingItem name="Tomorrow" dataList={getTomorrowData()} />
          <UpcomingItem name="This Week" dataList={getThisWeekData()} />
        </div>
      </div>
    </div>
  );
}
