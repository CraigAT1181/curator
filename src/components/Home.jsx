import React, { useEffect, useState } from "react";
import ExhibitDisplay from "./ExhibitDisplay";
import { getMetExhibits } from "../api/api";

export default function Home() {
  const [exhibits, setExhibits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  const handleMetClick = () => {
    // ADD CACHING LOGIC HERE
    setIsLoading(true);
    getMetExhibits().then(({ exhibits }) => {
      setIsLoading(false);
      setExhibits(exhibits);
    });
  };

  const handleFitzClick = () => {
    // ADD CACHING LOGIC HERE
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-center md:text-xl">
          <h2>Choose a museum</h2>
        </div>
        <div className="md:flex justify-center">
          <button
            className="button md:w-auto"
            onClick={() => {
              handleMetClick();
            }}>
            Metropolitan Museum
          </button>
          <button
            className="button md:w-auto md:ml-2"
            onClick={() => {
              handleFitzClick();
            }}>
            Fitzwilliam Museum
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          {exhibits && exhibits.length > 0 && (
            <ExhibitDisplay exhibits={exhibits} />
          )}
        </div>
      </div>
    </div>
  );
}
