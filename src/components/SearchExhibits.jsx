import React, { useState } from "react";

export default function SearchExhibits(setSearched) {
  const [searchTerms, setSearchTerms] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // ADD LOGIC HERE
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="w-full relative">
          <input
            className="search-input"
            value={searchTerms}
            onChange={(e) => handleInputChange(e)}
            type="text"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = notFound
                ? "Sorry, couldn't find that one. Try another."
                : "Search exhibits.")
            }
            placeholder={
              notFound
                ? "Sorry, couldn't find that one. Try another."
                : "Search exhibits."
            }
          />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
