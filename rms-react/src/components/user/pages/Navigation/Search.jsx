import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Search = () => {
  const [search, setSearch] = useState("");
  const histry = new useHistory();
  useEffect(() => { }, [search]);
  const searchHandle = () => {
    if (search) {
      histry.push(`/search/jobs/${search}`)
    } else {
      alert('please type something')
    }
    
  }
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

      <button onClick={searchHandle}>
        Search
      </button>
    </>
  );
};

export default Search;
