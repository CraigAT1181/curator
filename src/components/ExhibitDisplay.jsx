import React, { useEffect, useState } from "react";
import SearchExhibits from "./SearchExhibits";
import ObjectCard from "./ObjectCard";


export default function ExhibitDisplay({ exhibits }) {
  const [searchedExhibits, setSearchedExhibits] = useState([]);
  

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

      
    </div>
  );
}
