import React, { FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi'

interface SearchProps {
  query: string,
  setQuery: (newQuery: string) => void
}

const Search: FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
      <div className="relative inline-block">
        <input
          type="search"
          value={query}
          placeholder="Поиск"
          className="py-1 px-2 font-normal rounded-md border-2 border-gray-400 outline-none w-[300px] pr-8 focus:border-black"
          onChange={(e) => setQuery(e.target.value)}
        />
        <BiSearch
          size={25}
          className="absolute abs-y-center right-1 "
        />
      </div>
    </form>
  )
};

export default Search;
