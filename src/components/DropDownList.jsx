import React, { useState } from "react";

export default function DropdownList({ setMuseum, setPageNumber }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-center md:text-xl">
        <h2>Choose a museum</h2>
      </div>
      <button
        className="dropdown"
        onClick={() => setClicked(!clicked)}>
        Select
      </button>

      <div className={`dropdown-menu ${clicked ? "" : "hidden"}`}>
        <div
          className="dropdown-menu-item"
          onClick={() => {
            setMuseum("metropolitan");
            setPageNumber(1);
          }}>
          Metropolitan Museum
        </div>
        <div
          className="dropdown-menu-item"
          onClick={() => setMuseum("fitzwilliam")}>
          Fitzwilliam Museum
        </div>
      </div>
    </div>
  );
}
