import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleInput, searchTerm }) => {
  return (
    <form action="" className="search-bar">
      <input
        type="search"
        name="search"
        pattern=".*\S.*"
        required
        onChange={handleInput}
        searchTerm={searchTerm}
      />
      <button className="search-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
