import React, { useState } from "react";

export default function DropdownList({ setMuseum }) {
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

      <div
        id="dropdownMenu"
        className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-white border border-gray-200 rounded shadow-md ${
          clicked ? "" : "hidden"
        } z-50`}>
        <div
          className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200"
          onClick={() => setMuseum("metropolitan")}>
          Metropolitan Museum
        </div>
        <div
          className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200"
          onClick={() => setMuseum("fitzwilliam")}>
          Fitzwilliam Museum
        </div>
      </div>
    </div>
  );
}
