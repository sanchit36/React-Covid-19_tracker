import React from "react";

function Search({ searchInput, setSearchInput }) {
  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }
  return (
    <>
      <center className="container pb-5 d-flex justify-content-center ">
        <form id="form" className="form-inline">
          <input
            onChange={handleChange}
            id="input"
            className="form-control"
            type="search"
            placeholder="Search..."
          />
        </form>
      </center>
    </>
  );
}

export default Search;
