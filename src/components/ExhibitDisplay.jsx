import React, { useEffect, useState } from "react";
import SearchExhibits from "./SearchExhibits";
import ObjectCard from "./ObjectCard";

export default function ExhibitDisplay({ exhibits }) {
  const [searchedExhibits, setSearchedExhibits] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {}, []);

  return (
    <div>
      {/* ---- SEARCH BAR ---- */}
      <div>
        {exhibits.length > 0 && (
          <SearchExhibits setSearchedExhibits={setSearchedExhibits} />
        )}
      </div>

      {/* ---- EXHIBIT DISPLAY ---- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exhibits.length > 0
          ? exhibits.map((exhibit) => {
              return (
                <ObjectCard
                  key={exhibit.objectID}
                  exhibit={exhibit}
                />
              );
            })
          : null}
      </div>

      {/* ---- PAGE BUTTONS ---- */}
      <div className="flex">
        {exhibits.length > 0 && (
          <>
            <button>-</button>
            <p>{pageNumber}</p>
            <button>+</button>
          </>
        )}
      </div>
    </div>
  );
}
