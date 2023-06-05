import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ value, handleInput }) => {
  return (
    <form action="" class="search-bar">
      <input
        type="search"
        name="search"
        pattern=".*\S.*"
        required
        value={value}
        onChange={handleInput}
      />
      <button class="search-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
