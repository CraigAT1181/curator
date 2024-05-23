import React, { useEffect, useState } from "react";
import ExhibitDisplay from "./ExhibitDisplay";
import { getMetExhibits } from "../api/api";

export default function Home() {
  const [exhibits, setExhibits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  const handleMetClick = () => {
    console.log("You clicked Met!");

    setIsLoading(true);
    getMetExhibits().then(({ exhibits }) => {
      setIsLoading(false);
      console.log(exhibits);
      setExhibits(exhibits);
    });
  };

  const handleFitzClick = () => {
    console.log("You clicked Fitz!");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center mt-2">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={() => {
            handleMetClick();
          }}>
          Metropolitan Museum
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none ml-2"
          onClick={() => {
            handleFitzClick();
          }}>
          Fitzwilliam Museum
        </button>
      </div>

      <div>
        <ExhibitDisplay exhibits={exhibits} />
      </div>
    </div>
  );
}
