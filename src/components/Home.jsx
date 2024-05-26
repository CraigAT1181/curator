import React, { useEffect, useState } from "react";
import ExhibitDisplay from "./ExhibitDisplay";
import PageChange from "./PageChange";
import { getMetExhibits } from "../api/api";
import DropdownList from "./DropDownList";

export default function Home() {
  const [museum, setMuseum] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (museum && museum === "metropolitan") {
      setIsLoading(true);
      getMetExhibits(pageNumber).then(({ exhibits }) => {
        setIsLoading(false);
        setExhibits(exhibits);
      });
    } else if (museum && museum === "fitzwilliam") {
    } else {
      setExhibits([]);
    }
  }, [museum]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center">
        <DropdownList setMuseum={setMuseum} />
      </div>

      <div>
        <div className="flex justify-center">
          {exhibits && exhibits.length > 0 && (
            <ExhibitDisplay exhibits={exhibits} />
          )}
        </div>
      </div>

      {exhibits.length > 0 && (
        <PageChange
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </div>
  );
}
