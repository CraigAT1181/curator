import React, { useEffect, useState } from "react";
import ExhibitDisplay from "./ExhibitDisplay";
import PageChange from "./PageChange";
import { getMetExhibits } from "../api/api";
import DropdownList from "./DropDownList";

export default function Home() {
  const [museum, setMuseum] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (museum && museum === "metropolitan") {
      setIsLoading(true);
      getMetExhibits(pageNumber).then(({ exhibits, total_pages }) => {
        setIsLoading(false);
        setExhibits(exhibits);
        setTotalPages(total_pages);
      });
    } else if (museum && museum === "fitzwilliam") {
    } else {
      setExhibits([]);
      setTotalPages(null);
    }
  }, [museum, pageNumber]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center">
        <DropdownList
          setMuseum={setMuseum}
          setPageNumber={setPageNumber}
        />
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
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
