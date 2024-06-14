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
import { useSession } from "./SessionContext";

export default function Home() {
  const navigate = useNavigate();
  const {
    museum,
    exhibits,
    setExhibits,
    searchTerms,
    activeSearch,
    pageNumber,
    lastSearch
    
  } = useSession();
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [pageTotal, setPageTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Logic to select which API request to make
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

      // Run fetchData to populate exhibits or artworks and set the total pages
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
    // Set empty values to exhibits and pageTotal if museum isn't selected
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
        <DropdownList />
      </div>

      {exhibits.length > 0 && (
        <div className="md:flex justify-center">
          <SearchExhibits setSearchInitiated={setSearchInitiated}/>
        </div>
      )}

      {exhibits && activeSearch && (lastSearch === searchTerms) && (
        <div className="flex justify-center mb-2">
          <div className="mt-2">
            <p className="font-semibold text-center">
              Search results for "{lastSearch}"
            </p>
          </div>
        </div>
      )}

      <div>
        <div>
          <ExhibitDisplay pageTotal={pageTotal} />
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {exhibits.length > 0 && <PageChange pageTotal={pageTotal} />}
      </div>
    </div>
  );
}
