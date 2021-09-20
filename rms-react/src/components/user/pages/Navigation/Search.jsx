import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Search = () => {
  const [search, setSearch] = useState("");
  const histry = new useHistory();
  useEffect(() => {}, [search]);
  return (
    <>
      <input
        type="text"
        name="search"
        className="search"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={() => histry.push(`/search/jobs/${search}`)}>
        Search
      </button>
    </>
  );
};

export default Search;
