import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div id="cover">
      <form method="get" action="">
        <div class="tb">
          <div class="td">
            <input type="text" placeholder="Search" required></input>
          </div>
          <div class="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>

    // <div className="searchBar">
    //   <input type="search" className="searchBox" />
    // </div>
  );
};

export default SearchBar;
