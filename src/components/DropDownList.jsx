import React, { useState } from "react";
import { useSession } from "./SessionContext";

export default function DropdownList() {
  const [clicked, setClicked] = useState(false);
  const { setMuseum, setPageNumber, setActiveSearch } = useSession();

  // Toggle the dropdown menu visibility
  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  // Close the dropdown menu when the Escape key is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setClicked(false);
    }
  };

  // Handle click on Metropolitan Museum option
  const handleMetClick = () => {
    setMuseum("metropolitan");
    setPageNumber(1);
    setActiveSearch(false);
    setClicked(false);
  };

  // Handle click on Cleveland Museum option
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
        aria-expanded={clicked}
      >
        Select
      </button>

      <div className={`dropdown-menu ${clicked ? "" : "hidden"}`}>
        <button
          className="dropdown-menu-item"
          onClick={handleMetClick}
        >
          Metropolitan Museum
        </button>
        <button
          className="dropdown-menu-item"
          onClick={handleClevelandClick}
        >
          Cleveland Museum
        </button>
      </div>
    </div>
  );
}
