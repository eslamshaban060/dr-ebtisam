import { LiaSearchSolid } from "react-icons/lia";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ lan }) => {
  return (
    <div
      className={`search focus-within:border-2 hover:border-2 border-[var(--nv)] flex-1 hidden max-h-16 h-[58px] shadow-[var(--shadow-1)]  sm:flex  items-center gap-5 px-5  ${lan === "ar" ? "pr-20" : "pl-20"}  bg-[var(--lg)] rounded-xl relative `}
    >
      <label
        htmlFor="Search"
        className={`absolute ${lan === "ar" ? "right-5 " : " left-5"} z-2`}
      >
        {lan === "ar" ? (
          <LiaSearchSolid size={24} />
        ) : (
          <HiOutlineSearch size={24} />
        )}
      </label>
      <input
        id="Search"
        type="text"
        className="focus:outline-0 w-[90%] max-w-[460px]  h-[44px] py-2 text-lg font-light "
        placeholder={
          lan === "ar"
            ? "  اكتب ما تبحث عنه..."
            : "Type what you’re looking for..."
        }
      />
    </div>
  );
};
export default SearchBar;
