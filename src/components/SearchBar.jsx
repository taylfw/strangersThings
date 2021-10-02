import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <form>
        <fieldset>
          <label id="filter">Search</label>
          <input
            id="filterInput"
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              console.log(searchTerm);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
