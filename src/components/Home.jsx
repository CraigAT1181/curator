import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExhibitDisplay from "./ExhibitDisplay";
import PageChange from "./PageChange";
import { getMetExhibits } from "../api/api";
import DropdownList from "./DropDownList";

export default function Home() {
  const navigate = useNavigate();
  const [museum, setMuseum] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (museum && museum === "metropolitan") {
      setIsLoading(true);
      getMetExhibits(pageNumber)
        .then(({ exhibits, total_pages }) => {
          setIsLoading(false);
          setExhibits(exhibits);
          setTotalPages(total_pages);
        })
        .catch(({ response: { status, statusText } }) => {
          setIsLoading(false);
          setError({ status, statusText });
        });
    } else if (museum && museum === "fitzwilliam") {
    } else {
      setExhibits([]);
      setTotalPages(null);
    }
  }, [museum, pageNumber]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="flex-col text-center">
          <i className="fa-solid fa-spinner fa-spin"></i>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="d-flex-col text-center mt-4">
        <i className="fa-solid fa-exclamation"></i>
        <p>
          Oops, there's been an error: {error.status} {error.statusText}
        </p>
        <button
          className="return-home-button mt-4"
          onClick={() => {
            navigate("/home");
          }}>
          Home
        </button>
      </div>
    );

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

      <div className="flex justify-center mt-4">
        {exhibits.length > 0 && (
          <PageChange
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}
