import React, { useState } from "react";

export default function SearchExhibits(setSearchedExhibits) {
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
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <div>
          <input
            id="exhibit-search"
            className="#"
            value={searchTerms}
            onChange={(e) => handleInputChange(e)}
            type="text"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = notFound
                ? "Sorry, couldn't find that one. Try another."
                : "Type key words here.")
            }
            placeholder={
              notFound
                ? "Sorry, couldn't find that one. Try another."
                : "Type key words here."
            }
          />
          <button
            className=""
            id="">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
