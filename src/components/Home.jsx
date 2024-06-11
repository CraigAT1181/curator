import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getClevelandArtworks,
  getMetExhibits,
  searchClevelandArtworks,
  searchMetExhibits,
} from "../api/api";

import ExhibitDisplay from "./ExhibitDisplay";
import SearchExhibits from "./SearchExhibits";
import PageChange from "./PageChange";
import DropdownList from "./DropDownList";

export default function Home() {
  const navigate = useNavigate();
  const [museum, setMuseum] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [pageTotal, setPageTotal] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (museum) {
      setIsLoading(true);

      const fetchData = () => {
        if (!activeSearch) {
          if (museum === "metropolitan") {
            return getMetExhibits(pageNumber);
          } else if (museum === "cleveland") {
            return getClevelandArtworks(pageNumber);
          }
        } else {
          const keywords = searchTerms.toLowerCase();
          if (museum === "metropolitan") {
            return searchMetExhibits(keywords, pageNumber);
          } else if (museum === "cleveland") {
            return searchClevelandArtworks(keywords, pageNumber);
          }
        }
      };

      fetchData()
        .then(({ exhibits, artworks, total_pages }) => {
          setIsLoading(false);
          setExhibits(exhibits || artworks);
          setPageTotal(total_pages);
          setSearchInitiated(false);
        })
        .catch(({ response: { status, statusText } }) => {
          setIsLoading(false);
          setError({ status, statusText });
        });
    } else {
      setExhibits([]);
      setPageTotal(null);
    }
  }, [museum, pageNumber, activeSearch, searchInitiated]);

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
          setActiveSearch={setActiveSearch}
        />
      </div>

      {exhibits.length > 0 && (
        <div className="md:flex justify-center">
          <SearchExhibits
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            setActiveSearch={setActiveSearch}
            setSearchInitiated={setSearchInitiated}
            setPageNumber={setPageNumber}
          />
        </div>
      )}

      <div>
        <div>
          <ExhibitDisplay
            exhibits={exhibits}
            pageTotal={pageTotal}
          />
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {exhibits.length > 0 && (
          <PageChange
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            pageTotal={pageTotal}
          />
        )}
      </div>
    </div>
  );
}
