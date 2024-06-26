import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddExhibitItem from "./AddExhibitItem";
import { GetSingleClevelandArtwork } from "../api/api";

export default function ObjectPageCleveland() {
  // Read the objectID from the URL
  const { objectID } = useParams();

  const navigate = useNavigate();

  const [artwork, setArtwork] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // Pass the objectID to the backend to fetch a particular artwork
    GetSingleClevelandArtwork(objectID)
      .then(({ artwork }) => {
        setIsLoading(false);
        setArtwork(artwork);
      })
      .catch(({ response: { status, statusText } }) => {
        setIsLoading(false);
        setError({ status, statusText });
      });
  }, []);

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
    <div className="grid gap-3">
      <div className="flex justify-end mb-2">
        <button
          title="Back button"
          onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </div>

      <div className="relative md:w-60">
        {artwork &&
          (artwork.image?.url ? (
            <img
              src={artwork.image.url}
              alt="Artwork Image"
              className="exhibit-object-image"
            />
          ) : (
            <img
              src={"../img/NoImageIcon.png"}
              alt="Missing Image Icon"
              className="exhibit-object-missing-image"
            />
          ))}
        <div className="absolute top-2 right-2">
          <AddExhibitItem exhibit={artwork} />
        </div>
      </div>
      <div>
        <h1 className="text-2xl">{artwork.title}</h1>
      </div>
      <div>
        <p className="text-lg">{artwork.creators}</p>
      </div>
      <div>{artwork.creation_date}</div>
      <div>{artwork.description}</div>
      {artwork.did_you_know && (
        <div>
          <p className="font-semibold">Did you know?</p>

          {artwork.did_you_know}
        </div>
      )}

      <div>
        <p>
          Collection: <br />
          {artwork.collection}
        </p>
      </div>
      <div>
        {artwork.department ? (
          <p>
            Department: <br />
            {artwork.department}
          </p>
        ) : (
          <p>This item is currently not available to view in the gallery.</p>
        )}
      </div>
      <div>
        {artwork.url ? (
          <a
            href={artwork.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Learn more about this artwork here.
          </a>
        ) : (
          <p>Further information is not available for this artwork.</p>
        )}
      </div>
    </div>
  );
}
