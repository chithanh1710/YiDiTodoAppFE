import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { taskItemProps } from "../../interfaces/taskItemProps";
import { Plus } from "lucide-react";

const ListColor = [
  "bg-yellow-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-orange-600",
  "bg-fuchsia-500",
  "bg-rose-500",
];

export function TaskList({
  name,
  data,
  showMenu,
  setShowMenu,
}: {
  name: string;
  data: taskItemProps[];
  showMenu: boolean;

  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isTackItem, setIsTackItem] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [currentColor, setCurrentColor] = useState("bg-yellow-500");
  return (
    <>
      <h4>{name}</h4>
      {data.length > 6
        ? data
            .slice(0, 6)
            .map((item) => (
              <TaskItem
                showMenu={showMenu}
                isTackItem={isTackItem}
                setIsTackItem={setIsTackItem}
                data={item}
                key={item.id}
                name={name}
              />
            ))
        : data.map((item) => (
            <TaskItem
              showMenu={showMenu}
              isTackItem={isTackItem}
              setIsTackItem={setIsTackItem}
              data={item}
              key={item.id}
              name={name}
            />
          ))}
      {name === "Lists" && (
        <div className="flex flex-col gap-6">
          <div
            onClick={() => {
              setShowMenu(false);
              setIsAdd(!isAdd);
            }}
            className="flex justify-between cursor-pointer px-3 py-2 rounded-md items-center"
          >
            <div className="flex gap-4 items-center">
              <Plus />
              <h5
                className={`text-gray-800 font-semibold ${
                  showMenu ? "hidden" : ""
                }`}
              >
                Add New List
              </h5>
            </div>
          </div>
          {isAdd && !showMenu && (
            <div className="px-4 py-6 border-[3px] border-gray-300 rounded-lg">
              <div className="flex justify-center items-center w-full p-2 rounded-md border border-gray-300 gap-2">
                <label
                  htmlFor="listName"
                  className={`w-5 h-5 ${currentColor} inline-block rounded flex-shrink-0`}
                ></label>
                <input
                  className="outline-none bg-gray-200 placeholder:font-semibold"
                  type="text"
                  id="listName"
                  placeholder="List Name"
                />
              </div>
              <div className="flex gap-2 justify-between mt-4">
                {ListColor.map((color) => (
                  <div
                    onClick={() => setCurrentColor(color)}
                    className={`${color} w-5 h-5 rounded`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
