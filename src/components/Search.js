import React from "react";

function Search({search, setSearch}) {

  return (
    <div>
      <input
        type="text"
        id="search"
        placeholder="Type lyrics to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;