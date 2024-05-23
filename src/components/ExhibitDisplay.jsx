import React, { useEffect, useState } from "react";
import SearchExhibits from "./SearchExhibits";

export default function ExhibitDisplay({ exhibits }) {
  const [searchedExhibits, setSearchedExhibits] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <SearchExhibits setSearchedExhibits={setSearchedExhibits} />
      </div>
      <div>
        {exhibits.length > 0 ? (
          <ol>
            {exhibits.map((exhibit) => {
              if (exhibit.image !== null) {
                return <li key={exhibit.objectID}>{exhibit.title}</li>;
              }
              return null;
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}
