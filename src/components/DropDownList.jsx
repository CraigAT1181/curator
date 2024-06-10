import React, { useState } from "react";

export default function DropdownList({
  setMuseum,
  setPageNumber,
  setActiveSearch,
}) {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setClicked(false);
    }
  };

  const handleMetClick = () => {
    setMuseum("metropolitan");
    setPageNumber(1);
    setActiveSearch(false);
    setClicked(false);
  };

  const handleClevelandClick = () => {
    setMuseum("cleveland");
    setPageNumber(1);
    setActiveSearch(false);
    setClicked(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-center md:text-xl">
        <h2>Choose a museum</h2>
      </div>
      <button
        className="dropdown"
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={clicked}>
        Select
      </button>

      <div className={`dropdown-menu ${clicked ? "" : "hidden"}`}>
        <button
          className="dropdown-menu-item"
          onClick={handleMetClick}>
          Metropolitan Museum
        </button>
        <button
          className="dropdown-menu-item"
          onClick={handleClevelandClick}>
          Cleveland Museum
        </button>
      </div>
    </div>
  );
}
