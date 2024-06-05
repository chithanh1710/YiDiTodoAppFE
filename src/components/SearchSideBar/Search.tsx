import { SearchIcon } from "lucide-react";

export function Search({ showMenu }: { showMenu: boolean }) {
  return (
    <div
      className={`p-3 border border-gray-300 rounded-full flex ${
        showMenu ? "hidden" : ""
      }`}
    >
      <label htmlFor="search">
        <SearchIcon className="text-gray-500" />
      </label>
      <input
        className="bg-gray-200 w-full border-l ml-2 pl-2 border-gray-300 outline-none"
        id="search"
        type="text"
      />
    </div>
  );
}
