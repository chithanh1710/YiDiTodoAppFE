import { LogOut, Menu, SearchIcon, Settings } from "lucide-react";
import { TaskList } from "../TaskSideBar/TaskList";
import { Search } from "../SearchSideBar/Search";
import {
  CalendarDays,
  ChevronsRight,
  LayoutList,
  StickyNote,
} from "lucide-react";
import { taskItemProps } from "../../interfaces/taskItemProps";
import { useTodo } from "../../context/contextApi";
import { useNavigate } from "react-router-dom";

const dataListSticky: taskItemProps[] = [
  {
    id: 1,
    icon: <div className="h-6 w-6 bg-yellow-500 rounded" />,
    text: "Personal",
    count: 16,
  },
  {
    id: 2,
    icon: <div className="h-6 w-6 bg-red-500 rounded" />,
    text: "Work",
    count: 14,
  },
  {
    id: 3,
    icon: <div className="h-6 w-6 bg-orange-500 rounded" />,
    text: "List 1",
    count: 26,
  },
  {
    id: 4,
    icon: <div className="h-6 w-6 bg-blue-500 rounded" />,
    text: "List 2",
    count: 36,
  },
];

export default function SideBar({
  setShowMenu,
  showMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}) {
  const navigate = useNavigate();
  const { getThisWeekData, getTodayData, getTomorrowData, logout } = useTodo();
  const dataListTask: taskItemProps[] = [
    {
      id: 1,
      icon: <ChevronsRight />,
      text: "Upcoming",
      count:
        getThisWeekData().length +
        getTodayData().length +
        getTomorrowData().length,
    },
    {
      id: 2,
      icon: <LayoutList />,
      text: "Today",
      count: getTodayData().length,
    },
    {
      id: 3,
      icon: <CalendarDays />,
      text: "Calendar",
      count: 0,
    },
    {
      id: 4,
      icon: <StickyNote className="fill-gray-700 stroke-gray-200 rotate-180" />,
      text: "Sticky Wall",
      count: 0,
    },
  ];
  return (
    <div className="flex flex-col h-full justify-between overflow-hidden overflow-y-auto sideBar">
      <div className={`flex flex-col gap-5 ${showMenu ? "items-center" : ""}`}>
        <div className="flex justify-between items-center">
          <h3 className={`${showMenu ? "hidden" : ""}`}>Menu</h3>
          <button className="p-2">
            <Menu
              className="h-8 w-8 text-gray-500"
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setShowMenu((a) => !a);
                } else {
                  if (!showMenu) {
                    setShowMenu(true);
                  }
                }
              }}
            />
          </button>
        </div>
        <button className="p-2">
          <SearchIcon
            className={`h-8 w-8 text-gray-500 ${showMenu ? "" : "hidden"}`}
          />
        </button>
        <Search showMenu={showMenu} />
        <TaskList
          setShowMenu={setShowMenu}
          name="Tasks"
          showMenu={showMenu}
          data={dataListTask}
        />
        <TaskList
          setShowMenu={setShowMenu}
          name="Lists"
          showMenu={showMenu}
          data={dataListSticky}
        />
      </div>
      <div
        className={`flex flex-col gap-5 mt-6 ${showMenu ? "items-center" : ""}`}
      >
        <div className="flex gap-4 cursor-pointer">
          <Settings className={`h-8 w-8 text-gray-500 `} />
          <h5 className={`text-gray-800 text-xl ${showMenu ? "hidden" : ""}`}>
            Settings
          </h5>
        </div>
        <div className="flex gap-4 cursor-pointer mb-2">
          <LogOut className={`h-8 w-8 text-gray-500`} />
          <h5
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className={`text-gray-800 text-xl ${showMenu ? "hidden" : ""}`}
          >
            Log out
          </h5>
        </div>
      </div>
    </div>
  );
}
