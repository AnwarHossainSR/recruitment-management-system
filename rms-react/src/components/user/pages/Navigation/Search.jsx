import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { notify } from "../../../../services/Notification";

const Search = () => {
  const [search, setSearch] = useState("");
  const histry = new useHistory();
  useEffect(() => {}, [search]);
  const searchHandle = (e) => {
    if (search) {
      histry.push(`/search/jobs/${search}`);
    } else {
      e.preventDefault();
      notify("please type something", "error");
    }
  };
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

      <button onClick={searchHandle}>Search</button>
    </>
  );
};

export default Search;
