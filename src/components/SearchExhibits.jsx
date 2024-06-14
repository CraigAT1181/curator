import React, { useState } from "react";
import { useSession } from "./SessionContext";

export default function SearchExhibits({ setSearchInitiated }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const { searchTerms, setSearchTerms, setActiveSearch, setPageNumber, setLastSearch } =
    useSession();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    // Sanitize input by removing invalid characters
    const sanitizedInput = value.replace(/[^\w\s]/g, " ");
    const keywordArray = sanitizedInput
      .split(" ")
      .filter((word) => word.trim() !== "");
    const joinedString = keywordArray.join(" ");

    // Set sanitized search terms
    setSearchTerms(joinedString);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerms) {
      // Reset error message and initiate search
      setErrorMessage("");
      setActiveSearch(true);
      setSearchInitiated(true);
      setPageNumber(1);
      setLastSearch(searchTerms);
    } else {
      // Set error message if search term is blank or only includes invalid characters
      setErrorMessage("Must include words or numbers.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="w-full relative">
          <input
            className={`${errorMessage ? "input-error" : "search-input"}`}
            value={userInput}
            onChange={handleInputChange}
            type="text"
            placeholder="Search Exhibits"
            onFocus={(e) => {
              e.target.placeholder = "";
              setErrorMessage("");
            }}
            onBlur={(e) => {
              e.target.placeholder = "Search Exhibits";
            }}
          />
          <button
            type="submit"
            className="search-button">
            <i
              className="fa-solid fa-magnifying-glass"
              aria-label="search button"
              title="search button"></i>
          </button>
        </div>
        <div className="text-center mt-2">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
