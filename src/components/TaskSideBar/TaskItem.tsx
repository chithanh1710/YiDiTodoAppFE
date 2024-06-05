import { useNavigate, useParams } from "react-router-dom";
import { taskItemProps } from "../../interfaces/taskItemProps";

export function TaskItem({
  data,
  setIsTackItem,
  name,
  showMenu,
}: {
  data: taskItemProps;
  isTackItem: number;
  setIsTackItem: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  showMenu: boolean;
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const param = id ? id : location.pathname.slice(5).replace("-", " ");

  return (
    <div
      className={`flex justify-between cursor-pointer px-3 py-2 rounded-md items-center ${
        data.text.toLowerCase().includes(param)
          ? "bg-gray-300 font-bold text-gray-800"
          : ""
      }`}
      onClick={() => {
        setIsTackItem(data.id);
        if (name === "Lists") {
          navigate("list/" + data.text.toLowerCase());
        } else {
          navigate(data.text.toLowerCase().replace(" ", "-"));
        }
      }}
    >
      <div className="flex gap-4 items-center">
        {data.icon}
        <h5
          className={`${
            data.text.toLowerCase().includes(param)
              ? "font-bold text-gray-800"
              : ""
          }
          ${showMenu ? "hidden" : ""}
          `}
        >
          {data.text}
        </h5>
      </div>
      {data.count > 0 && !showMenu && <h6>{data.count}</h6>}
    </div>
  );
}
