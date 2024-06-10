import React, { useState } from "react";

export default function DropdownList({
  setMuseum,
  setPageNumber,
  setActiveSearch,
}) {
  const [clicked, setClicked] = useState(false);



  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setClicked(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-center md:text-xl">
        <h2>Choose a museum</h2>
      </div>
      <button
        className="dropdown"
        onClick={() => setClicked(!clicked)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={clicked}>
        Select
      </button>

      <div className={`dropdown-menu ${clicked ? "" : "hidden"}`}>
        <button
          className="dropdown-menu-item"
          onClick={() => {
            setMuseum("metropolitan");
            setPageNumber(1);
            setActiveSearch(false);
            setClicked(false);
          }}>
          Metropolitan Museum
        </button>
        <button
          className="dropdown-menu-item"
          onClick={() => {
            setMuseum("cleveland");
            setPageNumber(1);
            setActiveSearch(false);
            setClicked(false);
          }}>
          Cleveland Museum
        </button>
      </div>
    </div>
  );
}
