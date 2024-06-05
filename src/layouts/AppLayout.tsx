import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { useTodo } from "../context/contextApi";
import { useQuery } from "@tanstack/react-query";
import { getTaskByUserId } from "../services/taskApi";

export default function AppLayout() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(() => window.innerWidth <= 1024);
  const { userId, setTaskList, setIsLoading } = useTodo();
  const { data, isLoading } = useQuery({
    queryKey: ["taskList"],
    queryFn: () => getTaskByUserId(userId),
  });

  useEffect(() => {
    if (data) {
      setTaskList(data?.data);
    }
    setIsLoading(isLoading);
  }, [data, isLoading, setTaskList, setIsLoading]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width, setWidth]);

  if (!userId) {
    return <Navigate to="/login" />;
  }

  return (
    <div
      className={`grid min-h-screen p-4 bg-gray-100 ${
        showMenu ? "grid-cols-1" : "grid-cols-[300px_1fr]"
      } max-xl:grid-cols-1 max-sm:p-2`}
    >
      <div
        onMouseOver={() => {
          if (width <= 1024) {
            setShowMenu(false);
          }
        }}
        onMouseLeave={() => {
          if (width <= 1024) {
            setShowMenu(true);
          }
        }}
        className={`bg-gray-200 rounded-xl p-4 ${
          showMenu ? "fixed h-[97%]" : ""
        } max-xl:fixed max-xl:h-[97%] max-sm:p-2`}
      >
        <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div
        className={`p-4 pl-10 ${
          showMenu ? "ml-20" : ""
        } max-xl:ml-20 max-sm:ml-12 max-sm:p-0 max-sm:pl-6`}
      >
        <Outlet />
      </div>
    </div>
  );
}
