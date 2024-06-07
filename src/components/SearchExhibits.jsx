import React, { useEffect, useState } from "react";

export default function SearchExhibits({
  searchTerms,
  setSearchTerms,
  setActiveSearch,
  setSearchInitiated,
  setPageNumber,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  let [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    const sanitizedInput = value.replace(/[^\w\s]/g, " ");

    const keywordArray = sanitizedInput
      .split(" ")
      .filter((word) => word.trim() !== "");
    const joinedString = keywordArray.join(" ");

    setSearchTerms(joinedString);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerms) {
      setActiveSearch(true);
      setSearchInitiated(true);
      setPageNumber(1);
    } else if (searchTerms === "") {
      setErrorMessage("Search cannot be blank.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="w-full relative">
          <input
            className={`search-input ${errorMessage ? "input-error" : ""}`}
            value={userInput}
            onChange={handleInputChange}
            type="text"
            placeholder="Search exhibits"
            onFocus={(e) => (e.target.placeholder = "")}
          />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass" aria-label="search button" title="search button"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
