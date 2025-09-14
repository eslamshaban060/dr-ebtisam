import { SearchIcon } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="search flex-1 hidden max-h-16 shadow-[var(--shadow-1)] lg:flex justify-center items-center gap-5 px-5  pr-20 bg-[var(--lg)] rounded-xl relative ">
      <label htmlFor="Search" className="absolute right-2 z-2">
        <SearchIcon size={24} />
      </label>
      <input
        id="Search"
        type="text"
        className="focus:outline-0 max-w-[460px] h-[60px] p-2 text-lg font-light "
        placeholder=" اكتب ما تبحث عنه......"
      />
    </div>
  );
};
export default SearchBar;
