import React from "react";
import "./style.css";

function SearchBar() {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <label className="searchLabel">
        <input
          className="searchInput"
          type="text"
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
}

export default SearchBar;
