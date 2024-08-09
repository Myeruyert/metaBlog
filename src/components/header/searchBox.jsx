import React from "react";

const SearchBox = ({ search, searchHandleChange }) => {
  return (
    <div className="hidden md:flex">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
        <input
          class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search"
          type="text"
          name="search"
          onChange={searchHandleChange}
          value={search}
        />
      </label>
    </div>
  );
};

export default SearchBox;
