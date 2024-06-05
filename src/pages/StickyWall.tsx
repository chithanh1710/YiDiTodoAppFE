import { Plus } from "lucide-react";

export function StickyWall() {
  return (
    <div>
      <div className="flex items-center gap-10">
        <h2>Sticky Wall</h2>
        <span className="w-16 h-16 flex items-center justify-center text-2xl shadow-lg bg-gray-300 text-gray-600 font-semibold rounded-xl">
          {length}
        </span>
      </div>
      <StickyWallList />
    </div>
  );
}

const stickyWallListData = [
  {
    name: "test",
    content: "dsadsa",
    color: "bg-slate-300",
  },
  {
    name: "test",
    content: "dsadsa",
    color: "bg-slate-300",
  },
  {
    name: "test",
    content: "dsadsa",
    color: "bg-red-300",
  },
  {
    name: "test",
    content: "dsadsa",
    color: "bg-yellow-300",
  },
];

function StickyWallList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6">
      {stickyWallListData.map((data, i) => (
        <StickyWallItem
          content={data.content}
          name={data.name}
          key={data.name + i}
          color={data.color}
        />
      ))}
      <div className="w-full h-[300px] overflow-auto p-4 bg-gray-300 rounded-xl cursor-pointer transition-all hover:scale-105 hover:shadow-lg flex justify-center items-center">
        <Plus className="h-16 w-16 text-gray-600" />
      </div>
    </div>
  );
}

function StickyWallItem({
  name,
  content,
  color,
}: {
  name: string;
  content: string;
  color: string;
}) {
  return (
    <div
      className={`w-full h-[300px] overflow-auto p-4 ${color} rounded-xl shadow-lg`}
    >
      <h3>{name}</h3>
      {content.split("   ").map((text, i) => (
        <p key={text + i}>{text}</p>
      ))}
    </div>
  );
}
